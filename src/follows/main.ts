import { NestFactory } from '@nestjs/core';
import { FollowsModule } from './follows.module';

async function bootstrap() {
    const app = await NestFactory.create(FollowsModule);
    await app.listen(3000);
}
bootstrap();
