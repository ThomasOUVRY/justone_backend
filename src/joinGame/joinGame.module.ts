import { Module } from '@nestjs/common';
import { JoinGameController } from './joinGame.controller';
import JoinGameService from './joinGame.service';
import { PrismaService } from '../database/prisma.service';

@Module({
  imports: [],
  controllers: [JoinGameController],
  providers: [JoinGameService, PrismaService],
})
export class JoinGameModule {}
