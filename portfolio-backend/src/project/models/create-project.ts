import { IsString, IsNotEmpty } from 'class-validator';

export class CreateProject {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;
}
