import { ApiProperty } from "@nestjs/swagger";
import { User } from "../entity/user.entity";

export class UserDto {
    
    @ApiProperty()
    id?: number;
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;

    constructor(user: User) {
        this.id = user.id;
        this.email = user.email;
    }
}