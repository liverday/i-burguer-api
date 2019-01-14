import { Injectable } from '@nestjs/common';
import { BurguerCategory } from './models/burguer-category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(BurguerCategory)
        private readonly categoryRepo: Repository<BurguerCategory>
    ) { }

    getCategories = async (): Promise<BurguerCategory[]> => {
        return this.categoryRepo.find({
            order: {
                ds_category: 'ASC'
            }
        });
    }
}