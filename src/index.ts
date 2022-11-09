import express from 'express'
import mongoose from 'mongoose'
require('dotenv').config()

const username = process.env.username || 'test'
const password = process.env.password || 'test'

// mongoose 연결
mongoose
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.jmhgybo.mongodb.net/?retryWrites=true&w=majority`,
    {
      // useNewUrlPaser: true,
      // useUnifiedTofology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    }
  )
  .then(value => {
    console.log({ value })
    console.log('mongo db connected')
  })
  .catch(err => {
    console.log(err)
  })

const app = express()
const port = 6000

app.use(
  express.urlencoded({
    extended: false,
  })
)
app.use(express.json())

app.get('/', function (req, res) {
  res.send('hello world!!')
})

app.listen(port, () => console.log(`server listening on port: ${port}`))
