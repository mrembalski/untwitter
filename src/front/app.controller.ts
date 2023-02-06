import { Get, Controller, Render, Param } from '@nestjs/common';

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

    @Get('/page/:username')
    @Render('usersPage')
    async usersPage(@Param('username') username: string) {
        const response = await fetch(
            'http://users_web_service:3000/users/doesUserExist/' + username,
        );
        const data = await response.json();
        if (data === true) {
            const response2 = await fetch(
                'http://tweets_web_service:3000/tweets/username/' + username,
            )
            const data2 = await response2.json();
            console.log(data2)
            return { mess: 'Welcome to ' + username + ' page!', tweets: data2 };
        } else {
            return { mess: 'User does not exist.' };
        }
    }

    @Get('/homeTimeline/:username')
    @Render('homeTimeline')
    async homeTimeline(@Param('username') username: string) {
        const response = await fetch(
            'http://users_web_service:3000/users/doesUserExist/' + username,
        );
        const data = await response.json();
        if (data === true) {
            return { mess: 'Welcome to ' + username + ' timeline!' };
        } else {
            return { mess: 'User does not exist.' };
        }
    }
}
