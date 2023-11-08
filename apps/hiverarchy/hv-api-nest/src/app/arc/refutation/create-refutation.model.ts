import { Field, InputType } from '@nestjs/graphql';
import { type } from 'os';


@InputType()
export class CreateRefutationInput {
  @Field()
  title: string;

  @Field()
  elevator: string;

  @Field()
  markdown: string;

  @Field()
  sequence: number;

  @Field((type) => String, { nullable: true })
  owner: { type: string; ref: 'User' };

  @Field((type) => [String])
  tags: [{ type: string }];

  @Field()
  publishedDate: boolean;
}
