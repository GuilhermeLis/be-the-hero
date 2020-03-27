import { Module } from '@nestjs/common';
import { BancoConnectionService } from './banco-conection/banco-connection.service';

@Module({
  providers: [BancoConnectionService],
  exports: [BancoConnectionService]
})
export class ServiceModule {}
