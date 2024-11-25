import { IsString, IsNotEmpty } from 'class-validator';

export class CreateExperience {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;
}
