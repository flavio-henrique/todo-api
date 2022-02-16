import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class User extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING
    })
    email: string;

    @Column({
        type: DataType.STRING
    })
    password: string;
}