import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import GameCreationService from './gameCreation/gameCreation.service';
import GameCreationController from './gameCreation/gameCreation.controller';
import { PrismaService } from './database/prisma.service';
import { JoinGameModule } from './joinGame/joinGame.module';

@Module({
  imports: [JoinGameModule],
  controllers: [AppController, GameCreationController],
  providers: [AppService, GameCreationService, PrismaService],
})
export class AppModule {}
