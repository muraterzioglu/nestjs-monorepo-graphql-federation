import {
  ImATeapotException,
  NotFoundException,
  Injectable,
} from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: User[] = [];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const requestedUser = this.users.find((user) => user.id === id);

    if (!requestedUser) {
      throw new NotFoundException('Uh, user not found', {
        description: 'User is not found with that Id.',
      });
    }

    return requestedUser;
  }

  update(id: number, payload: UpdateUserInput): User {
    const requestedUserId = this.users.findIndex((user) => user.id === id);

    if (requestedUserId === -1) {
      throw new NotFoundException('Uh, user not found', {
        cause: new Error(),
        description: 'User is not found with that Id.',
      });
    }

    this.users[requestedUserId] = {
      id: this.users[requestedUserId].id,
      username: payload.username,
    };

    return this.users[requestedUserId];
  }

  create(payload: CreateUserInput) {
    this.users.push(payload);
    const createdUser = this.users.find((user) => user.id === payload.id);

    if (!createdUser) {
      throw new ImATeapotException('Uh, user not found', {
        cause: new Error(),
        description: 'User is requested before creation.',
      });
    }

    return createdUser;
  }

  remove(id: number) {
    const requestedUser = this.users.find((user) => user.id === id);

    if (!requestedUser) {
      throw new NotFoundException('Uh, user not found', {
        cause: new Error(),
        description: 'User is not found with that Id.',
      });
    }

    this.users.splice(id, 1);
    return {
      message: 'User Deleted',
      user: requestedUser,
    };
  }
}
