import { IsInt, IsNotEmpty, IsOptional, IsString, Max, MaxLength, } from "class-validator";

export class CreateProductDto {

    
    @IsString()
    @MaxLength(255)
    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    preco: number

    @IsString()
    @IsOptional()
    descricao: string|null;

    @MaxLength(255)
    @IsString()
    @IsOptional()
    file_path:string|null;

    @IsNotEmpty()
    @IsInt()
    @IsNotEmpty()
    category_id: number; 

}
