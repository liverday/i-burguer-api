import { Controller, Get, Post, Param, HttpCode, Body, Query} from '@nestjs/common';
import { BurguersService } from './burguers.service';
import { Burguer } from './models/burger.entity';

@Controller('burguers')
export class BurguersController {

    constructor(private service: BurguersService) {

    }

    @Get()
    getBurguers(@Query() query) {
        return this.service.getBurguers(query);
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