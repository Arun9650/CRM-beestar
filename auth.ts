import { PrismaAdapter } from "@auth/prisma-adapter";
import { authPrisma } from "./lib/prisma";
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { Adapter } from "next-auth/adapters";
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter({authenticator: authPrisma}) as Adapter,
  session: { strategy: "jwt" },
  ...authConfig,
});