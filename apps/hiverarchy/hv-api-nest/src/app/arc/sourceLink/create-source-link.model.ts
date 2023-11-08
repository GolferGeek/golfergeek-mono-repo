import { Field, InputType } from '@nestjs/graphql';
import { type } from 'os';


@InputType()
export class CreateSourceLinkInput {
  @Field()
  title: string;

  @Field()
  uri: string;

  @Field()
  markdown: string;

  @Field(type => String, { nullable: true })
  owner: { type: string; ref: 'User' };

  @Field()
  tags: [string];

  @Field()
  publishedDate: boolean;

}
