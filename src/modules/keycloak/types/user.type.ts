export interface KeycloakUser {
  exp: number;
  iat: number;
  jti: string;
  iss: string;
  aud: string;
  sub: string;
  typ: string;
  azp: string;
  session_state: string;
  acr: string;
  'allowed-origins': string[];
  realm_access: KeycloakRealmAccess;
  resource_access: KeycloakResourceAccess;
  scope: string;
  sid: string;
  email_verified: boolean;
  name: string;
  preferred_username: string;
  given_name: string;
  family_name: string;
  email: string;
}

export interface KeycloakRealmAccess {
  roles: string[];
}

export interface KeycloakResourceAccess {
  [key: string]: KeycloakRealmAccess;
  account: KeycloakRealmAccess;
}
