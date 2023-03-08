import { RequestModule } from '@moesjarraf/nestjs-common';
import { Module } from '@nestjs/common';
import { KeycloakConnectModule } from 'nest-keycloak-connect/keycloak-connect.module';
import { ConfigModule } from '../config/config.module';
import { KeycloakConfigModule } from './config/config.module';
import { KeycloakConfigService } from './config/config.service';
import { KeycloakController } from './keycloak.controller';
import { KeycloakService } from './keycloak.service';

@Module({
  imports: [
    ConfigModule,
    RequestModule,
    KeycloakConnectModule.registerAsync({
      useExisting: KeycloakConfigService,
      imports: [KeycloakConfigModule],
    }),
  ],
  providers: [KeycloakService],
  controllers: [KeycloakController],
  exports: [KeycloakConnectModule],
})
export class KeycloakModule {}
