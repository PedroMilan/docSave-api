import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateDocumentDto {
  @ApiProperty({ example: 'RG Frente' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Identidade' })
  @IsString()
  category: string;

  @ApiProperty({ example: 'https://meuarquivo.com/file.pdf' })
  @IsString()
  fileUrl: string;

  @ApiProperty({ example: '2025-12-31T23:59:59.999Z', required: false })
  @IsOptional()
  @IsDateString()
  expiresAt?: string;

  @ApiProperty({ example: false, required: false })
  @IsOptional()
  @IsBoolean()
  isFavorite?: boolean;
}
