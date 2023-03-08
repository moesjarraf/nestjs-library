import {
  Controller,
  HttpCode,
  Res,
  Get,
  Post,
  Body,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Response } from 'express';
import {
  AuthGuard,
  AuthenticatedUser,
  KEYCLOAK_COOKIE_DEFAULT,
} from 'nest-keycloak-connect';
import { ConfigService } from '../config/config.service';
import { KeycloakApiLoginDto } from './api/login.api';
import { KeycloakService } from './keycloak.service';
import { KeycloakUser } from './types/user.type';

@Controller('api/keycloak')
@ApiTags('keycloak')
export class KeycloakController {
  constructor(
    private readonly keycloak: KeycloakService,
    private readonly config: ConfigService,
  ) {}

  @HttpCode(201)
  @Post('login')
  async login(
    @Res({ passthrough: true }) res: Response,
    @Body() body: KeycloakApiLoginDto,
  ) {
    const result = await this.keycloak.login(body);

    if (!result) {
      throw new BadRequestException('invalid_credentials');
    }

    res.cookie(
      KEYCLOAK_COOKIE_DEFAULT,
      result.access_token,
      this.config.cookie,
    );

    return result;
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('user')
  async user(@AuthenticatedUser() user: KeycloakUser) {
    return user;
  }
}
