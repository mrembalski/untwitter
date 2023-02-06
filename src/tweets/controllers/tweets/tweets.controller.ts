import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { CreateTweetDto } from 'src/tweets/dtos/create.tweet.dto';
import { TweetsService } from "../../services/tweets/tweets.service";

@Controller('tweets')
export class TweetsController {
    constructor(private readonly tweetService: TweetsService) { }


    // returns all tweets posted by a given username
    @Get('username/:username')
    findTweetsByUsername(
        @Param('username') username: string
    ) {
        return this.tweetService.findTweetsByUsername(username);
    }

    // returns all tweets containing a given phrase
    @Get('phrase/:phrase')
    findTweetsWithPhrase(
        @Param('phrase') phrase: string
    ) {
        return this.tweetService.findTweetsWithPhrase(phrase);
    }

    // returns true if a tweet with the given id exists
    @Get('doesTweetExist/:id')
    doesTweetExist(
        @Param('id') id: number
    ) {
        return this.tweetService.doesTweetExist(id);
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createTweet(
        @Body() createTweetDto: CreateTweetDto
    ) {
        return this.tweetService.createTweet(createTweetDto);
    }
}