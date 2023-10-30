import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestAuthorizationModule } from '@golfergeek/nest-authorization';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [NestAuthorizationModule, ConfigModule.forRoot({isGlobal: true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
