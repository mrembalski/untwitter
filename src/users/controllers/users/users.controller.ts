import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/create.user.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }


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
}