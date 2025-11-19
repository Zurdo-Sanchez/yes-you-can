import { Body, Controller, Logger, Post } from "@nestjs/common";
import { MailService } from "./mail.service.js";

@Controller("mail")
export class MailController {
  private readonly logger = new Logger(MailController.name);

  constructor(private readonly mailService: MailService) {}

  @Post("contact")
  async sendContact(
    @Body()
    payload: {
      name: string;
      email: string;
      telefono?: string;
      message: string;
    }
  ) {
    this.logger.log("Recibido POST /mail/contact", payload);
    const result = await this.mailService.sendContactEmail(payload);
    this.logger.log("Correo enviado", { messageId: (result as any)?.messageId });
    return { ok: true, result };
  }
}
