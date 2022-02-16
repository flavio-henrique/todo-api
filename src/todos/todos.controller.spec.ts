import { Test } from "@nestjs/testing";
import { TodosController } from "./todos.controller";
import { TodosService } from "./todos.service";



describe('TodosController', () => {
  let controller: TodosController;
  const list = [
    {
      id: 1,
      title: "test",
      description: "description"
    }
  ];

  const created = {
    id: 1,
    title: "test",
    description: "description"
  };

  const updated = {
    id: 1,
    title: "test2",
    description: "description2"
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [TodosController]
    }).useMocker((token) => {
      if (token === TodosService) {
        return { 
          findAll: jest.fn().mockResolvedValue(Promise.resolve(list)),
          create: jest.fn().mockResolvedValue(Promise.resolve(created)),
          update: jest.fn().mockResolvedValue(Promise.resolve(updated)),
          delete: jest.fn().mockResolvedValue(Promise.resolve(1)),
          findOne: jest.fn().mockResolvedValue(Promise.resolve(created))
        };
      }
    }).compile();
    controller = moduleRef.get<TodosController>(TodosController);
  });

  describe('Todos Controller', () => {
    it('should return an array of todos', async () => {
      // When
      const result = await controller.list();

      // Then
      expect(result).toEqual([
        {
          id: 1,
          title: "test",
          description: "description"
        }
      ]);
    });
  });

  it('should create a new Todo', async () => {

    // Given
    const todoDto = {
      title: "teste",
      description: "description"
    }

    // When
    const result = await controller.postTodo(todoDto);

    // Then
    expect(result).toEqual({
      id: 1,
      title: "test",
      description: "description"
    });
  });

  it('should update a exiting Todo', async () => {

    // Given
    const todoDto = {
      title: "teste",
      description: "description"
    }

    // When
    const result = await controller.put(todoDto);

    // Then
    expect(result).toEqual({
      id: 1,
      title: "test2",
      description: "description2"
    });
  });

  it('should delete a exiting Todo', async () => {

    // When
    const result = await controller.delete(1);

    // Then
    expect(result).toBe(undefined);
  });

  it('should find a exiting Todo by id', async () => {

    // When
    const result = await controller.getById(1);

    // Then
    expect(result).toEqual({
      id: 1,
      title: "test",
      description: "description"
    });
  });


});