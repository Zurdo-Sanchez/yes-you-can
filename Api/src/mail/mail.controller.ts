import { Body, Controller, Post } from "@nestjs/common";
import { MailService } from "./mail.service.js";

@Controller("mail")
export class MailController {
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
    const result = await this.mailService.sendContactEmail(payload);
    return { ok: true, result };
  }
}
