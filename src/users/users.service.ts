import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { use } from 'passport';
import { UserModel } from 'src/users/user.model';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(UserModel)
        private userModel: typeof UserModel
    ) {

    }

    async findAll(): Promise<UserModel[]> {
        return this.userModel.findAll();
    }

    findOne(email: string): Promise<UserModel> {
        return this.userModel.findOne({
            where: {
                email,
            },
        });
    }

    delete(id: string) {
        return this.userModel.destroy({
            where: {
                id,
            },
        });
    }

    async create(email: string, password: string): Promise<UserModel> {
        return this.userModel.create({ email, password });
    }

    async update(email: string, password: string): Promise<UserModel> {
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