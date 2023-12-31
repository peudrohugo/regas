import { Module } from '@nestjs/common';
import { RefuellingService } from './refuelling.service';
import { RefuellingController } from './refuelling.controller';

@Module({
  providers: [RefuellingService],
  controllers: [RefuellingController],
  exports: [RefuellingService],
})
export class RefuellingModule {}
