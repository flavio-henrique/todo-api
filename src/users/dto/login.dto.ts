import { ApiProperty } from "@nestjs/swagger";
import { User } from "../entity/user.entity";

export class LoginDto {
    
    @ApiProperty()
    access_token: string;

    constructor(accessToken: string) {
        this.access_token = accessToken;
    }
}