import { Module } from '@nestjs/common';
import { OrderService } from './servicie/order.service';
import { OrderController } from './order.controller';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
