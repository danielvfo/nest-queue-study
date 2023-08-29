import { Injectable } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { ContractsProducer } from './contracts.producer';
import * as crypto from 'crypto';

@Injectable()
export class ContractsService {
  constructor(private readonly contractsProducer: ContractsProducer) {}

  create(createContractDto: CreateContractDto): Promise<any> {
    createContractDto.publicId = crypto
      .randomBytes(Math.ceil(7 / 2))
      .toString('hex')
      .slice(0, 7);
    return this.contractsProducer.addToQueue(createContractDto);
  }

  async processContract(contract: any): Promise<void> {
    console.log('Processing contract job: ', contract);
  }

  findAll() {
    return `This action returns all contracts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contract`;
  }

  update(id: number, updateContractDto: UpdateContractDto) {
    return `This action updates a #${id} to update contract with params: ${updateContractDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} contract`;
  }
}
