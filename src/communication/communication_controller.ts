import { HttpService } from "@nestjs/axios";
import { ConfigService } from "@nestjs/config";
// import { AxiosResponse } from "axios";

/** Remember to import HttpModule */
export class CommunicationController {
    constructor(private readonly configService: ConfigService,
        private readonly httpService: HttpService) { }



    // async userExists(username: string): Promise<AxiosResponse<boolean>> {
    // }
}
