import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class OrderService {

  constructor(private prismaServicie: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    
    return await this.prismaServicie.order.create({
      data:{
        status: createOrderDto.status,
        valor_total: createOrderDto.valor_total,
        client_id: createOrderDto.client_id,
        orderProduct: {
          createMany: {
            data: createOrderDto.orderProduct
          }
        }      
      },
      include: {
        orderProduct: true
      }
    });
  }

  findAll() {
    return this.prismaServicie.order.findMany({include: {orderProduct: {include: {product: true}}, client: true}});
  }

  findOne(id: number) {
    return this.prismaServicie.order.findUniqueOrThrow({where: {id: id}});
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
