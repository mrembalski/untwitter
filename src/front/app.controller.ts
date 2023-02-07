import { Get, Controller, Render, Param } from '@nestjs/common';
import {CommunicationController} from "../communication/communication_controller";

@Controller()
export class AppController extends CommunicationController {
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
        let exists = await this.userExists(username)
        if (exists) {
            let tweetsWithLikes = await this.getTweetsWithLikeCount(username)
            return { mess: 'Welcome to ' + username + ' page!', tweets: tweetsWithLikes };
        } else {
            return { mess: 'User does not exist.' };
        }
    }

    @Get('/homeTimeline/:username')
    @Render('homeTimeline')
    async homeTimeline(@Param('username') username: string) {
        let exists = await this.userExists(username)
        if (exists) {
            let tweetsWithLikes = await this.getTweetsFromFollowedUsers(username)
            return { mess: 'Welcome to ' + username + ' home timeline!', tweets : tweetsWithLikes };
        } else {
            return { mess: 'User does not exist.' };
        }
    }
}
