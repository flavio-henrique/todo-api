import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    })
    .useMocker((token) => {
      if (token === UsersService) {
        return { 
          create: jest.fn().mockReturnValue({
            id: '1',
            email: 'test'
          }),
          delete: jest.fn().mockResolvedValue(Promise.resolve(1)),
          findOne: jest.fn().mockResolvedValue(Promise.resolve({
            dataValues: {
              id: '1',
              email: 'test'
            }
          }))
        };
      }

      if (token === JwtService) {
        return { 
          sign: jest.fn().mockReturnValue('access_token'),
        };
      }
    })
    
    .compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should login', () => {
    // When
    const result = service.login({
      dataValues: {
        id: '1',
        email: 'test'
      }
    })

    // Then
    expect(result).toEqual({
      access_token: 'access_token'
    })
  });

  it('should register', () => {

    // Given
    const user = {
      email: 'test',
      password: 'password' 
    }

    // When
    const result = service.register(user);

    // Then
    expect(result).toEqual({
      id: '1',
      email: 'test'
    })
  });
});
