import { Controller, Post, Body } from '@nestjs/common';

import { BancoConnectionService } from '../../service/banco-conection/banco-connection.service';

@Controller('session')
export class SessionController {
    constructor(private readonly connection: BancoConnectionService){}

    @Post()
    login (@Body() id: any){
        return this.connection.login(id);
    }
}
