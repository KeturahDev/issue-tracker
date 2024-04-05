import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOption = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};

export default NextAuth(authOption);
// might need to switch to older documented export:

// export const handler = NextAuth(authOption);
// export default {handler as GET, handler as POST}
