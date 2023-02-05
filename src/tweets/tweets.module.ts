import { Module } from '@nestjs/common';
import { TweetsController} from "./controllers/tweets/tweets.controller";
import { TweetsService } from './services/tweets/tweets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from 'src/entities/tweet.entity';
import { CommonModule } from 'src/common.module';

@Module({
    imports: [TypeOrmModule.forFeature([Tweet]), CommonModule],
    controllers: [TweetsController],
    providers: [TweetsService]
})
export class TweetsModule { }
