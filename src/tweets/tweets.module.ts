import { Module } from '@nestjs/common';
import { TweetsController} from "./controllers/tweets/tweets.controller";
import { TweetsService } from './services/tweets/tweets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { CommonModule } from 'src/common.module';

@Module({
    imports: [TypeOrmModule.forFeature([User]), CommonModule],
    controllers: [TweetsController],
    providers: [TweetsService]
})
export class TweetsModule { }
