import {HttpService} from "@nestjs/axios";
import {ConfigService} from "@nestjs/config";

/** Remember to import HttpModule */
export class CommunicationController {
    constructor(private readonly configService: ConfigService,
                private readonly httpService: HttpService) {
    }

    async userExists(username: string): Promise<boolean> {
        const response = await fetch(
            'http://users_web_service:3000/users/doesUserExist/' + username,
        );
        const data = await response.json();
        return data === true;
    }

    async tweetExists(id: number): Promise<boolean> {
        const response = await fetch(
            'http://tweets_web_service:3000/tweets/doesTweetExist/' + id,
        );
        const data = await response.json();
        return data === true;
    }

    async getTweetsByUsername(username: string): Promise<any> {
        const response = await fetch(
            'http://tweets_web_service:3000/tweets/username/' + username,
        );
        return await response.json();
    }

    async getLikeCount(tweetId: number): Promise<any> {
        const response = await fetch(
            'http://likes_web_service:3000/likes/likesCount/' + tweetId,
        );
        return await response.json();
    }

    async getTweetsWithLikeCount(username: string): Promise<any> {
        const userTweets = await this.getTweetsByUsername(username);
        return Promise.all(userTweets.map (async (tweet) => {
            const likesCount = await this.getLikeCount(tweet.id);
            return { ...tweet, likesCount };
        }));
    }

    async getTweetsFromFollowedUsers(username: string): Promise<any> {
        const response = await fetch(
            'http://follows_web_service:3000/follows/allFollowees/' + username,
        );
        let allFollowees = await response.json();
        console.log(allFollowees)

        return Promise.all(allFollowees.map(async (followee) =>
            this.getTweetsWithLikeCount(followee.followeeUsername)
        ));
    }
}
