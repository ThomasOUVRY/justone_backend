import { Controller, Post } from '@nestjs/common';
import JoinGameService from './joinGame.service';
import { Player } from '@prisma/client';

@Controller('/join')
export class JoinGameController {
  constructor(private readonly joinGameService: JoinGameService) {}

  @Post()
  async joinGame(): Promise<Player> {
    return this.joinGameService.joinGame();
  }
}
