import { ConfigService } from "@nestjs/config";

export class CommunicationController {
    constructor(private readonly configService: ConfigService) {
    }
}
