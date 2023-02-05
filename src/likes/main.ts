import { NestFactory } from '@nestjs/core';
import { LikesModule } from './likes.module';

async function bootstrap() {
    const app = await NestFactory.create(LikesModule);
    await app.listen(3000);
}
bootstrap();
