import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import schema from './graphqlSchema/index'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

dotenv.config()

// Initialize the application with express
const app = express()

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

// The Graphql endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))

app.listen(4000, console.log('Now browse to localhost:4000/'))
