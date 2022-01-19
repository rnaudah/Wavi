import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord";

export default NextAuth({
    site : process.env.NEXTAUTH_URL,
    providers: [
        DiscordProvider({
          clientId: process.env.DISCORD_CLIENT_ID,
          clientSecret: process.env.DISCORD_CLIENT_SECRET,
          authorization: { params: { scope: 'identify guilds email connections' } },
        })
    ],
    session: {
      strategy: "jwt",
      maxAge: 30 * 24 * 60 * 60 // 30 days
    },
})
