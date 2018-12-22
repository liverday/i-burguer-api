import { Injectable } from '@nestjs/common';
import { Burguer } from './models/burger.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class BurguersService {
    constructor(
        @InjectRepository(Burguer)
        private readonly burguerRepo: Repository<Burguer>
    ) { }

    getBurguers = async (): Promise<Burguer[]> => await this.burguerRepo.find();

    getBurguer = async (id: number): Promise<Burguer> => await this.burguerRepo.findOne({ id })

    deleteBurguer = async (id: number): Promise<Boolean> => {
        const burguer = await this.burguerRepo.findOne({ id })
        if (burguer) {
            await this.burguerRepo.remove(burguer);
            return true;
        }
        return false;
    }

    addBurguer = async (burguer: Burguer): Promise<Boolean> => {
        const result = await this.burguerRepo.save(burguer)
        if (result)
            return true;
        return false
    }
}