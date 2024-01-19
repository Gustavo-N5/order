import { Module } from '@nestjs/common';
import { CategoriesService } from './servicies/categories.service';
import { CategoriesController } from './categories.controller';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
