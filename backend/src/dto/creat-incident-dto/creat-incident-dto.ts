import { IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class CreatIncidentDto {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsNumber()
    value: number;
}
