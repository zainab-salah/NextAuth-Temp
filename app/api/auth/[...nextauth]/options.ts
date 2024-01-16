import type { NextAuthOptions } from 'next-auth'
 
import CredentialsProvider from 'next-auth/providers/credentials'
 

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials) {
                 
                const user = { id: "42", name: "kainy", password: "qwe123", role: "admin" }

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    callbacks: { 
        async jwt({ token, user }) {
            if (user) token.role = user.role
            return token
        },
 
        async session({ session, token }) {
            if (session?.user) session.user.role = token.role
            return session
        },
    },
    pages: {
        signIn: '/signin',
        // signOut: '/',
        // error: '/login'
      }
}