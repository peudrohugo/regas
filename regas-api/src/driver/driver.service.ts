import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PageDto, PageMetaDto, PageOptionsDto } from 'src/page/dto';

@Injectable()
export class DriverService {
  constructor(private prisma: PrismaService) {}

  async listAll(pageOptionsDto: PageOptionsDto) {
    const users = await this.prisma.driver.findMany({
      orderBy: {
        createdAt: pageOptionsDto.order,
      },
      skip: pageOptionsDto.skip,
      take: pageOptionsDto.take,
    });

    const itemCount = users.length;
    const pageMeta = new PageMetaDto({ itemCount, pageOptionsDto });

    return new PageDto(users, pageMeta);
  }

  async getDriverHistory(id: string) {
    const driverHistory = await this.prisma.driver.findUnique({
      where: {
        id: id,
      },
      select: {
        refuellingHistory: true,
      },
    });

    if (!driverHistory) {
      throw new BadRequestException(
        'History not found by driver identification!',
      );
    }

    return driverHistory;
  }
}
