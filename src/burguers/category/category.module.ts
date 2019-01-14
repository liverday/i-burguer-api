import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { BurguerCategory } from './models/burguer-category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([BurguerCategory])],
    controllers: [CategoryController],
    providers: [CategoryService]
})
export class CategoryModule { }