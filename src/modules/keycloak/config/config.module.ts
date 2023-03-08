import { Module } from '@nestjs/common';
import { ConfigModule } from '../../config/config.module';
import { KeycloakConfigService } from './config.service';

@Module({
  imports: [ConfigModule],
  providers: [KeycloakConfigService],
  exports: [KeycloakConfigService],
})
export class KeycloakConfigModule {}
