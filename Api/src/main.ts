import "reflect-metadata";
import "dotenv/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
import * as fs from "fs";
import * as path from "path";

async function bootstrap() {
  // Try to load HTTPS certs if provided (env or default deploy/certs)
  const sslKeyPath =
    process.env.SSL_KEY_PATH ||
    path.join(process.cwd(), "deploy", "certs", "privkey.pem");
  const sslCertPath =
    process.env.SSL_CERT_PATH ||
    path.join(process.cwd(), "deploy", "certs", "fullchain.pem");
  let httpsOptions: { key: Buffer; cert: Buffer } | undefined = undefined;
  try {
    if (fs.existsSync(sslKeyPath) && fs.existsSync(sslCertPath)) {
      httpsOptions = {
        key: fs.readFileSync(sslKeyPath),
        cert: fs.readFileSync(sslCertPath),
      };
      console.log("Loaded SSL certs from", sslKeyPath, sslCertPath);
    } else {
      console.log(
        "SSL certs not found at",
        sslKeyPath,
        sslCertPath,
        "- starting without HTTPS"
      );
    }
  } catch (e) {
    console.warn("Error loading SSL certs, continuing without HTTPS:", e);
    httpsOptions = undefined;
  }

  const createOptions = httpsOptions ? { httpsOptions } : undefined;
  const app = await NestFactory.create(AppModule, createOptions);

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
