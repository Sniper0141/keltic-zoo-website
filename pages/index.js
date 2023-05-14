import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Keltic Zoo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <div className='h-40 text-center flex flex-col justify-center' style={{backgroundColor: '#ecf39e'}}>
          <p className='text-5xl'>Welcome to your <strong>DREAM ZOO</strong></p>
        </div>
        <div className='h-screen bg-repeat bg-contain bg-black' style={{backgroundImage: `url("keltic_pattern.svg")`}}>
          
        </div>
      </main>
    </>
  )
}
