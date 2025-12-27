import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { v4 as uuid } from 'uuid';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayersService {
  private players: Player[] = [];

  create(createPlayerDto: CreatePlayerDto) {
    const { element, name, position } = createPlayerDto;

    const newPlayer: Player = {
      id: uuid(),
      name: name.toLowerCase(),
      element: element.toLowerCase(),
      position: position.toLowerCase(),
    };

    this.players.push(newPlayer);

    return newPlayer;
  }

  findAll() {
    return this.players;
  }

  findOne(id: string) {
    const findPlayer = this.players.find((p) => p.id === id);

    if (!findPlayer)
      throw new NotFoundException(`Player with id #${id} not found`);
    return findPlayer;
  }

  update(id: string, updatePlayerDto: UpdatePlayerDto) {
    let playerDB = this.findOne(id);

    this.players = this.players.map((p) => {
      if (p.id === id) {
        playerDB = { ...playerDB, ...updatePlayerDto, id };

        return playerDB;
      }
      return p;
    });

    return playerDB;
  }

  remove(id: string) {
    const findPlayer = this.findOne(id);
    this.players = this.players.filter((p) => p.id !== id);

    return {
      msg: `Player with id ${id} deleted correctly`,
      findPlayer,
    };
  }

  fill(players: Player[]) {
    this.players = players;
  }
}
