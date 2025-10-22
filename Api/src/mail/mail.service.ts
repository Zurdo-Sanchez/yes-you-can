import * as nodemailer from "nodemailer";
import { Injectable, Logger, OnModuleInit } from "@nestjs/common";

@Injectable()
export class MailService implements OnModuleInit {
  private transporter: nodemailer.Transporter | null = null;
  private readonly logger = new Logger(MailService.name);

  async onModuleInit() {
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (host && user && pass) {
      this.transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      });
      this.logger.log(`Using SMTP host ${host}`);
      return;
    }

    // Fallback para desarrollo: Ethereal test account
    try {
      this.logger.log(
        "No SMTP credentials found — creating Ethereal test account"
      );
      const testAccount = await nodemailer.createTestAccount();
      this.transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      this.logger.log(`Ethereal account created: ${testAccount.user}`);
    } catch (err) {
      this.logger.error("Failed creating Ethereal account", err as any);
      throw err;
    }
  }

  async sendContactEmail(payload: {
    name: string;
    email: string;
    telefono?: string;
    message: string;
  }) {
    if (!this.transporter) {
      throw new Error("Mail transporter not initialized");
    }

    const from =
      process.env.MAIL_FROM || process.env.SMTP_USER || "no-reply@example.com";
    const to = process.env.MAIL_TO || process.env.SMTP_USER || from;

    // helper to escape user-provided values for HTML
    const escapeHtml = (unsafe: string) =>
      unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const plainText = `Nombre: ${payload.name}\nEmail: ${
      payload.email
    }\nTelefono: ${payload.telefono || ""}\n\nMensaje:\n${payload.message}`;

    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; color:#222; line-height:1.4">
        <h2 style="color:#1a73e8">Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(
          payload.email
        )}">${escapeHtml(payload.email)}</a></p>
        ${
          payload.telefono
            ? `<p><strong>Teléfono:</strong> ${escapeHtml(
                payload.telefono
              )}</p>`
            : ""
        }
        <hr style="border:none; border-top:1px solid #eee" />
        <h3 style="margin-bottom:6px">Mensaje</h3>
        <div style="white-space: pre-wrap; background:#f9f9f9; padding:12px; border-radius:6px;">${escapeHtml(
          payload.message
        )}</div>
        <hr style="border:none; border-top:1px solid #eee; margin-top:12px" />
        <p style="font-size:12px; color:#666;">Enviado desde la web</p>
      </div>
    `;

    const info = await this.transporter.sendMail({
      from,
      to,
      subject: `Contacto desde web: ${payload.name}`,
      text: plainText,
      html,
    });

    // Si usamos Ethereal, devuelve la URL de preview en logs
    try {
      // nodemailer.getTestMessageUrl funciona con nodemailer import default
      const preview = nodemailer.getTestMessageUrl(info as any);
      if (preview) this.logger.log(`Preview URL: ${preview}`);
    } catch (err) {
      // ignore
    }

    return info;
  }
}
