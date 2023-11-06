import { Module } from '@nestjs/common';

import { ArcResolver } from './arc.resolver';
import { ArcService } from './arc.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArcSchema } from './arc.model';

@Module({
  providers: [
    ArcService,
    ArcResolver
  ],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Arc',
        schema: ArcSchema,
      },
    ]),
  ]
})
export class ArcModule {}
