import { Controller, Get, Body, Post, Header } from '@nestjs/common';

import { BancoConnectionService } from '../../service/banco-conection/banco-connection.service';

@Controller('ongs')
export class OngsController {
    constructor(private readonly conection: BancoConnectionService){}
    @Get()
    findAll(){
        return this.conection.getAllOngs()
    }
    @Post()
    @Header('Access-Control-Allow-Origin', '*')
    creatOng(@Body() ong: any) {
        return this.conection.createOng(ong);
    }
}
