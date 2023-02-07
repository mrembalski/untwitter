import { Module } from '@nestjs/common';
import { FollowsController } from "./controllers/follows/follows.controller";
import { FollowsService } from './services/follows/follows.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Follow } from 'src/entities/follow.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { JwtStrategy } from 'src/users/auth/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        HttpModule,
        TypeOrmModule.forFeature([Follow]),
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
                entities: [Follow],
                synchronize: true,
            }),
            inject: [ConfigService],
        }),
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                /** I know this is just this string. */
                secret: "JWT_SECRET",
                signOptions: { expiresIn: '7d' },
            })
        })
    ],
    controllers: [FollowsController],
    providers: [FollowsService, JwtStrategy]
})
export class FollowsModule { }
