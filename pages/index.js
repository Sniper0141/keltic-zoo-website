import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

import Icon from '@/public/images/favicon.ico'
import monki from '@/public/images/animals/delete_me.jpg'
import BackgroundPattern from '@/public/images/keltic_pattern.svg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return ( 
    <>
      <Head>
        <title>Home - Keltic Zoo</title>
        <link rel="icon" href={Icon.src}/>
      </Head>
      <main className="min-h-screen">
        <div className='h-16' style={{backgroundImage: 'linear-gradient(#90a955, #ecf39e)'}}/>
        <div className='h-20 text-center flex flex-col justify-center' style={{backgroundColor: '#ecf39e'}}>
          <p className='text-3xl'>Welcome to your <strong>DREAM ZOO</strong></p>
        </div>
        <div className='min-h-screen p-20 bg-repeat bg-contain bg-black' style={{backgroundImage: `url("images/keltic_pattern.svg")`}}>
          <div className='h-fit p-10 mb-14 rounded-3xl border-black border-4' style={{backgroundColor: '#4f772d'}}>
            <h2 className='mb-10 text-5xl text-center'><strong>See our animals</strong></h2>
            <div className='flex justify-around'>
              <Link href="/categories/Monsters">
                <div className='w-fit h-fit p-10 rounded-3xl hover:shadow-black/40 shadow-lg'>
                  <div className='rounded-3xl w-fit border-4 overflow-hidden' style={{borderColor: '#132a13'}}>
                    <img src={monki.src}/>
                  </div>
                  <h3 className='m-4 text-4xl text-center'><strong>Monsters</strong></h3>
                </div>
              </Link>
              <div className='w-5 h-5'/>
              <Link href="/categories/Friends">
                <div className='w-fit h-fit p-10 rounded-3xl hover:shadow-black/40 shadow-lg '>
                  <div className='rounded-3xl w-fit border-4 overflow-hidden' style={{borderColor: '#132a13'}}>
                    <img src={monki.src}/>
                  </div>
                  <h3 className='m-4 text-4xl text-center'><strong>Friendly Creatures</strong></h3>
                </div>
              </Link>
            </div>
          </div>
          <div className='h-fit p-10 rounded-3xl border-black border-4' style={{backgroundColor: '#4f772d'}}>
            <h2 className='mb-10 text-center text-5xl text-black'><strong>Animal of the year</strong></h2>
            <div className='flex'>
              <div className='rounded-3xl w-fit border-4 overflow-hidden' style={{borderColor: '#132a13'}}>
                <div className='w-fit transition-transform ease-out duration-700 hover:scale-105'>
                  <img src={monki.src} width={'720'} height={'1082'}/>
                </div>
              </div>
              <div className='ml-8' style={{color: '#132a13'}}>
                <h3 className='text-5xl mb-8'>Lorem ipsum</h3>
                <p className='text-xl'>
                  Lorem ipsum dolor sit amet, <br/>
                  consetetur sadipscing elitr, <br/>
                  sed diam nonumy eirmod tempor invidunt <br/> 
                  ut labore et dolore magna aliquyam erat, <br/>
                  sed diam voluptua. <br/>
                  At vero eos et accusam et justo duo dolores et ea rebum. <br/>
                  Stet clita kasd gubergren, <br/>
                  no sea takimata sanctus est Lorem ipsum dolor sit amet. <br/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
