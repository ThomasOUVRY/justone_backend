import { Controller, Get, Param, Post } from '@nestjs/common';
import GameCreationService from './gameCreation.service';
import { Game } from '@prisma/client';

@Controller('/game')
export default class GameCreationController {
  constructor(private readonly gameCreationService: GameCreationService) {}

  @Post()
  async createGame(): Promise<string> {
    const game = await this.gameCreationService.createGame();
    return game.code;
  }

  @Get()
  async findAllGames(): Promise<Game[]> {
    return this.gameCreationService.findAllGames();
  }

  @Get('/:code')
  async findGameByCode(@Param('code') code: string): Promise<Game> {
    return this.gameCreationService.findGameByCode(code);
  }
}
