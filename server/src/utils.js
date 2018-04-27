import jwt from 'jsonwebtoken'

export const APP_SECRET = 'DEVELOPMENT_TEST'

export const getUserId = (context) => {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer', '')
    const { userId } = jwt.verify(token, APP_SECRET)
    return userId
  }

  throw new Error('Not authenticated')
}