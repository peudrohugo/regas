import { Controller, Get, Param, Query } from '@nestjs/common';
import { DriverService } from './driver.service';
import { PageOptionsDto } from 'src/page/dto';

@Controller('driver')
export class DriverController {
  constructor(private driverService: DriverService) {}

  @Get()
  listAll(@Query() pageOptionsDto: PageOptionsDto) {
    return this.driverService.listAll(pageOptionsDto);
  }

  @Get(':id')
  getDriverHistory(@Param() params: any) {
    return this.driverService.getDriverHistory(params.id);
  }
}
