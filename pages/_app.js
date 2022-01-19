import { createTheme, NextUIProvider } from "@nextui-org/react"
import { SessionProvider } from "next-auth/react"
import Copyright from "../components/footer"
import '../styles/globals.css'


export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <Component {...pageProps} />
        <Copyright/>
      </NextUIProvider>
    </SessionProvider>
  )
}