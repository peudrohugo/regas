import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { RefuellingDto } from 'src/refuelling/dto';

export class DriverDto {
  @IsString()
  @IsOptional()
  id: string;

  @IsOptional()
  createdAt: Date;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RefuellingDto)
  refuellingHistory?: RefuellingDto[];
}
