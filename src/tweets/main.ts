import { NestFactory } from '@nestjs/core';
import { TweetsModule } from './tweets.module';

async function bootstrap() {
    const app = await NestFactory.create(TweetsModule);
    await app.listen(3000);
}
bootstrap();
