import { Field, InputType } from '@nestjs/graphql';


@InputType()
export class CreateCommentInput {
  @Field()
  title: string;

  @Field()
  markdown: string;

  @Field((type) => [String])
  children: {type: string; ref: 'Comment'};

  @Field(type => String, { nullable: true })
  owner: {type: string; ref: 'User'};

  @Field()
  publishedDate: boolean;

  @Field(type => String, { nullable: true })
  parent: {type: string; ref: 'Comment'};
}
