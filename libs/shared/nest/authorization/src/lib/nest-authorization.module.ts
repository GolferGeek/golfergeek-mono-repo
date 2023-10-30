import { Module } from '@nestjs/common';
import { AuthorizationGuard } from './authorization.guard';

@Module({
  controllers: [],
  providers: [AuthorizationGuard],
  exports: [AuthorizationGuard],
})
export class NestAuthorizationModule {}
