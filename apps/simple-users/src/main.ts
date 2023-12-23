import { NestFactory } from '@nestjs/core';
import { SimpleUsersModule } from './simple-users.module';

async function bootstrap() {
  const app = await NestFactory.create(SimpleUsersModule);
  await app.listen(3001);
}
bootstrap();
