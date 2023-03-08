import { Global, Module } from '@nestjs/common';
import { CaptchaModule } from './modules/captcha/captcha.module';
import { ConfigModule } from './modules/config/config.module';
import { KeycloakModule } from './modules/keycloak/keycloak.module';

export const LibraryModuleConfig = {
  imports: [ConfigModule, CaptchaModule, KeycloakModule],
  controllers: [],
  providers: [],
  exports: [ConfigModule, CaptchaModule, KeycloakModule],
};

@Global()
@Module(LibraryModuleConfig)
export class LibraryModule {}
