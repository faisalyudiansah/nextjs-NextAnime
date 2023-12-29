import { Gabarito } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Utilities/Navbar'

const fontFamily = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'Nextanime',
  description: 'Explore the World of Animated Wonders!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontFamily.className} bg-orange-200 text-orange-600`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
