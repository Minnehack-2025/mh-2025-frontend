import NextAuth, { NextAuthOptions, User, } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

interface ExtendedToken extends JWT {
  id: string;
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}


const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const formData = new FormData();
          formData.append("email", credentials?.email || "");
          formData.append("password", credentials?.password || "");

          const res = await fetch("https://api.connectionhub.me/users/login", {
            method: "POST",
            body: formData,
          });

          const data = await res.json();

          if (!res.ok || data.error) {
            throw new Error(data.error || "Invalid credentials");
          }

          return { id: data.message } as User; // Ensure user has an ID
        } catch (error) {
          if (error instanceof Error) {
            throw new Error("Invalid credentials: " + error.message);
          } else {
            throw new Error("Invalid credentials");
          }
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const extendedToken = token as unknown as ExtendedToken;
        extendedToken.id = user.id; // Explicitly type token
      }
      return token;
    },
    async session({ session, token }) {
      const extendedToken = token as unknown as ExtendedToken;
      if (session.user) {
        session.user.id = extendedToken.id; // Explicitly cast token
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };