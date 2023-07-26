import Header from '@/components/Header'
import About from '@/components/About'
import Experience from '@/components/Experience'
import { Roboto_Mono } from 'next/font/google'

const roboto = Roboto_Mono({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <Header />
      <About/>

      <h2 className={`${roboto.className} title-experience`}>EXPERIENCE</h2>
      <Experience 
        years={'2018 - Present'}
        title={'Zhavia tecnologia'}
        subtitle={'Full stack developer'}
        description={'Varias coisas ae'}
        technologies={['react', 'node']}
      />
    </>
  )
}
