// thought.model.ts
import { Field, ObjectType } from '@nestjs/graphql';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Comment } from './comment/comment.model';
import { Refutation } from './refutation/refutation.model';

export type ArcDocument = Arc & Document;

@ObjectType()
@Schema()
export class Arc {
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
  refutations: [{type: String; ref: 'Refutation'}];

  @Field((type) => [String], { nullable: true })
  children: [{ type: String; ref: 'Arc' }];

  @Field((type) => String, { nullable: true })
  parent: { type: String; ref: 'Arc' };
}

export const ArcSchema = SchemaFactory.createForClass(Arc);
