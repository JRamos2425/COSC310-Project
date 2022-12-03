import express from "express"
import cors from "cors"

import email from "./emailRoutes.js"
import sms from "./smsRoutes.js"

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use('/email', email)
app.use('/sms', sms)

// Starting our Express app
app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})