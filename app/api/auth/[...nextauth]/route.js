import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user";
import { connectToDB } from "@utils/database";

const authHandler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },

    async signIn({ profile }) {
      // connecting to the database using try/catch block
      try {
        // checking if db connected
        const dbConnectionStatus = await connectToDB(); // true or false

        // if connection successful
        if (dbConnectionStatus) {
          // check if user already exist
          const isUserExists = await User.findOne({ email: profile.email });

          // if user doesn't exist, create new user
          if (!isUserExists) {
            await User.create({
              email: profile.email,
              username: profile.email.split("@")[0],
              avatar: profile.picture,
              full_name: profile.name,
            });
          }

          return true;
        } else {
          console.log("Something went wrong with the databases.");
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { authHandler as GET, authHandler as POST };
