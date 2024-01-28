import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsOptional } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
   
    @IsOptional()
    nome: string;

    @IsOptional()
    descricao: string|null;

    
    @IsOptional()
    file_path: string;

    @IsOptional()
    category_id: number; 

}
