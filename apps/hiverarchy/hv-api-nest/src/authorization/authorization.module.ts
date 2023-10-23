import { Module } from '@nestjs/common';
import { AuthorizationGuard } from './authorization.guard';

@Module({
  providers: [AuthorizationGuard],
})
export class AuthorizationModule {}
