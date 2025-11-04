import express from "express"
import  { createNewTable, getTables, insertIntoTable, readTable } from "./db.ts"
import type { tableCreator, tableInserter} from "@/types/reqTypes"
import cors from 'cors'
const app = express()
const port = 9001

app.use(express.json())
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
}))
app.get('/', (req, res) => {
  res.send()
})

app.post('/message', (req, res) => {
  const { message } = req.body
  console.log("Received message:", message)
  res.json({ status: "ok", echo: message })
})

// Get all tables
app.get("/api/tables", async (req, res) => {
  try {
    const rows = await getTables()
    console.log(rows, typeof(rows))
    res.json(rows)
  } catch (err) {
    console.error(err)
    res.status(500).send("Server error")
  }
})

// Example: Get items from a table
app.get("/api/:table", async (req, res) => {
  try {
    const rows = readTable(req.params.table)
    res.json(rows)
  } catch (err) {
    console.error(err)
    res.status(500).send("Error fetching data")
  }
})

// Insert item into table
app.post("/api/item", async (req, res) => {
  try {
    const body = req.body as tableInserter
    await insertIntoTable(body.tableName, body.attributes, body.values)

  } catch (err) {
    console.error(err)
    res.status(500).send("Error inserting data")
  }
})

// Create new table
app.post("/api/table", async (req, res) => {
  const body = req.body as tableCreator
  try{
    await createNewTable(body.tableName, body.attributes)
  } catch (err) {
    console.error(err)
    res.status(500).send("Error inserting data")
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

