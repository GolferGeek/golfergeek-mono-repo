import { Module } from '@nestjs/common';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { ArcModule } from './arc/arc.module';
import { UserModule } from './user/user.module';
import { NestAuthorizationModule } from '@golfergeek/nest-authorization';
import { NestMongooseModule } from '@golfergeek/nest-mongoose';
import { SourceLink, SourceLinkSchema } from './arc/sourceLink/source.model';
import { ArcSchema } from './arc/arc.model';
import { UserSchema } from './user/user.model';
import { RefutationSchema } from './arc/refutation/refutation.model';
import { CommentSchema } from './arc/comment/comment.model';

@Module({
  imports: [
    NestAuthorizationModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      installSubscriptionHandlers: true,
      sortSchema: true,
      playground: true,
      driver: ApolloDriver,
    }),
    NestMongooseModule,
    NestMongooseModule.forFeature([
      { name: 'SourceLink', schema: SourceLinkSchema },
      { name: 'Arc', schema: ArcSchema },
      { name: 'User', schema: UserSchema },
      { name: 'Comment', schema: CommentSchema },
      { name: 'Refutation', schema: RefutationSchema}
    ]),
    ArcModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
