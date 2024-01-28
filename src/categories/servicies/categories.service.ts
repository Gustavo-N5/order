import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private repository: PrismaService){

  }
  create(createCategoryDto: CreateCategoryDto) {
    return this.repository.category.create({
      data: {
        nome: createCategoryDto.nome,
        ativo: true
      }
    })
  }

  findAll() {
    return this.repository.category.findMany({
      where:{ativo: true}
    });
  }

  findOne(id: number) {
    return this.repository.category.findUniqueOrThrow(
      {where:{
        id:id,
        }
      }
    );
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.repository.category.update({
      where:{id},
      data:updateCategoryDto
    });
  }

  remove(id: number) {
    return this.repository.category.update({where:{id},data:{ativo:false}});
  }
}
