import { getTypeOrmConn }  from "../../util/createTypeOrmConn";
import { Country } from "../entity/Country";

const findByCodeIso = async (codeIso: string) => {
  const conn = await getTypeOrmConn();

  const country = await conn
    .getRepository(Country)
    .findOne({codeIso})

  return country;
}

async function save(country: Country) {
  const conn = await getTypeOrmConn();

  return await conn
    .getRepository(Country)
    .save(country)
}

export {
  findByCodeIso,
  save
}
