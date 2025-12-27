import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

import { v4 as uuid } from 'uuid';

@Injectable()
export class TeamsService {
  private teams: Team[] = [];

  create(createTeamDto: CreateTeamDto) {
    const { name, totalPlayers } = createTeamDto;

    const newTeam: Team = {
      id: uuid(),
      name: name.toLowerCase(),
      totalPlayers: totalPlayers,
    };

    this.teams.push(newTeam);

    return newTeam;
  }

  findAll() {
    return this.teams;
  }

  findOne(id: string) {
    const team = this.teams.find((team) => team.id === id);
    if (!team) throw new NotFoundException(`Team with id #${id} not found`);

    return team;
  }

  update(id: string, updateTeamDto: UpdateTeamDto) {
    let teamDB = this.findOne(id);

    this.teams = this.teams.map((team) => {
      if (team.id === id) {
        teamDB = {
          ...teamDB,
          ...updateTeamDto,
          id,
        };
        return teamDB;
      }
      return team;
    });

    return teamDB;
  }

  remove(id: string) {
    this.teams = this.teams.filter((team) => team.id !== id);
  }

  fill(teams: Team[]) {
    this.teams = teams;
  }
}
