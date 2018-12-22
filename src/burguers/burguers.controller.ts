import { Controller, Get, Post, Param, HttpCode, Body } from '@nestjs/common';
import { BurguersService } from './burguers.service';
import { Burguer } from './models/burger.entity';

@Controller('burguers')
export class BurguersController {

    constructor(private service: BurguersService) {

    }

    @Get()
    getBurguers() {
        return this.service.getBurguers();
    }

    @Get(':id')
    getBurguer(@Param('id') id) {
        return this.service.getBurguer(id);
    }

    @Post()
    @HttpCode(201)
    addBurguer(@Body() burguer: Burguer) {
        return this.service.addBurguer(burguer)
    }
}