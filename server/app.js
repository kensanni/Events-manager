import express from 'express'
import graphqlHTTP from 'express-graphql'
import dotenv from 'dotenv'
import schema from './graphqlSchema/index'
import root from './rootResolver'

dotenv.config()

const app = express()

app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(4000, console.log('Now browse to localhost:4000/'))
