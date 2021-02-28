import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { NowRequest, NowResponse } from '@vercel/node'

export default (
  req: NowRequest, 
  res: NowResponse) => 
  NextAuth(req, res, {
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      }),
    ],
  }
)