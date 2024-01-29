import { Injectable } from '@nestjs/common';
import { CreateClientDto } from '../dto/create-client.dto';
import { UpdateClientDto } from '../dto/update-client.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class ClientService {

  constructor(private prismaServicie: PrismaService){}

  create(createClientDto: CreateClientDto) {
    return this.prismaServicie.client.create({
      data:{
        nome: createClientDto.nome,
        telefone: createClientDto.telefone,
        whatsApp: createClientDto.whatsApp,
        ativo: true
      }
    });
  }

  findAll() {
    return this.prismaServicie.client.findMany({
      where:{ativo:true}
    });
  }

  findOne(id: number) {
    return this.prismaServicie.client.findUniqueOrThrow({
      where:{
        id
      }
    });
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.prismaServicie.client.update({
      where:{id},
      data:updateClientDto
    });
  }

  remove(id: number) {
    return  this.prismaServicie.client.update({
      where:{id},
      data:{ativo:false}
    });;
  }
}
