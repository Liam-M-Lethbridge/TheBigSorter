import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:9001/api",
})

export async function getTable(tableName: string) {
  const res = await api.get(`/${tableName}`)
  console.log("Rows:", res.data)
  return res.data
}

export async function getAllTables() {
  const res = await api.get("/tables")
  console.log("Tables:", res.data)
  return res.data
}

export async function createTable(tableName: string, attributes: string[]) {
  const res = await api.post("/table", {
    tableName: tableName,
    attributes: attributes,
  })
  console.log("Created table:", res.data)
}

export async function insertRow(tableName: string, attributes: string, values: string) {
  const res = await api.post(`/${tableName}`, {
    tableName,
    attributes: attributes,
    values: values
  })
  console.log("Inserted:", res.data)
}
