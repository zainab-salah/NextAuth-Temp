 
import CredentialsProvider from "next-auth/providers/credentials";
export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email:",
          type: "text",
          placeholder: "your-email",
        },
        password: {
          label: "password:",
          type: "password",
          placeholder: "your-password",
        },
      },
      async authorize(credentials) {
        try {
    
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(credentials),
            }
          );
          const data = await res.json();
          if (res.ok && data.user) {
            return data;
          }
          return null;
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) token = user;
      return token;
    },
    session: async ({ session, token }) => {
      session.user = { ...token };
      return session;
    },
  },
};
