import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class KeycloakApiLoginDto {
  @IsString()
  @ApiProperty({
    type: String,
    example: 'admin',
  })
  readonly username: string;

  @IsString()
  @ApiProperty({
    type: String,
    example: 'admin',
  })
  readonly password: string;
}
