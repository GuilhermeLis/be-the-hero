import { Controller, Get, Body, Post } from '@nestjs/common';

import { BancoConnectionService } from '../../service/banco-conection/banco-connection.service';

@Controller('ongs')
export class OngsController {
    constructor(private readonly conection: BancoConnectionService){}
    @Get()
    findAll(){
        return this.conection.getAllOngs()
    }
    @Post()
    creatOng(@Body() ong: any) {
        return this.conection.createOng(ong);
    }
}
