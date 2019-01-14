import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { BurguerCategory } from '../category/models/burguer-category.entity';

@Entity({ name: "tb_burguer" })
export class Burguer {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id?: number;

    @Column()
    name: string;

    @Column({ type: 'longtext' })
    img: string;

    @Column()
    description: string;

    @Column({ type: 'numeric' })
    price: number;

    @OneToOne(() => BurguerCategory)
    @JoinColumn({ name: 'id_category' })
    category: BurguerCategory;
}