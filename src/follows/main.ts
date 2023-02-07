import { NestFactory } from '@nestjs/core';
import { FollowsModule } from './follows.module';
import {FollowsService} from "./services/follows/follows.service";

async function bootstrap() {
    const app = await NestFactory.create(FollowsModule);

    /** Adding sample follows */
    const followService = app.get(FollowsService);
    const followRepository = followService['followRepository'];

    let exists = await followRepository.findOne({
        where: {
            followeeUsername: 'Michal',
            followerUsername: 'Gabrysia',
        }
    });
    if (exists === null) {
        await followRepository.save({
            followeeUsername: 'Michal',
            followerUsername: 'Gabrysia',
        });
    }

    await app.listen(3000);
}
bootstrap();
