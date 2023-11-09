import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { RefuellingModule } from './refuelling/refuelling.module';
import { PrismaModule } from './prisma/prisma.module';
import { DriverModule } from './driver/driver.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RefuellingModule,
    PrismaModule,
    DriverModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
