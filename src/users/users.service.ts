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

    async findAll(): Promise<User[]> {
        return this.user.findAll();
    }

    findOne(email: string): Promise<User> {
        return this.user.findOne({
            where: {
                email,
            },
        });
    }

    delete(id: string) {
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

    async update(email: string, password: string): Promise<User> {
        const userModel = await this.findOne(email);
        if (!userModel) return userModel;

        userModel.set({
            id: userModel.id,
            email: email,
            password: password
        });
        userModel.save();
        return userModel;
    }
}