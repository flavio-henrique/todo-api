import { Body, Controller, Delete, Get, Param, Post, UseGuards, Request, Res, HttpStatus, Put, HttpCode } from '@nestjs/common';
import { TodoDto } from './dto/todo.dto';
import { JwtAuthGuard } from '../users/auth/jwt-auth.guard';
import { TodosService } from './todos.service';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('api')
export class TodosController {
  constructor(
    private todoService: TodosService) {}


  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: TodoDto })
  @Get('todos/:id')
  getById(@Param() params): Promise<TodoDto> {
    return this.todoService.findOne(params.id);
  }

  @Get('todos')
  @ApiOkResponse({ type: [TodoDto]})
  async list(): Promise<Array<TodoDto>> {
    return this.todoService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Post('todos')
  @ApiOkResponse({ type: TodoDto})
  postTodo(@Body() todoDto: TodoDto): Promise<TodoDto> {
    return this.todoService.create(todoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('todos/:id')
  @HttpCode(204)
  async delete(@Param() params): Promise<void>{
    this.todoService.delete(params.id);
    return;
  }

  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: TodoDto})
  @Put('todos/:id')
  async put(@Body() todoDto: TodoDto): Promise<TodoDto> {
    return this.todoService.update(todoDto);
  }
}
