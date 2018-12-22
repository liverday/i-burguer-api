import { Module } from '@nestjs/common';
import { BurguersController } from './burguers.controller';
import { BurguersService } from './burguers.service';
import { Burguer } from './models/burger.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Burguer])],
    controllers: [BurguersController],
    providers: [BurguersService]
})
export class BurguersModule { }