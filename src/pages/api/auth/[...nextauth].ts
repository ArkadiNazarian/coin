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
    // callbacks: {
    //     async jwt({ token, user, account }) {
    //         return { ...token};
    //     },
    //     async session({ session, token, user }) {
    //         session.user = token as any;

    //         return session;
    //     },
    // },
    // adapter: FirebaseAdapter({
    //     db:db,
    //     ...firestorefunctions
    // }),
})


