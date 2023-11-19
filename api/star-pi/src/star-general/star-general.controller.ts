import { Controller, Post, Get } from '@nestjs/common';
import { StarGeneralService } from './star-general.service'
@Controller('star-general')
export class StarGeneralController {
    constructor(private readonly starService: StarGeneralService){}
    @Get()
    GetAll(){
        this.starService.GetUser()
    }

}
