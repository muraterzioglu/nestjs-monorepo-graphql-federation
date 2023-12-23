import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from '@entity/users';
import { CreateUserInput, UpdateUserInput } from '@dto/users';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  createUser(@Args('payload') payload: CreateUserInput) {
    return this.usersService.create(payload);
  }

  @Mutation(() => User)
  updateUser(@Args('payload') payload: UpdateUserInput) {
    return this.usersService.update(payload.id, payload);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}
