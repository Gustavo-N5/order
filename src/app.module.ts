import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { ClientModule } from './client/client.module';


@Module({
  imports: [CategoriesModule, PrismaModule, ProductModule, ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
