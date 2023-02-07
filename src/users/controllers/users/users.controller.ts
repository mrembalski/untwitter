import { HttpService } from '@nestjs/axios';
import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    UseGuards,
    UsePipes,
    ValidationPipe,
    Request,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { CommunicationController } from 'src/communication/communication_controller';
import { AuthService } from 'src/users/auth/auth.service';
import { CreateUserDto } from 'src/users/dtos/create.user.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController extends CommunicationController {
    constructor(
        private readonly userService: UsersService,
        private readonly authService: AuthService,
        configService: ConfigService,
        httpService: HttpService,
    ) {
        super(configService, httpService)
    }


    @Get('username/:username')
    findUsersByUsername(
        @Param('username') username: string
    ) {
        return this.userService.findUserByUsername(username);
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createUsers(
        @Body() createUserDto: CreateUserDto
    ) {
        return this.userService.createUser(createUserDto);
    }

    @Get('doesUserExist/:username')
    doesUserExist(
        @Param('username') username: string
    ) {
        return this.userService.doesUserExist(username);
    }

    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
}