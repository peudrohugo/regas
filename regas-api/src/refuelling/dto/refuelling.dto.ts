import { IsEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RefuellingDto {
  @IsEmpty()
  fuellingDate: Date;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsString()
  @IsNotEmpty()
  fuelType: string;

  @IsEmpty()
  totalPrice: number;

  @IsNotEmpty()
  @IsString()
  driverId: string;
}
