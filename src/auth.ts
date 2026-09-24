import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

function credentialsMatch(username: unknown, password: unknown) {
  const expectedUser = process.env.AUTH_ADMIN_USER;
  const expectedPassword = process.env.AUTH_ADMIN_PASSWORD;
  if (!expectedUser || !expectedPassword) return false;
  return username === expectedUser && password === expectedPassword;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        username: { label: "Usuário" },
        password: { label: "Senha", type: "password" },
      },
      authorize(credentials) {
        if (!credentialsMatch(credentials?.username, credentials?.password)) {
          return null;
        }
        return {
          id: "admin",
          name: process.env.AUTH_ADMIN_USER,
        };
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
    error: "/admin/login",
  },
});
