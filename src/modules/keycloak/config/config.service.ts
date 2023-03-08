import { Injectable } from '@nestjs/common';
import {
  KeycloakConnectOptions,
  KeycloakConnectOptionsFactory,
} from 'nest-keycloak-connect';
import { ConfigService } from '../../config/config.service';

@Injectable()
export class KeycloakConfigService implements KeycloakConnectOptionsFactory {
  constructor(private readonly config: ConfigService) {}

  createKeycloakConnectOptions(): KeycloakConnectOptions {
    return {
      authServerUrl: this.config.keycloak.url,
      realm: this.config.keycloak.realm,
      clientId: this.config.keycloak.client,
      secret: this.config.keycloak.secret,
    };
  }
}
