import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class CaptchaGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest() as Request;

    if (typeof (request as any).captchaValid === 'undefined') {
      return true;
    }

    if (!(request as any).captchaValid) {
      throw new BadRequestException('invalid_captcha');
    }

    return true;
  }
}
