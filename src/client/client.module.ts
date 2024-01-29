import { Module } from '@nestjs/common';
import { ClientService } from './servicie/client.service';
import { ClientController } from './client.controller';

@Module({
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
