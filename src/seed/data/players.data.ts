import { Player } from 'src/players/entities/player.entity';
import { v4 as uuid } from 'uuid';

export const PLAYERS_DATA: Player[] = [
  {
    id: uuid(),
    name: 'Mark Evans',
    element: 'Viento',
    postition: 'Portero',
  },
  {
    id: uuid(),
    name: 'Axel Blaze',
    element: 'Fuego',
    postition: 'Delantero',
  },
  {
    id: uuid(),
    name: 'Jude Sharp',
    element: 'Tierra',
    postition: 'Centrocampista',
  },
  {
    id: uuid(),
    name: 'Nathan Swift',
    element: 'Viento',
    postition: 'Defensa',
  },
  {
    id: uuid(),
    name: 'Jack Wallside',
    element: 'Montaña',
    postition: 'Defensa',
  },
  {
    id: uuid(),
    name: 'Kevin Dragonfly',
    element: 'Bosque',
    postition: 'Delantero',
  },
  {
    id: uuid(),
    name: 'Jim Wraith',
    element: 'Fuego',
    postition: 'Defensa',
  },
  {
    id: uuid(),
    name: 'Shawn Froste',
    element: 'Hielo',
    postition: 'Delantero',
  },
  {
    id: uuid(),
    name: 'Xavier Foster',
    element: 'Fuego',
    postition: 'Centrocampista',
  },
  {
    id: uuid(),
    name: 'Byron Love',
    element: 'Viento',
    postition: 'Centrocampista',
  },
];
