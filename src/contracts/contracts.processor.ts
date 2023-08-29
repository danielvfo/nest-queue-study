import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { ContractsService } from './contracts.service';

@Processor('contracts')
export class ContractsProcessor {
  constructor(private readonly contractsService: ContractsService) {}

  @Process('contractJob')
  async processContract(job: Job<any>) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await this.contractsService.processContract(job.data);
  }
}
