import { getModelToken } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { User } from './entity/user.entity';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  const userList = [
    {
      id: 1,
      email: 'test',
    }
  ];

  const created = {
    get: () => ({
      id: 1,
      email: 'test'
    })
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, {
        provide: getModelToken(User),
        useValue: {
          findOne: jest.fn(() => created),
          destroy: jest.fn(() => 1),
          create: jest.fn(() => created)
        }
      }],

    })
      .compile();

    service = module.get<UsersService>(UsersService);
  });


  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should retrieve an user', async () => {
    // When
    const result = await service.findOne('1');

    // Then
    expect(result.get()).toEqual(
      {
        id: 1,
        email: 'test',
      });
  });

  it('should create an user', async () => {
    // When
    const result = await service.create('teste', 'password');

    // Then
    expect(result).toEqual(
      {
        id: 1,
        email: 'test',
      });
  });

  it('should delete an user', async () => {
    // When
    const result = await service.delete('1');

    // Then
    expect(result).toEqual(1);

  });
});
