import { Module } from '@nestjs/common';

import { TeamsModule } from './teams/teams.module';
import { PlayersModule } from './players/players.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [TeamsModule, PlayersModule, SeedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
