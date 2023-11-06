import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Arc } from './arc.model';
import { ArcService } from './arc.service';
import { CreateArcInput } from './create-arc.model';

@Resolver(() => Arc)
export class ArcResolver {
  constructor(private readonly arcService: ArcService) {}

  @Query(() => [Arc])
  async arcs(): Promise<Arc[]> {
    return this.arcService.findAll();
  }

  @Query(() => Arc)
  async arc(@Args('id', { type: () => ID }) id: string): Promise<Arc> {
    return this.arcService.findOne(id);
  }

  @Mutation(() => Arc)
  async createArc(@Args('input') input: CreateArcInput): Promise<Arc> {
    return this.arcService.createArc(input);
  }

  @Mutation(() => Arc)
  async updateArc(@Args('id', { type: () => ID }) id: string, @Args('input') input: CreateArcInput): Promise<Arc> {
    return this.arcService.updateArc(id, input);
  }

  @Mutation(() => Arc)
  async deleteArc(@Args('id', { type: () => ID }) id: string): Promise<Arc> {
    return this.arcService.delete(id);
  }

}
