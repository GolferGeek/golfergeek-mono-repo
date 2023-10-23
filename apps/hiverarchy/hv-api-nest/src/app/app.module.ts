import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorizationModule } from '../authorization/authorization.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthorizationModule, ConfigModule.forRoot({isGlobal: true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
