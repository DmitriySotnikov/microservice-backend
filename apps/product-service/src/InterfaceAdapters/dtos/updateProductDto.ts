import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateProductDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}
