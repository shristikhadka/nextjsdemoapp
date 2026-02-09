import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { typeDefs } from '../../graphql/schema'
import { resolvers } from '../../graphql/resolver'
import type { NextApiRequest, NextApiResponse } from 'next'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = startServerAndCreateNextHandler<NextApiRequest>(server, {
  context: async (req) => ({ req }),
})

export default async function graphqlHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  
  return handler(req, res)
}
