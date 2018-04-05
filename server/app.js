import express from 'express'
import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'
import dotenv from 'dotenv'

dotenv.config()

const schema = buildSchema(`
  type Query {
    eventAPI: String
  }
`)

const root = { eventAPI: () => 'welcome to the event manager API' }

const app = express()

app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(4000, console.log('Now browse to localhost:4000/'))
