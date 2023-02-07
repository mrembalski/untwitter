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

  async createTweet(createTweetDto: CreateTweetDto) {
    return this.tweetRepository.save(this.tweetRepository.create(createTweetDto));
  }

  async findTweetsByUsername(username: string) {
    return this.tweetRepository.find({
      where: { username : username },
      order: { creationTime: 'DESC' }
    });
  }

  async findTweetsWithPhrase(phrase: string) {
    return this.tweetRepository.find({
      where: { content: Like("%"+phrase+"%") },
      order: { creationTime: 'DESC' }
    });
  }

  async doesTweetExist(id: number) {
    return (await this.tweetRepository.findOne({where: {id}})) !== null;
  }
}
