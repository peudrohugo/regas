import { Module } from '@nestjs/common';
import { DriverService } from './driver.service';
import { DriverController } from './driver.controller';
import { RefuellingModule } from 'src/refuelling/refuelling.module';

@Module({
  imports: [RefuellingModule],
  providers: [DriverService],
  controllers: [DriverController],
})
export class DriverModule {}
