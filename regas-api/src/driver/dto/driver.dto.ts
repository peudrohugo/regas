import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { RefuellingDto } from 'src/refuelling/dto';

export class DriverDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  createdAt: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RefuellingDto)
  refuellingHistory?: RefuellingDto[];
}
