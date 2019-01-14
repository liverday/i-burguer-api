import { Controller, Get, Post, Param, HttpCode, Body, Query} from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
    constructor(private service: CategoryService) {

    }

    @Get()
    getBurguers() {
        return this.service.getCategories();
    }

    // @Get(':id')
    // getBurguer(@Param('id') id) {
    //     return this.service.getBurguer(id);
    // }
}