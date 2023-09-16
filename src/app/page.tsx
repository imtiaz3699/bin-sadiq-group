"use client"
import Hero from '@/components/HeroSection/Hero'
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import Footer from '../components/footer/Footer'
import './styles.css';
import './globals.css'
import MyNavbar from '../components/my-navbar/MyNavbar'


export default function Home() {
  return (
    <main className="">
      {/* <Navbar/> */}
      {/* <MyNavbar/> */}
      <Hero/>
      <Footer/>
    </main>
  )
}
