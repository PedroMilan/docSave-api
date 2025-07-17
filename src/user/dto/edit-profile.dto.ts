// src/user/dto/edit-profile.dto.ts
import { IsOptional, IsString, IsEmail } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class EditProfileDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  fullname?: string;

  @IsOptional()
  @IsEmail()
  @ApiPropertyOptional()
  email?: string;
}
