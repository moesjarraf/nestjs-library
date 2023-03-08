import { Module } from '@nestjs/common';
import { LoggerModule } from '@moesjarraf/nestjs-common';
import { captchaProviders } from './captcha.providers';
import { CaptchaService } from './captcha.service';
import { ConfigModule } from '../config/config.module';
import { CaptchaGuard } from './captcha.guard';
import { CaptchaMiddleware } from './captcha.middleware';

export const CaptchaModuleConfig = {
  imports: [ConfigModule, LoggerModule],
  controllers: [],
  providers: [
    CaptchaService,
    CaptchaGuard,
    CaptchaMiddleware,
    ...captchaProviders,
  ],
  exports: [
    CaptchaService,
    CaptchaGuard,
    CaptchaMiddleware,
    ...captchaProviders,
  ],
};

@Module(CaptchaModuleConfig)
export class CaptchaModule {}
