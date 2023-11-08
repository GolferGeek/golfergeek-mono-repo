import { Module } from '@nestjs/common';

import { ArcResolver } from './arc.resolver';
import { ArcService } from './arc.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArcSchema } from './arc.model';
import { CommentService } from './comment/comment.service';
import { CommentResolver } from './comment/comment.resolver';
import { RefutationService } from './refutation/refutation.service';
import { Refutation } from './refutation/refutation.model';
import { RefutationResolver } from './refutation/refutation.resolver';
import { SourceLinkService } from './sourceLink/sourceLink.service';
import { SourceLinkResolver } from './sourceLink/sourceLink.resolver';

@Module({
  providers: [
    ArcService,
    ArcResolver,
    CommentService,
    CommentResolver,
    RefutationService,
    RefutationResolver,
    SourceLinkService,
    SourceLinkResolver
  ],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Arc',
        schema: ArcSchema,
      },
      {
        name: 'Refutation',
        schema: Refutation,
      },
      {
        name: 'SourceLink',
        schema: Refutation,
      },
      {
        name: 'Comment',
        schema: Refutation,
      }
    ]),
  ]
})
export class ArcModule {}
