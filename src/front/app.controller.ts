import {Get, Controller, Render, Param} from '@nestjs/common';

@Controller()
export class AppController {

    @Get()
    @Render('login')
    tryLogin() {
        return null;
    }

    @Get('/register')
    @Render('register')
    tryRegister() {
        return null;
    }

    @Get('/usersPage/:username')
    @Render('usersPage')
    usersPage(
        @Param('username') username: string,
    ) {
        // check if username exists

        // if not, return message with error

        let mess = 'Welcome to ' + username + '\'s page!';
        let messError = 'User ' + username + ' does not exist!';

        let A = [];


        return {message : mess};
    }

}