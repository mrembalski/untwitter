import { NestFactory } from '@nestjs/core';
import { TweetsModule } from './tweets.module';
import { TweetsService } from './services/tweets/tweets.service';

async function bootstrap() {
    const app = await NestFactory.create(TweetsModule);

    /** Adding sample tweets */
    const tweetService = app.get(TweetsService);
    const tweetRepository = tweetService['tweetRepository'];

    let usernames = ['Gabrysia', 'Michal', 'Pawel', 'Adam', 'Natalia'];
    let tweets = ['content1', 'content2', 'content3', 'content4'];
    for (let i = 0; i < usernames.length; i++) {
        for (let j = 0; j < tweets.length; j++) {
            let content = usernames[i] + ' ' + tweets[j];
            let exists = await tweetRepository.findOne({
                where: { username: usernames[i], content: content },
            });
            if (exists === null) {
                await tweetRepository.save({
                    username: usernames[i],
                    content: content,
                });
            }
        }
    }

    await app.listen(3000);
}

bootstrap();
