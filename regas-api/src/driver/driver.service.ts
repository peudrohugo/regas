import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Page, PageMetadata, PaginationOptions } from 'src/page/models';
import { RefuellingDto } from 'src/refuelling/dto';
import { RefuellingService } from 'src/refuelling/refuelling.service';
import { Driver, Refuelling } from '@prisma/client';

@Injectable()
export class DriverService {
  constructor(
    private prisma: PrismaService,
    private refuellingService: RefuellingService,
  ) {}

  async listAll(paginationOptions: PaginationOptions): Promise<Page<Driver>> {
    const drivers = await this.prisma.driver.findMany({
      orderBy: {
        createdAt: paginationOptions.order,
      },
      skip: paginationOptions.skip,
      take: paginationOptions.take,
    });

    const totalItems = await this.prisma.driver.count();

    return new Page(
      drivers,
      new PageMetadata({ totalItems, paginationOptions }),
    );
  }

  async getDriverFuellingHistory(
    id: string,
    paginationOptions: PaginationOptions,
  ): Promise<Page<RefuellingDto>> {
    const driverData = await this.prisma.driver.findFirst({
      select: {
        refuellingHistory: true,
      },
      where: {
        id: id,
      },
      orderBy: {
        createdAt: paginationOptions.order,
      },
      skip: paginationOptions.skip,
      take: paginationOptions.take,
    });

    if (!driverData) {
      throw new BadRequestException(
        'Driver not found by provided identification!',
      );
    }

    const totalItems = driverData.refuellingHistory.length;
    const pageMetadata = new PageMetadata({ totalItems, paginationOptions });

    const driveFuellingHistory = driverData.refuellingHistory.map(
      (fuelling) => {
        return this.refuellingService.convertToDtoObject(fuelling);
      },
    );

    return new Page(driveFuellingHistory, pageMetadata);
  }
}
