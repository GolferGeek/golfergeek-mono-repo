// thought.model.ts
import { Field, ObjectType } from '@nestjs/graphql';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RefutationDocument = Refutation & Document;

@ObjectType()
@Schema()
export class Refutation {
  @Field()
  _id: string;

  @Field()
  title: string;

  @Field((type) => String, { nullable: true })
  source: { type: string; ref: 'SourceLink'; default: [null] };

  @Field({ nullable: true })
  elevator: string;

  @Field()
  markdown: string;

  @Field()
  sequence: number;

  @Field((type) => String)
  owner: { type: String; ref: 'User' };

  @Field((type) => [String], { nullable: true })
  collaborators: [{ type: String; ref: 'User' }];

  @Field((type) => [String], { nullable: true })
  viewers: [{ type: String; ref: 'User' }];

  @Field((type) => [String])
  tags: [{ type: string }];

  @Field()
  publishedDate: boolean;

  @Field((type) => [String], { nullable: true })
  comments: [{type: String; ref: 'Comment'}];

  @Field((type) => [String], { nullable: true })
  children: [{ type: String; ref: 'Refutation' }];

  @Field((type) => String, { nullable: true })
  parent: { type: String; ref: 'Refutation' };
}

export const RefutationSchema = SchemaFactory.createForClass(Refutation);
