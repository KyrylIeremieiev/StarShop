import { Controller, Post, Get, Param, Body, Patch, Query } from '@nestjs/common';

@Controller('test')
export class TestController {

    @Get()
    GetAll(@Query('role') role?: 'INTERN' | "ENGENEER" | "ADMIN"): any{
        return [];
    }

    

    //the : indicates that its a var that'll be used. for example test/1 will return 1.
    //If you dont put : there itll not read a number after the comma and will respond to test/id only
    // Do not put any more routes after something uses : of the same method (in this instance its get)
    @Get(':id')
    GetSpecific(@Param('id') id:string): string {
        return id;
    }

    @Post()
    PostTest(@Body() test:{}): any{
        return test;
    }

    //if ... was removed in return it would return {id, "newData":{}}, we want it to return just the values in newData
    @Patch(':id')
    patchData(@Param('id') id:string, @Body() newData:{}){
        return { id, ...newData }
    }
}
