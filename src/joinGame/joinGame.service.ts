import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Player } from '@prisma/client';

@Injectable()
export default class JoinGameService {
  constructor(private readonly prisma: PrismaService) {}

  async joinGame(): Promise<Player> {
    return this.prisma.player.create({
      data: {
        gameCode: 'X966',
        name: 'Player',
      },
    });
  }
}
