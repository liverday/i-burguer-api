import { Injectable } from '@nestjs/common';
import { Burguer } from './models/burger.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
@Injectable()
export class BurguersService {
    constructor(
        @InjectRepository(Burguer)
        private readonly burguerRepo: Repository<Burguer>
    ) { }

    getBurguers = async (query?: any): Promise<Burguer[]> => {
        const { name, category, page, direction, orderBy, pageSize } = query;
        let addAnd = false
        const queryRepo = this.burguerRepo
            .createQueryBuilder('tb_burguer')
            .select([
                'tb_burguer',
                'tb_burguer_category.id_category',
                'tb_burguer_category.ds_category',
                'tb_burguer_category.color',
                'tb_burguer_category.font_color'
            ])
            .innerJoin('tb_burguer.category', 'tb_burguer_category');

        if (name) {
            const filter = `%${name.toLowerCase()}%`;
            queryRepo
                .where("LOWER(name) LIKE :name", { name: filter })
            addAnd = true;
        }
        
        if (category) {
            const arr = category.split(",")
            if (addAnd) 
                queryRepo.andWhere('tb_burguer.id_category IN (:...category)', { category: arr });
            else 
                queryRepo.where('tb_burguer.id_category IN (:...category)', { category: arr });
        }

        if (orderBy && direction) {
            queryRepo
                .orderBy(`tb_burguer.${orderBy}`, direction.toUpperCase());
        } else {
            queryRepo
                .orderBy('tb_burguer.price', 'DESC');
        }

        return queryRepo
            .take(pageSize || 5)
            .skip((page || 0) * (pageSize || 5))
            .getMany();
    }

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