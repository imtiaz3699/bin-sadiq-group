
import './globals.css'
import type { Metadata } from 'next'
// import { Inter,Roboto,Roboto_Condensed,Rubik,Lato } from 'next/font/google'
// import { Roboto,Roboto_Condensed,Rubik,Lato } from 'next/font/google'
import localFont from '@next/font/local'
// import localFont from '@next/font/dist/local'
// import localFont from '@next/font/dist/local'

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


export const lato = localFont({
  src:[
    {
      path: '../../public/fonts/Lato-Regular.ttf',
      weight:'400',      
    },
  ],
  variable:'--font-font'
})


export const marriware = localFont({
  src:[
    {
      path: '../../public/fonts/MarriwaRE/Merriweather-Regular.ttf',
      weight:'400',      
    },
  ],
  variable:'--font-font-marriware'
})
export const sweet = localFont({
  src:[
    {
      path: '../../public/fonts/Sweet/SweetHipster-PzlE.ttf',
      weight:'400',      
    },
  ],
  variable:'--font-font-sweet'
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
