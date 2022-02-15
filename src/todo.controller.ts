import { Body, Controller, Delete, Get, Param, Post, UseGuards, Request, Res, HttpStatus, Put } from '@nestjs/common';
import { TodoDto } from './todo.dto';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { TodoService } from './services/todo.service';

@Controller()
export class TodoController {
  constructor(
    private libraryService: TodoService) {}


  @UseGuards(JwtAuthGuard)
  @Get('todos/:id')
  async getById(@Param() params, @Res() response) {
    const todo = await this.libraryService.findOne(params.id);
    if(!todo) {
      return response.status(HttpStatus.NOT_FOUND).json({
        error: "Not Found"
      })
    }
    return response.status(HttpStatus.OK).json(
      {...todo.get()}
    )
  }

  @UseGuards(JwtAuthGuard)
  @Get('todos')
  async list(@Res() response) {
    const todos = await this.libraryService.findAll()
    return response.status(HttpStatus.OK).json([...todos]);
  }

  @UseGuards(JwtAuthGuard)
  @Post('todos')
  async postTodo(@Body() todoDto: TodoDto, @Res() response) {
    
    const todoModel = await this.libraryService.create(todoDto);
    return response.status(HttpStatus.CREATED).json({
      ...todoModel.get()
    })
  }

  @UseGuards(JwtAuthGuard)
  @Delete('todos/:id')
  async delete(@Param() params, @Res() response) {
    const rowsDeleted = await this.libraryService.delete(params.id);
    return response.status(HttpStatus.OK).json({
      rowsDeleted
    });
  }

  @UseGuards(JwtAuthGuard)
  @Put('todos/:id')
  async put(@Body() todoDto: TodoDto, @Res() response) {
    const todo = await this.libraryService.update(todoDto);
    if(!todo) {
      return response.status(HttpStatus.NOT_FOUND).json({
        error: "Not Found"
      })
    }
    return response.status(HttpStatus.CREATED).json({
      ...todo.get()
    });
  }
}
