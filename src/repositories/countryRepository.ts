import { getConnection }  from "typeorm";
import { Country } from "../entity/Country";

const findByCodeIso = async (codeIso: string) => {
  const conn = await getConnection();

  const country = await conn
    .getRepository(Country)
    .findOne({codeIso})

  return country;
}

async function save(country: Country) {
  const conn = await getConnection();

  return await conn
    .getRepository(Country)
    .save(country)
}

export {
  findByCodeIso,
  save
}
