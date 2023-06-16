import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LogModel {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  description: string;
}
