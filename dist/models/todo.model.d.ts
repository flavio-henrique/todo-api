import { Model } from "sequelize-typescript";
export declare class TodoModel extends Model {
    id: number;
    title: string;
    description: string;
}
