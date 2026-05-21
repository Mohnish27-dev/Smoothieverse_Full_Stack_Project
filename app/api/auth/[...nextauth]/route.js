import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";
import mongoose from 'mongoose'
import GoogleProvider from "next-auth/providers/google";
import User from '@/models/User';

const authoptions = NextAuth({

  secret: process.env.NEXTAUTH_SECRET,

  providers: [

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),

    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),

  ],

  callbacks: {

    async signIn({ user, account }) {

      if (
        account.provider === "github" ||
        account.provider === "google" ||
        account.provider === "twitter"
      ) {

        await mongoose.connect(process.env.MONGODB_URI)

        const existingUser = await User.findOne({
          email: user.email
        });

        if (!existingUser) {

          const newUser = await User.create({
            email: user.email,
            username: user.email.split('@')[0]
          });

          user.name = newUser.username
        }

        return true;
      }
    },

    async session({ session }) {

      const dbUser = await User.findOne({
        email: session.user.email
      });

      session.user.name = dbUser.username;

      return session
    }
  }

})

export { authoptions as GET, authoptions as POST }