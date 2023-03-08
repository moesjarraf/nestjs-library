import qs from 'qs';
import { RequestService } from '@moesjarraf/nestjs-common';
import { Injectable } from '@nestjs/common';
import { KeycloakApiLoginDto } from './api/login.api';
import { ConfigService } from '../config/config.service';
import { KeycloakLoginResponse } from './types/login.type';

@Injectable()
export class KeycloakService {
  constructor(
    private readonly config: ConfigService,
    private readonly request: RequestService,
  ) {}

  async login(data: KeycloakApiLoginDto) {
    const response = await this.request.post(
      `${this.config.keycloak.url}/realms/${this.config.keycloak.realm}/protocol/openid-connect/token`,
      qs.stringify({
        grant_type: 'password',
        scope: 'openid',
        username: data.username,
        password: data.password,
        client_id: this.config.keycloak.client,
        client_secret: this.config.keycloak.secret,
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
    );

    if (response instanceof Error) {
      return undefined;
    }

    return response.data as KeycloakLoginResponse;
  }
}

// all accessible urls on the keycloak server can be found here:
// http://localhost:8080/realms/nestjs/.well-known/openid-configuration
