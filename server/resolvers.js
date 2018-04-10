import Users from '../server/graphqlSchema/mutation|query/user'

const resolvers = {
  eventAPI: {
    eventAPI: () => 'welcome to the event manager API'
  }
  // createUser: ({ id, fullname, email, password, role }) => {
  //   console.log('@@@@@@@@@@@@@@----------I gat here')
  //   return Users.signup({ id, fullname, email, password, role })
  // }
}

export default resolvers
