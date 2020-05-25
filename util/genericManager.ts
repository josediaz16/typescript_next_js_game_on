import { getManager } from 'typeorm';
import { Entity } from 'typeorm';

interface Nameable {
  name: string;
}

export async function last(entity: Nameable) {
  const manager = await getManager();
  const tableName = entity.name;

  const lastRecord = await manager
    .createQueryBuilder(entity, tableName)
    .orderBy("id")
    .getOne();

  return lastRecord
}
