import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductsDTO {
  ///
  @IsNotEmpty()
  @IsNumber()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
