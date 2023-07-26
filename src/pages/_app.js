import { Roboto } from 'next/font/google'
import '@/styles/globals.css'

const roboto = Roboto({
  weight: ['100', '400', '500', '900'],
  subsets: ['latin'],
})
  
export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps}/>
    </main>
  )
}
