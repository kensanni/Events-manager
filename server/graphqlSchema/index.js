import { buildSchema } from 'graphql'

const schema = buildSchema(`
  type Query {
    eventAPI: String
  }
  type Mutation {
    createUser(id: Int, fullname: String!, email: String!, password: String!, role: String, createdAt: String, updatedAt: String): User
  }
  type User {
    id: Int
    fullname: String!
    email: String!
    password: String!
    role: String
    createdAt: String
    updatedAt: String
  }
`)

export default schema
