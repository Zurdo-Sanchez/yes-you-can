import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.PORT || 5000);
  await app.listen(port, '0.0.0.0');
  console.log('API listening on', port);
}
bootstrap();
