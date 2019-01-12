import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: "tb_burguer_category" })
export class BurguerCategory {

    @PrimaryColumn()
    id_category: number;

    @Column()
    ds_category: string;

    @Column()
    color: string;

    @Column()
    font_color: string;
}