import { IsEmail, IsNotEmpty, Length } from 'class-validator';


export class CreatOngDto {

    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @Length(8,13)
    whatsapp: string;

    @IsNotEmpty()
    city: string;

    @Length(2,2)
    uf: string;
}
