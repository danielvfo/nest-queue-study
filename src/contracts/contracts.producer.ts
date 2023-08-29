import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class ContractsProducer {
  constructor(@InjectQueue('contracts') private contractsQueue: Queue) {}

  async addToQueue(data: any): Promise<void> {
    await this.contractsQueue.add('contractJob', data, { attempts: 3 });
  }
}
