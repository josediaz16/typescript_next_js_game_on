import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany
} from "typeorm";

import { User } from './User';

@Entity()
export class Country {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    length: 2
  })
  codeIso: string;

  @Column()
  currency: string;

  @Column()
  countryCode: string;

  @Column()
  name: string;

  @OneToMany(type => User, user => user.country)
  users: User[];
}
