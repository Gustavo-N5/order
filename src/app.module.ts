import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { ClientModule } from './client/client.module';
import { OrderModule } from './order/order.module';


@Module({
  imports: [CategoriesModule, PrismaModule, ProductModule, ClientModule, OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
