import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  getHealth(): string {
    return 'OK';
  }

  getAbout(): string {
    return 'about';
  }
  
}
