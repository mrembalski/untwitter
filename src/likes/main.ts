import { NestFactory } from '@nestjs/core';
import { LikesModule } from './likes.module';
import {LikesService} from "./services/likes/likes.service";

async function bootstrap() {
    const app = await NestFactory.create(LikesModule);

    /** Adding sample likes */
    const likesService = app.get(LikesService);
    const likesRepository = likesService['likeRepository'];

    // Gabrysia likes tweets 5-8 (which are created by Michal)
    for(let i = 5; i <= 8; i++) {
        let exists = await likesRepository.findOne({
            where: {
                username: 'Gabrysia',
                tweetId: i,
            }
        });
        if (exists === null) {
            await likesRepository.save({
                username: 'Gabrysia',
                tweetId: i,
            });
        }
    }

    await app.listen(3000);
}
bootstrap();
