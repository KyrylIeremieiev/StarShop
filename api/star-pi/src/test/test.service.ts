import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Test } from './test.entity'

@Injectable()
export class TestService {
    constructor(
        @InjectRepository(Test)
        private testRepository: Repository<Test>,
      ) {}
    getAll(): Promise<Test[]> {
        return this.testRepository.find();
      }

    findSpecific(id: string){
        return "not available rn"
    }

    async createTest(id:number, firstName:string, lastName:string): Promise<Test>{
        const newTest = this.testRepository.create({
            id,
            firstName,
            lastName
          });

        return await this.testRepository.save(newTest)
    }
}
