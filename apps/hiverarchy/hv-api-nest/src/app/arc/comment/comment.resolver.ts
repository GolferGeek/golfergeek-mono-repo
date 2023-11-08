import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Comment } from './comment.model';
import { CommentService } from './comment.service';
import { CreateCommentInput } from './create-comment.model';

@Resolver(() => Comment)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Query(() => [Comment])
  async comments(): Promise<Comment[]> {
    return this.commentService.findAll();
  }

  @Query(() => Comment)
  async comment(@Args('id', { type: () => ID }) id: string): Promise<Comment> {
    return this.commentService.findOne(id);
  }

  @Mutation(() => Comment)
  async createComment(@Args('input') input: CreateCommentInput): Promise<Comment> {
    return this.commentService.createComment(input);
  }

  @Mutation(() => Comment)
  async updateComment(@Args('id', { type: () => ID }) id: string, @Args('input') input: CreateCommentInput): Promise<Comment> {
    return this.commentService.updateComment(id, input);
  }

  @Mutation(() => Comment)
  async deleteComment(@Args('id', { type: () => ID }) id: string): Promise<Comment> {
    return this.commentService.delete(id);
  }

}
