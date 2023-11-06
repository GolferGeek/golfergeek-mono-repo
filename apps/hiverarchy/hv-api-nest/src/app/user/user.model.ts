// user.model.ts
import { Field, ObjectType } from '@nestjs/graphql';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { type } from 'os';

export type UserDocument = User & Document;

@ObjectType()
@Schema()
export class User {
  @Field()
  _id: string;

  @Field()
  auth0Id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field({ nullable: true})
  imageUrl: string;

  @Field({ nullable: true})
  bio: string;

  @Field((type) => [String], { nullable: true })
  arcs: [{ type: String; ref: 'Arc' }];

  @Field()
  isAdmin: boolean;

  @Field(type => [String], { nullable: true })
  favorites: [{ type: String; ref: 'Arc' }];

  @Field(type => [String], { nullable: true })
  recents: [{ type: String; ref: 'Arc' }];

  @Field(type => [String], { nullable: true })
  pinned: [{ type: String; ref: 'Arc' }];

  @Field(type => [String], { nullable: true })
  bookmarks: [{ type: String; ref: 'Arc' }];
}

export const UserSchema = SchemaFactory.createForClass(User);
