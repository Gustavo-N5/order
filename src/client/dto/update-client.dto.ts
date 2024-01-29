import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import { IsOptional } from 'class-validator';

export class UpdateClientDto extends PartialType(CreateClientDto) {

    @IsOptional() 
    nome: string 


    @IsOptional() 
    telefone: string

    @IsOptional()  
    whatsApp: string
}
