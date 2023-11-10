import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Page, PageMetadata, PaginationOptions } from 'src/page/models';
import { RefuellingDto } from 'src/refuelling/dto';
import { RefuellingService } from 'src/refuelling/refuelling.service';
import { Driver } from '@prisma/client';
import { DriverDto } from './dto';

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

  async createDriver(dto: DriverDto): Promise<DriverDto> {
    if (dto.name == '' || dto.name == null || dto.name == undefined) {
      throw new BadRequestException('Driver name cannot be empty!');
    }

    const driver = await this.prisma.driver.create({
      data: {
        name: dto.name,
      },
    });

    return this.convertToDtoObject(driver);
  }

  convertToDtoObject(dbDriver: Driver): DriverDto {
    const driverDto = new DriverDto();
    driverDto.id = dbDriver.id;
    driverDto.createdAt = dbDriver.createdAt;
    driverDto.name = dbDriver.name;

    return driverDto;
  }
}
