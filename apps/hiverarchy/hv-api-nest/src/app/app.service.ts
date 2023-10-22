import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello nestjs developer!' };
  }

  getPrivate(): string {
    return 'This is a public resource. Welcome visitor!';
  }

  getPublic(): string {
    return 'This is a protected resource. Welcome member';
  }
}
