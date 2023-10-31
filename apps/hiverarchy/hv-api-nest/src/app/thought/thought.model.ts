// thought.model.ts
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ThoughtDocument = Thought & Document;

@ObjectType()
@Schema()
export class Thought {
    @Field()
    title: string;

    @Field()
    elevator: string;

  @Field()
  owner: User;
    @Field()
    publishedDate: boolean;
}

export const BookSchema = SchemaFactory.createForClass(Thought);
