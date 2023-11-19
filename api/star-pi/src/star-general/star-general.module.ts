import { Module } from '@nestjs/common';
import { User } from './star-general.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StarGeneralController } from './star-general.controller';
import { StarGeneralService } from './star-general.service';

@Module({
    imports:[TypeOrmModule.forFeature([User])],
    controllers:[StarGeneralController],
    providers:[StarGeneralService]
})
export class StarGeneralModule {}


