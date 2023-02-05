import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tweet } from 'src/entities/tweet.entity';
import { CreateTweetDto } from 'src/tweets/dtos/create.tweet.dto';
import {Like, Repository} from 'typeorm';

@Injectable()
export class TweetsService {
  constructor(
    @InjectRepository(Tweet)
    private readonly tweetRepository: Repository<Tweet>,
  ) {}

  createTweet(createTweetDto: CreateTweetDto) {
    const newTweet = this.tweetRepository.create(createTweetDto);
    return this.tweetRepository.save(newTweet);
  }

  findTweetsByUsername(username: string) {
    return this.tweetRepository.find({
      where: { username : username },
      order: { creationTime: 'DESC' }
    });
  }

  findTweetsWithPhrase(phrase: string) {
    return this.tweetRepository.find({
      where: { content: Like("%"+phrase+"%") },
      order: { creationTime: 'DESC' }
    });
  }
}
