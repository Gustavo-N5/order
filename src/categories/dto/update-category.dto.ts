import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { IsOptional, MaxLength, maxLength } from 'class-validator';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {

    @IsOptional()
    @MaxLength(50)
    nome?: string;
}
