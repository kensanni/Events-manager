const users = (root, args, context, info) => {
  return context.db.query.users({}, info)
}