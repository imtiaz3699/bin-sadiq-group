
import './globals.css'
import type { Metadata } from 'next'
import { Inter,Roboto,Roboto_Condensed,Rubik,Lato } from 'next/font/google'
// import { Roboto,Roboto_Condensed,Rubik,Lato } from 'next/font/google'
import localFont from '@next/font/local'


const coco = localFont({
  src: [
    // {
    //   path: '../../public/fonts/Cocogoose Pro Semilight Italic-trial.ttf',
    //   weight: '400'
    // },
    {
      path: '../../public/fonts/Optima Medium.ttf',
      weight: '400'
    },
  ],
  
  variable: '--font-poppins'

})
const inter = Inter({ subsets: ['latin'] })
export const lato = Lato({
  subsets:['latin'],
  weight:['400','700']
})
const roboto_condensed = Roboto_Condensed ({
  subsets:['latin'],
  weight:['400','700']
})

const roboto = Roboto ({
  subsets:['latin'],
  weight:['400','500','700']

})
const metadata: Metadata = {
  title: 'Bin Sadiq Group',
  description: 'Creating Legacy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${coco.variable} font-sans`}>{children}</body>
    </html>
  )
}
