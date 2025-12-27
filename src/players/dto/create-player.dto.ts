import { IsString } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  name: string;

  @IsString()
  element: string;

  @IsString()
  position: string;
}
