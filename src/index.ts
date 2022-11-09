import express from 'express'
import { connect } from 'mongoose'
import { User } from './models/user'
require('dotenv').config()

const username = process.env.username || 'test'
const password = process.env.password || 'test'

// 테스트 데이터 생성
run().catch(err => console.log(err))

async function run() {
  // 4. Connect to MongoDB
  await connect(
    `mongodb+srv://${username}:${password}@cluster0.jmhgybo.mongodb.net/?retryWrites=true&w=majority`
  )

  await User.collection.drop()

  const user = new User({
    name: 'dobot',
    email: 'dobot@test.com',
  })
  await user.save()

  console.log(user)
  // console.log(user.email) // 'dobot@test.com'
}

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
