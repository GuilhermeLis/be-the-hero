import { Controller, Get, Headers } from '@nestjs/common';

import { BancoConnectionService } from '../../service/banco-conection/banco-connection.service';

@Controller('profile')
export class ProfileController {
    constructor(private readonly connection: BancoConnectionService){}

    @Get()
    incidents(@Headers('authorization') header){
        return this.connection.getAllYouMade(header);
    }
}
