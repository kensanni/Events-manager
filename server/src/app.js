import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from 'prisma-binding'
import Query from './resolvers/Query'

const resolvers = {
  Query
}

const server = new GraphQLServer({
  typeDefs: './server/src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://eu1.prisma.sh/kensanni-59b7a8/event-manager/dev',
      secret: 'devsecret',
      debug: true,
    })
  })
})

server.start(() => console.log(`server is running on http://localhost:4000`))