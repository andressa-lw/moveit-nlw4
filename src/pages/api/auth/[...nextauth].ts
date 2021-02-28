import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { NextApiRequest, NextApiResponse } from 'next'

export default (
  req: NextApiRequest, 
  res: NextApiResponse) => 
  NextAuth(req, res, {
    providers: [
      Providers.GitHub({
        clientId: "1ff9c57c3ae59429636e",
        clientSecret: "cb2ee487d31f0053ec823cc1469811a17260daa9",
      }),
    ],
  }
)