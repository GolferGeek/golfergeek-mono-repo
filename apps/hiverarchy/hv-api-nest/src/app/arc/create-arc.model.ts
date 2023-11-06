import { Field, InputType } from '@nestjs/graphql';


@InputType()
export class CreateArcInput {
  @Field()
  title: string;

  @Field()
  elevator: string;

  @Field()
  markdown: string;

  @Field()
  sequence: number;

  // @Field()
  // owner: User;

  // @Field()
  // collaborators: [User];

  // @Field()
  // tags: [string];

  @Field()
  publishedDate: boolean;

  // @Field()
  // parent: {type: ObjectId};
}
