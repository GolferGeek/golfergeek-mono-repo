
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.model';
import { CreateUserInput } from './create-user.model';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async users() {
    return this.userService.findAll();
  }

  @Query(() => User)
  async user(@Args('id') id: string) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserInput) {
    return this.userService.create(input);
  }

  @Mutation(() => User)
  async updateUser(@Args('id') id: string, @Args('input') input: CreateUserInput) {
    return this.userService.update(id, input);
  }

  @Mutation(() => User)
  async deleteUser(@Args('id') id: string) {
    return this.userService.remove(id);
  }

}
