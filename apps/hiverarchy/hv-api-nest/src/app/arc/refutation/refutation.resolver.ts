import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Refutation } from './refutation.model';
import { RefutationService } from './refutation.service';
import { CreateRefutationInput } from './create-refutation.model';

@Resolver(() => Refutation)
export class RefutationResolver {
  constructor(private readonly refutationService: RefutationService) {}

  @Query(() => [Refutation])
  async refutations(): Promise<Refutation[]> {
    return this.refutationService.findAll();
  }

  @Query(() => Refutation)
  async refutation(@Args('id', { type: () => ID }) id: string): Promise<Refutation> {
    return this.refutationService.findOne(id);
  }

  @Mutation(() => Refutation)
  async createRefutation(@Args('input') input: CreateRefutationInput): Promise<Refutation> {
    return this.refutationService.createRefutation(input);
  }

  @Mutation(() => Refutation)
  async updateRefutation(@Args('id', { type: () => ID }) id: string, @Args('input') input: CreateRefutationInput): Promise<Refutation> {
    return this.refutationService.updateRefutation(id, input);
  }

  @Mutation(() => Refutation)
  async deleteRefutation(@Args('id', { type: () => ID }) id: string): Promise<Refutation> {
    return this.refutationService.delete(id);
  }

}
