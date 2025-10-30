import "reflect-metadata";
import "dotenv/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // enable CORS for local development (adjust origins in production)
  app.enableCors();

  const port = Number(process.env.PORT || 7000);
  await app.listen(port, "0.0.0.0");
  console.log("API listening on", port);
}
bootstrap();
