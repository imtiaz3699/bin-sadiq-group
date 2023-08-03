import Hero from '@/components/HeroSection/Hero'
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import Footer from './footer/page'

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Hero/>
      <Footer/>
    </main>
  )
}
