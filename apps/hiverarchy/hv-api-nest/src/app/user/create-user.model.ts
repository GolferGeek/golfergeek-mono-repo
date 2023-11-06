import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  auth0Id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  imageUrl: string;

  @Field()
  bio: string;

}
