import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RefuellingDto } from './dto';
import { Refuelling } from './interfaces/refuelling';

@Injectable()
export class RefuellingService {
  constructor(private prisma: PrismaService) {}

  async registerFuelling(dto: RefuellingDto): Promise<RefuellingDto> {
    if (dto.quantity == 0) {
      throw new BadRequestException('Fuel quantity cannot be zero');
    }

    let totalPrice = 0;
    switch (dto.fuelType) {
      case 'GASOLINE':
        totalPrice = 5.18 * dto.quantity;
        break;
      case 'ETANOL':
        totalPrice = 2.22 * dto.quantity;
        break;
      case 'DIESEL':
        totalPrice = 6.1 * dto.quantity;
        break;
    }
    dto.totalPrice = totalPrice;

    const refuel = await this.prisma.refuelling.create({
      data: {
        quantity: dto.quantity,
        fuelType: dto.fuelType,
        totalPrice: totalPrice,
        driverId: dto.driverId,
      },
      select: {
        id: false,
        quantity: true,
        createdAt: true,
        fuelType: true,
        totalPrice: true,
        driverId: true,
      },
    });

    return this.convertToDtoObject(refuel);
  }

  convertToDtoObject(dbRefuelling: Refuelling): RefuellingDto {
    const refuelDto = new RefuellingDto();
    refuelDto.quantity = dbRefuelling.quantity;
    refuelDto.fuelType = dbRefuelling.fuelType;
    refuelDto.totalPrice = dbRefuelling.totalPrice;
    refuelDto.fuellingDate = dbRefuelling.createdAt;
    refuelDto.driverId = dbRefuelling.driverId;

    return refuelDto;
  }
}
