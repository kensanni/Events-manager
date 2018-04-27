import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from 'prisma-binding'
// import Query from './resolvers/Query'
import User from './resolvers/User'
import AuthPayLoad from './resolvers/AuthPayload'

const { signup, getUsers, login } = User

const Mutation = {
  signup, login
}

const Query = {
  getUsers
}

const resolvers = {
  Query,
  Mutation,
  AuthPayLoad
}

const server = new GraphQLServer({
  typeDefs: './server/src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'server/src/generated/prisma.graphql',
      endpoint: 'http://localhost:4466/event-manager/dev',
      secret: 'devsecret',
      debug: true,
    })
  })
})

server.start(() => console.log(`server is running on http://localhost:4000`))