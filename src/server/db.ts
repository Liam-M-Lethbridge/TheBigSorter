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
export async function createNewTable(tableName: string, attributes: string[]) {
  // ✅ Sanitize table name: allow only letters, numbers, and underscores
  const safeTableName = tableName.replace(/[^a-zA-Z0-9_]/g, "")

  // ✅ Sanitize and build column list
  const safeColumns = attributes
    .map(attr => attr.replace(/[^a-zA-Z0-9_]/g, "")) // prevent injection
    .map(attr => `"${attr}" TEXT`) // wrap in double quotes for case safety
    .join(", ")

  // ✅ Build full query string
  const query = `CREATE TABLE IF NOT EXISTS "${safeTableName}" ("name" TEXT, ${safeColumns});`

  await sql.unsafe(query) // "unsafe" lets you run a raw string
}

export async function deleteTable(tableName: string){
  await sql`DROP TABLE IF EXISTS ${tableName}`
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