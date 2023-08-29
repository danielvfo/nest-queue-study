import { Module } from '@nestjs/common';
import { ContractsService } from './contracts.service';
import { ContractsController } from './contracts.controller';
import { ContractsProducer } from './contracts.producer';
import { BullModule } from '@nestjs/bull';
import { ContractsProcessor } from './contracts.processor';

@Module({
  imports: [BullModule.registerQueue({ name: 'contracts' })],
  controllers: [ContractsController],
  providers: [ContractsService, ContractsProducer, ContractsProcessor],
})
export class ContractsModule {}
