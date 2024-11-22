import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateContact {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  message: string;
}
