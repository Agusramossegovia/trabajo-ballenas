
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Encabezado from '@/Componentes/header'
import Nav from '@/Componentes/nav'
import Footer from '@/Componentes/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Salvemos a las ballenas',
  description: 'sitio de ballenas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='contenedor'>
        <Nav/>      
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  )
}
