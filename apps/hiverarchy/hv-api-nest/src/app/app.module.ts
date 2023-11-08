import { Logger, Module } from '@nestjs/common';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import * as joi from 'joi';
import { join } from 'path';
import { ArcModule } from './arc/arc.module';
import { UserModule } from './user/user.module';
import { NestAuthorizationModule } from '@golfergeek/nest-authorization';
import { NestMongooseModule } from '@golfergeek/nest-mongoose';
import { LoggerModule } from '@golfergeek/nest-logging';
import { SourceLink, SourceLinkSchema } from './arc/sourceLink/sourceLink.model';
import { ArcSchema } from './arc/arc.model';
import { UserSchema } from './user/user.model';
import { RefutationSchema } from './arc/refutation/refutation.model';
import { CommentSchema } from './arc/comment/comment.model';

@Module({
  imports: [
    NestAuthorizationModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: joi.object({
        AUTH0_AUDIENCE: joi.string().required(),
        AUTH0_DOMAIN: joi.string().required(),
        PORT: joi.number().default(3000),
        DEBUG: joi.boolean().default(false),
        MONGODB_URI: joi.string().required(),
      }),
    }),
    LoggerModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'apps/hiverarchy/hv-api-nest/src/schema.gql'),
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
