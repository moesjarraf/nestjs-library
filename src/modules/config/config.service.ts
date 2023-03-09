import { ConfigService as CommonConfigService } from '@moesjarraf/nestjs-common';
import { Injectable } from '@nestjs/common';
import { boolean } from 'boolean';

@Injectable()
export class ConfigService extends CommonConfigService {
  get captcha() {
    return {
      site_key: this.get<string>('CAPTCHA_SITE_KEY'),
      secret_key: this.get<string>('CAPTCHA_SECRET_KEY'),
      enabled: boolean(this.get<string>('CAPTCHA_ENABLED')),
    };
  }

  get keycloak() {
    return {
      url: this.get<string>('KEYCLOAK_URL') || 'http://127.0.0.1:8080',
      realm: this.get<string>('KEYCLOAK_REALM') || 'nestjs',
      client: this.get<string>('KEYCLOAK_CLIENT') || 'nestjs',
      secret: this.get<string>('KEYCLOAK_SECRET') || 'secret',
    };
  }
}
