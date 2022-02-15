import { UserModel } from 'src/users/user.model';
export declare class UsersService {
    private userModel;
    constructor(userModel: typeof UserModel);
    findAll(): Promise<UserModel[]>;
    findOne(email: string): Promise<UserModel>;
    delete(id: string): Promise<number>;
    create(email: string, password: string): Promise<UserModel>;
    update(email: string, password: string): Promise<UserModel>;
}
