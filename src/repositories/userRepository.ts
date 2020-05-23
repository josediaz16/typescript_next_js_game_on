import { getTypeOrmConn }  from "../../util/createTypeOrmConn";
import { User } from "../entity/User";

const last = async () => {
  const conn = await getTypeOrmConn();

  const lastUser = await conn
    .getRepository(User)
    .createQueryBuilder("user")
    .orderBy("user.id")
    .getOne();

  return lastUser
}

async function save(user: User) {
  const conn = await getTypeOrmConn();

  return await conn
    .getRepository(User)
    .save(user)
}

export {
  last,
  save
}
