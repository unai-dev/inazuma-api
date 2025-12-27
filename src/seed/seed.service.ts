import { Injectable } from '@nestjs/common';
import { TeamsService } from 'src/teams/teams.service';
import { TEAMS_DATA } from './data/teams.data';
import { PlayersService } from 'src/players/players.service';
import { PLAYERS_DATA } from './data/players.data';

@Injectable()
export class SeedService {
  constructor(
    private readonly teamsService: TeamsService,
    private readonly playersService: PlayersService,
  ) {}

  populatedDB() {
    this.teamsService.fill(TEAMS_DATA);
    this.playersService.fill(PLAYERS_DATA);

    return 'Seed executed';
  }
}
