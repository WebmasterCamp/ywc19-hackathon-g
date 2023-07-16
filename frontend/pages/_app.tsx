import MainNav from '@/components/MainNav'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  return (
    <>
      {!['/login', '/register', '/registering', '/'].includes(
        router.pathname,
      ) && <MainNav />}
      <Component {...pageProps} />
    </>
  )
}

export default App
