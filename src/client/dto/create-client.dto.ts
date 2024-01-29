import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator"

export class CreateClientDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    nome: string 

    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    telefone: string

    @IsOptional()
    @IsString()
    @MaxLength(20)
    whatsApp: string | null
}
