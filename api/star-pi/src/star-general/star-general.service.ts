import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './star-general.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StarGeneralService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}
    GetUser(): Promise<User[]>{
        return this.userRepository.find()
    }


}
