import { Criteria } from '../types/reqTypes.ts';
import postgres from 'postgres';
const database =  'TheBigSorter';
const pg_user =  process.env.USER || 'postgres';
const pg_pass =  (pg_user === 'postgres' ? 'postgres' : undefined);
const host = 'localhost';
const port =  5432;

let sql: postgres.Sql;
try {
  sql = postgres({
    host,
    port,
    database,
    username: pg_user,
    password: pg_pass,
  });
} catch (e) {
  // TODO: This error catch doesn't work (asynchronous callback)
  console.error(`Caught error: ${e}`);
  throw new Error(
    `Couldn't connect to postgres database ${database}. You may need to do \`createdb ${database}\` to set it up.`,
  );
}
export default sql;

// had to use sql.unsafe to dynamically do table generation
export async function createNewTable(tableName: string, attributes: Criteria[]) {
  // ✅ Sanitize table name: allow only letters, numbers, and underscores
  const safeTableName = tableName.replace(/[^a-zA-Z0-9_]/g, "")

  // ✅ Sanitize and build column list
  const safeColumns = attributes
    .map(attr => new Criteria(attr.criterion_name.replace(/[^a-zA-Z0-9_]/g, ""), attr.weighting, 0)) // prevent injection
    .map(attr => `"${attr.criterion_name}" TEXT`) // wrap in double quotes for case safety
    .join(", ")

  // ✅ Build full query string
  const query = `CREATE TABLE IF NOT EXISTS "${safeTableName}" ("name" TEXT, ${safeColumns});`

  await sql.unsafe(query) // "unsafe" lets you run a raw string
}

export async function deleteTable(tableName: string) {
  const safeName = tableName.replace(/[^a-zA-Z0-9_]/g, "")
  try{
  await sql.unsafe(`DROP TABLE IF EXISTS "${safeName}"`)
  } catch (err){
    console.log(err)
    console.log("invalid table name")
  }

}

export async function clearDatabase(){
await sql`DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;
COMMENT ON SCHEMA public IS 'standard public schema';
`
}

export async function insertIntoTable(tableName: string, attributes: string, values: string) {
  // need to guarantee that attributes and values are lined up
  console.log(tableName, attributes, values)
  await sql`INSERT INTO ${tableName}(${attributes}) VALUES (${values})`
}

export async function readTable(tableName: string){
  const rows = await sql`SELECT * FROM ${tableName}`
  return rows

}

export async function getTables(){
  return await sql`SELECT table_name FROM information_schema.tables WHERE table_schema='public'`
}