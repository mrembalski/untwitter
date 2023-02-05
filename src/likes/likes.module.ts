import { Module } from '@nestjs/common';
import { LikesController } from "./controllers/likes/likes.controller";
import { LikesService } from './services/likes/likes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Like } from 'src/entities/like.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [TypeOrmModule.forFeature([Like]),
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
            entities: [Like],
            synchronize: true,
        }),
        inject: [ConfigService],
    })
    ],
    controllers: [LikesController],
    providers: [LikesService]
})
export class LikesModule { }
