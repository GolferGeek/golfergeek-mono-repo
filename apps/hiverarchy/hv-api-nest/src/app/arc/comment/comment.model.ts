// comment.model.ts
import { Field, ObjectType } from '@nestjs/graphql';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentDocument = Comment & Document;

@ObjectType()
@Schema()
export class Comment {
  @Field()
  _id: string;

  @Field((type) => String)
  arc: { type: String; ref: 'Arc' };

  @Field()
  title: string;

  @Field()
  markdown: string;

  @Field((type) => String)
  owner: { type: String; ref: 'User' };

  @Field()
  publishedDate: boolean;

  @Field()
  isRefutation: boolean;

  @Field((type) => [String], { nullable: true })
  children: [{type: String; ref: 'Comment'}];

  @Field((type) => String, { nullable: true })
  parent: {type: String; ref: 'Comment'};
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
