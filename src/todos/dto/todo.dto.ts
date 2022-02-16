import { ApiProperty } from "@nestjs/swagger";
import { Todo } from "../entity/todo.entity";

export class TodoDto {
    @ApiProperty()
    id?: number;
    @ApiProperty()
    title: string;
    @ApiProperty()
    description?: string;

    constructor(todo: Todo) {
        this.id = todo.id;
        this.title = todo.title;
        this.description = todo.description;
    }
}