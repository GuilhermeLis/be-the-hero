import { Controller, Post, Body, Headers, Get, Delete, Param, Res, Query, Header } from '@nestjs/common';
import { Response } from 'express';

import { BancoConnectionService } from '../../service/banco-conection/banco-connection.service';

@Controller('incidents')
export class IncidentsController {
    constructor(private readonly connection: BancoConnectionService){}

    @Get()
    async findAll(@Query() param, @Res() res: Response){
        const count = await this.connection.countIncidents();
        res.header('X-Total-Count', count)
        const dado = await this.connection.getAllIncidents(param)
        return res.json(dado)
        
    }

    @Post()
    create(@Body() incident: any, @Headers('authorization') header ){
        return this.connection.createIncident(incident,header);
    }

    @Delete(':id')
    async delete(@Param('id') param, @Headers('authorization') header, @Res() res: Response){
        const response = await this.connection.canDelete(param, header)
        if(response){return res.status(401).json({error: 'Operation not permitted'})}
        this.connection.delete(param)
        return res.status(204).send()
    }
}