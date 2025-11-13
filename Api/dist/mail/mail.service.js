var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MailService_1;
import * as nodemailer from "nodemailer";
import { Injectable, Logger } from "@nestjs/common";
let MailService = MailService_1 = class MailService {
    constructor() {
        this.transporter = null;
        this.logger = new Logger(MailService_1.name);
    }
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
            this.logger.log("No SMTP credentials found — creating Ethereal test account");
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
        }
        catch (err) {
            this.logger.error("Failed creating Ethereal account", err);
            throw err;
        }
    }
    async sendContactEmail(payload) {
        if (!this.transporter) {
            throw new Error("Mail transporter not initialized");
        }
        const from = process.env.MAIL_FROM || process.env.SMTP_USER || "no-reply@example.com";
        const to = process.env.MAIL_TO || process.env.SMTP_USER || from;
        // helper to escape user-provided values for HTML
        const escapeHtml = (unsafe) => unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
        const plainText = `Nombre: ${payload.name}\nEmail: ${payload.email}\nTelefono: ${payload.telefono || ""}\n\nMensaje:\n${payload.message}`;
        const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; color:#222; line-height:1.4">
        <h2 style="color:#1a73e8">Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></p>
        ${payload.telefono
            ? `<p><strong>Teléfono:</strong> ${escapeHtml(payload.telefono)}</p>`
            : ""}
        <hr style="border:none; border-top:1px solid #eee" />
        <h3 style="margin-bottom:6px">Mensaje</h3>
        <div style="white-space: pre-wrap; background:#f9f9f9; padding:12px; border-radius:6px;">${escapeHtml(payload.message)}</div>
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
        this.logger.log("Mail sent:", info);
        // Si usamos Ethereal, devuelve la URL de preview en logs
        try {
            // nodemailer.getTestMessageUrl funciona con nodemailer import default
            const preview = nodemailer.getTestMessageUrl(info);
            if (preview)
                this.logger.log(`Preview URL: ${preview}`);
        }
        catch (err) {
            this.logger.error("Error getting preview URL:", err);
        }
        return info;
    }
};
MailService = MailService_1 = __decorate([
    Injectable()
], MailService);
export { MailService };
//# sourceMappingURL=mail.service.js.map