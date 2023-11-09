import { Body, Controller, Post } from '@nestjs/common';
import { RefuellingDto } from './dto';
import { RefuellingService } from './refuelling.service';

@Controller('refuelling')
export class RefuellingController {
  constructor(private refuellingService: RefuellingService) {}

  @Post()
  async registerFuelling(@Body() dto: RefuellingDto): Promise<RefuellingDto> {
    return this.refuellingService.registerFuelling(dto);
  }
}
