import NextAuth, { SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: { email: {}, password: {} },
      async authorize(credentials?: { email: string; password: string }) {
        if (!credentials) throw new Error("No credentials provided");
        const { email, password } = credentials;
      
        await connectToDatabase();
        const user = await User.findOne({ email });
        if (!user) throw new Error("User not found");
      
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) throw new Error("Invalid credentials");
      
        return { id: user.id, name: user.name, email: user.email };
      }
    }),
  ],
  session: { strategy: "jwt" as SessionStrategy },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
