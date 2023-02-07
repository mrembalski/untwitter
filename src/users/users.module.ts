import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { User } from 'src/entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/jwt.strategy';
import { LocalStrategy } from './auth/local.strategy';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([User]),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mongodb',

        host: configService.get("DB_HOST"),
        port: +configService.get<number>("DB_PORT"),
        replicaSet: configService.get("DB_REPLICASET"),

        retryDelay: 10000,
        entities: [User],

        readPreference: "secondaryPreferred"
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
      }),
    }),

  ],
  controllers: [UsersController],
  providers: [UsersService, AuthService, JwtStrategy, LocalStrategy]
})
export class UsersModule { }
