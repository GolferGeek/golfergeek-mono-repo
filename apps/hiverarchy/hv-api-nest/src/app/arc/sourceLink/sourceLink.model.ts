// thought.model.ts
import { Field, ObjectType } from '@nestjs/graphql';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SourceLinkDocument = SourceLink & Document;

@ObjectType()
@Schema()
export class SourceLink {
  @Field()
  _id: string;

  @Field()
  title: string;

  @Field((type) => [String], { nullable: true })
  uri: [{ type: string; ref: 'SourceLink'; default: [null] }];

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
  arcs: [{ type: String; ref: 'Arc' }];

  @Field((type) => [String], { nullable: true })
  refutations: [{ type: String; ref: 'Refutation' }];
}

export const SourceLinkSchema = SchemaFactory.createForClass(SourceLink);
