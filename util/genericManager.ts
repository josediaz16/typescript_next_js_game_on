import { getManager } from 'typeorm';
import { EntitySchema } from 'typeorm';

export async function last(entity) {
  const manager = await getManager();
  const tableName = entity.name;

  const lastRecord = await manager
    .createQueryBuilder(entity, tableName)
    .orderBy("id")
    .getOne();

  return lastRecord
}
