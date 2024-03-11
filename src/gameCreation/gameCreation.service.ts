import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Game } from '@prisma/client';

@Injectable()
export default class GameCreationService {
  constructor(private readonly prismaService: PrismaService) {}

  createGame(): Promise<Game> {
    const gameCode = this.generateGameCode();
    return this.prismaService.game.create({
      data: {
        type: 'JUST_ONE',
        code: gameCode,
        status: 'WAITING_FOR_PLAYERS',
      },
    });
  }

  private generateGameCode(): string {
    return Math.random().toString(36).substring(2, 6).toUpperCase();
  }

  async findAllGames(): Promise<Game[]> {
    return this.prismaService.game.findMany();
  }

  async findGameByCode(code: string): Promise<Game> {
    // find the game by its code and players in it
    return this.prismaService.game.findUnique({
      where: {
        code,
      },
      include: {
        players: true,
      },
    });
  }
}
