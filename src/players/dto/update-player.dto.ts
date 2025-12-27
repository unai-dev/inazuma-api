import { IsOptional, IsString } from 'class-validator';

export class UpdatePlayerDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  element?: string;

  @IsString()
  @IsOptional()
  position?: string;
}
