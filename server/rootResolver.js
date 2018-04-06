import Users from '../server/graphqlSchema/controller/user'

const root = {
  eventAPI: () => 'welcome to the event manager API',
  createUser: ({ id, fullname, email, password, role }) => {
    return Users.signup({ id, fullname, email, password, role })
  }
}

export default root
