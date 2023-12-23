import { NestFactory } from '@nestjs/core';
import { SimplePostsModule } from './simple-posts.module';

async function bootstrap() {
  const app = await NestFactory.create(SimplePostsModule);
  await app.listen(3002);
}
bootstrap();
