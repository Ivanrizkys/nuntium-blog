import Navbar from '@/components/organism/Navbar'
import Head from 'next/head'
import { ReactNode } from 'react'

interface Layout {
  children: ReactNode
}

const Layout = ({ children }: Layout) => {
  return (
    <>
      <Head>
        <title>Nantium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <Navbar />
        {children}
      </div>
    </>
  )
}

export default Layout
