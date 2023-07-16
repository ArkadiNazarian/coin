import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { FirebaseAdapter } from "@next-auth/firebase-adapter"
import { db } from "@/Firebase/firebase-config";
import * as firestorefunctions from "firebase/firestore";
import Github from "../../../../lib/github";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        Github({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
            // profile(profile) {
            //     return {
            //         id: profile.id.toString(),
            //         firstName: profile.login,
            //         lastName: profile.lastName,
            //         email: profile.email,
            //         avatar: profile.avatar_url,
            //         accessToken: profile.accessToken,
            //     }
            // }
        })
    ],
    secret: process.env.JWT_SECRET,
    callbacks: {
        // data ro tabdil mikone be jwt ba JWT_SECRET miare bala mesle hash
        async jwt(context) {
            // console.log('jwt context', context);
            
            const { token, user, account, profile } = context;
      
            if (user) {
              // user.account = account;
              token.user = user;
            }
            return token;
          },
          async session(context) {
            // console.log('session context', context);
            const { session, token } = context;
            const user = token.user ;
      
            if (session && user) {
              session.user = user;
            }
            return session;
          },
        
    },
    // adapter: FirebaseAdapter({
    //     db:db,
    //     ...firestorefunctions
    // }),
})


