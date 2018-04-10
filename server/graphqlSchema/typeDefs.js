const typeDefs = `
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
    role: Role! @default(value: "user")
    createdAt: String
    updatedAt: String
  }
  enum Role {
    superadmin
    admin
    user
  }
`
export default typeDefs
