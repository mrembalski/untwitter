import { Module } from '@nestjs/common';
import { TweetsController } from "./controllers/tweets/tweets.controller";
import { TweetsService } from './services/tweets/tweets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from 'src/entities/tweet.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [TypeOrmModule.forFeature([Tweet]),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
            type: 'postgres',
            host: configService.get('DB_HOST'),
            port: +configService.get<number>('DB_PORT'),
            username: configService.get('DB_USERNAME'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_NAME'),
            entities: [Tweet],
            synchronize: true,
        }),
        inject: [ConfigService],
    })
    ],
    controllers: [TweetsController],
    providers: [TweetsService]
})
export class TweetsModule { }
