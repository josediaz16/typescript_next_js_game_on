import { getConnection }  from "typeorm";
import { User } from "../entity/User";

async function save(user: User) {
  const conn = await getConnection();

  return await conn
    .getRepository(User)
    .save(user)
}

export {
  last,
  save
}
