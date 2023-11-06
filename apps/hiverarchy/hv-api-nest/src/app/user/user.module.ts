import { Module } from '@nestjs/common';
import { User, UserSchema } from './user.model';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  providers: [UserService, UserResolver],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      },
    ]),
  ]
})
export class UserModule {}
