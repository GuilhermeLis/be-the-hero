import { IsNumber, IsNotEmpty } from "class-validator";

export class DeleteIncidentDto {
    
    @IsNotEmpty()
    @IsNumber()
    id: number;
}
