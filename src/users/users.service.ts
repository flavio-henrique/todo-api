import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserDto } from './dto/user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User)
        private user: typeof User
    ) {

    }

    findOne(email: string): Promise<User> {
        return this.user.findOne({
            where: {
                email,
            },
        });
    }

    delete(id: string): Promise<number> {
        return this.user.destroy({
            where: {
                id,
            },
        });
    }

    async create(email: string, password: string): Promise<UserDto> {
        const userDto = await this.user.create({ email, password });
        return new UserDto(userDto.get());
    }

}