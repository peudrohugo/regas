import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { DriverService } from './driver.service';
import { Page, PaginationOptions } from 'src/page/models';
import { Driver } from '@prisma/client';
import { DriverDto } from './dto';

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
  async getDriver(@Param() params: any): Promise<DriverDto> {
    return this.driverService.getDriver(params.id);
  }

  @Get('fuellingHistory/:id')
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

  @Post()
  async signIn(@Body() dto: DriverDto): Promise<DriverDto> {
    return this.driverService.createDriver(dto);
  }
}
