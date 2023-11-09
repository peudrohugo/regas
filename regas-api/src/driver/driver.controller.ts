import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { DriverService } from './driver.service';
import { Page, PaginationOptions } from 'src/page/models';
import { Driver } from '@prisma/client';

@Controller('driver')
export class DriverController {
  constructor(private driverService: DriverService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async listAll(
    @Query() paginationOptions: PaginationOptions,
  ): Promise<Page<Driver>> {
    return this.driverService.listAll(paginationOptions);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getDriverHistory(
    @Param() params: any,
    @Query() paginationOptions: PaginationOptions,
  ) {
    return this.driverService.getDriverFuellingHistory(
      params.id,
      paginationOptions,
    );
  }
}
