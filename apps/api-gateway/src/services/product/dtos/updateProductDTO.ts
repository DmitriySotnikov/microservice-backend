import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateProductDTO {
  ///
  @IsNotEmpty()
  @IsNumber()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
