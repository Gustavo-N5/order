import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { InvalidRelationsError } from 'src/errors/invalid-relation-errors';

@Injectable()
export class ProductService {

  constructor(private prismaServicie: PrismaService){}

  async create(createProductDto: CreateProductDto) {
    const category = (await this.prismaServicie.category.count({
      where: {
        id: createProductDto.category_id
      }
    })) != 0;

    if (!category) {
      throw new InvalidRelationsError("Categoria não encontrada");
    }

    return this.prismaServicie.product.create({
      data: {
        nome: createProductDto.nome,
        preco: createProductDto.preco,
        descricao: createProductDto.descricao,
        ativo: true,
        category_id: createProductDto.category_id  
      }

    })
  }

  findAll() {
    return this.prismaServicie.product.findMany({
      where:{
        ativo: true
      }
    });
  }

  findOne(id: number) {
    return this.prismaServicie.product.findUniqueOrThrow({
      where:{
        id
      }
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prismaServicie.product.update({
      where:{id},
      data: updateProductDto    
      
    });
  }

  remove(id: number) {
    return this.prismaServicie.product.update({
      where:{
        id
      },
      data: {
        ativo: false
      }
    });
  }
}
