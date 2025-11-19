import "reflect-metadata";
import "dotenv/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // enable CORS for local development (adjust origins in production)
  // You can set CORS_ORIGIN in your .env to a comma-separated list of origins, e.g.
  // CORS_ORIGIN=http://localhost:8080,http://192.168.1.42:8080
  const corsEnv = process.env.CORS_ORIGIN;
  const corsOrigin =
    corsEnv && corsEnv.length > 0
      ? corsEnv.split(",").map((s) => s.trim())
      : true;

  app.enableCors({
    origin: corsOrigin,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    credentials: true,
    allowedHeaders: "Content-Type, Accept, Authorization",
  });

  const port = Number(process.env.PORT || 7000);
  await app.listen(port, "0.0.0.0");
  console.log("API listening on", port);

  console.log("SMTP_HOST=", process.env.SMTP_HOST);
  console.log("SMTP_USER=", process.env.SMTP_USER);
}
bootstrap();
