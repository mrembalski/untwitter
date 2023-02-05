import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tweet } from 'src/entities/tweet.entity';
import { CreateTweetDto } from 'src/tweets/dtos/create.tweet.dto';
import { Repository } from 'typeorm';

@Injectable()
export class TweetsService {
    constructor(
        @InjectRepository(Tweet) private readonly tweetRepository: Repository<Tweet>,
    ) { }

    createTweet(createTweetDto: CreateTweetDto) {
        const newTweet = this.tweetRepository.create(createTweetDto);
        return this.tweetRepository.save(newTweet);
    }

    findTweetById(id: number) {
        return this.tweetRepository.findOneOrFail({ where: { id } });
    }
}