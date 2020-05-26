import {EntityRepository, Repository} from 'typeorm';
import { Country } from "@/entity/Country";

@EntityRepository(Country)
export class CountryRepository extends Repository<Country> {
  findByCodeIso(codeIso: string) {
    return this.findOne({codeIso});
  }
}
