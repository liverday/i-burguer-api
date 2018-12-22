import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "tb_burguer" })
export class Burguer {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;

    @Column()
    img?: string;

    @Column()
    description?: string;
}