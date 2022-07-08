import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('<h1>Hi, Let\'s start building your enterprise app</h1>')
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://127.0.0.1:${port}`)
})
