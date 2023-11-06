import { Module } from '@nestjs/common';

import { NestAuthorizationModule } from '@golfergeek/nest-authorization';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { ArcModule } from './arc/arc.module';
import { UserModule } from './user/user.module';

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
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI'),
      }),
    }),
    ArcModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
