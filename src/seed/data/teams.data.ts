import { Team } from 'src/teams/entities/team.entity';
import { v4 as uuid } from 'uuid';

export const TEAMS_DATA: Team[] = [
  {
    id: uuid(),
    name: 'Raimon',
    totalPlayers: 14,
  },
  {
    id: uuid(),
    name: 'Zeus',
    totalPlayers: 16,
  },
  {
    id: uuid(),
    name: 'Kirkwood',
    totalPlayers: 14,
  },
  {
    id: uuid(),
    name: 'The Genesis',
    totalPlayers: 11,
  },
  {
    id: uuid(),
    name: 'Epsilon',
    totalPlayers: 11,
  },
  {
    id: uuid(),
    name: 'Royal Academy',
    totalPlayers: 16,
  },
  {
    id: uuid(),
    name: 'Barcelona Orb',
    totalPlayers: 16,
  },
  {
    id: uuid(),
    name: 'Knights of Queen',
    totalPlayers: 16,
  },
  {
    id: uuid(),
    name: 'Little Gigant',
    totalPlayers: 16,
  },
  {
    id: uuid(),
    name: 'Orpheus',
    totalPlayers: 16,
  },
];
