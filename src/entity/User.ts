import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne
} from "typeorm";

import { Country } from './Country';

export enum UserRole {
  ADMIN = "admin",
  PLAYER = "player"
}

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  birthday: Date;

  @Column()
  email: string;

  @Column()
  encryptedPassword: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phoneNumber: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.PLAYER
  })
  role: UserRole;

  @Column({nullable: false})
  countryId: number;

  @ManyToOne(type => Country, country => country.users, {nullable: false})
  country: Country;
}
