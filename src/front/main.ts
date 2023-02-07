import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(
        AppModule,
    );

    app.useStaticAssets(join(__dirname, '..', 'front/public'));
    app.setBaseViewsDir(join(__dirname, '..', 'front/views'));
    app.setViewEngine('hbs');

    await app.listen(3000);
    console.log(`Frontend is running on: ${await app.getUrl()}`);
}
bootstrap();