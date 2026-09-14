import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

const adminLogin = process.env.AUTH_ADMIN_GITHUB_LOGIN ?? "mauromaiodev";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [GitHub],
  pages: {
    signIn: "/admin/login",
    error: "/admin/login",
  },
  callbacks: {
    async signIn({ profile }) {
      const login = (profile as { login?: string } | undefined)?.login;
      return login === adminLogin;
    },
  },
});
