import { Model } from "sequelize-typescript";
export declare class UserModel extends Model {
    id: number;
    email: string;
    password: string;
}
