import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'

import Icon from '@/public/images/favicon.ico'

import leprechaun from '@/public/images/animals/friends/leprechaun.jpg'
import oillipheist from '@/public/images/animals/monsters/oillipheist.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return ( 
    <>
      <Head>
        <title>Home - Keltic Zoo</title>
        <link rel="icon" href={Icon.src}/>
      </Head>
      <main className="min-h-screen">
        <div className='hidden sm:block h-16' style={{backgroundImage: 'linear-gradient(#90a955, #ecf39e)'}}/>
        <div className='h-16 sm:h-20 text-center flex flex-col justify-center' style={{backgroundColor: '#ecf39e'}}>
          <p className='text-2xl sm:text-3xl'>Welcome to your <strong>DREAM ZOO</strong></p>
        </div>
        <div className='min-h-screen p-5 md:p-20 bg-repeat bg-contain bg-black' style={{backgroundImage: `url("images/keltic_pattern.svg")`}}>
          <div className='h-fit p-2 pt-5 md:p-10 mb-14 rounded-3xl border-black border-4' style={{backgroundColor: '#4f772d'}}>
            <h2 className='mb-5 md:mb-10 text-5xl text-center'><strong>See our animals</strong></h2>
            <div className='flex justify-around flex-col md:flex-row'>
              <Link href="/categories/Monsters">
                <div className='w-fit h-fit p-10 rounded-3xl hover:shadow-black/40 shadow-lg'>
                  <div className='rounded-3xl w-fit border-4 overflow-hidden' style={{borderColor: '#132a13'}}>
                    <img src={oillipheist.src}/>
                  </div>
                  <h3 className='m-4 text-4xl text-center'><strong>Monsters</strong></h3>
                </div>
              </Link>
              <div className='w-5 h-5'/>
              <Link href="/categories/Friends">
                <div className='w-fit h-fit p-10 rounded-3xl hover:shadow-black/40 shadow-lg '>
                  <div className='rounded-3xl w-fit border-4 overflow-hidden' style={{borderColor: '#132a13'}}>
                    <img src={leprechaun.src}/>
                  </div>
                  <h3 className='m-4 text-4xl text-center'><strong>Friendly Creatures</strong></h3>
                </div>
              </Link>
            </div>
          </div>
          <div className='h-fit p-10 rounded-3xl border-black border-4' style={{backgroundColor: '#4f772d'}}>
            <h2 className='mb-10 text-center text-5xl text-black'><strong>Animal of the year</strong></h2>
            <div className='flex flex-col gap-8 md:flex-row'>
              <div className='w-fit rounded-3xl border-4 overflow-hidden' style={{borderColor: '#132a13'}}>
                <div className='w-fit h-fit transition-transform ease-out duration-700 hover:scale-105'>
                  <img src={leprechaun.src} width="100%" height={'1082'}/>
                </div>  
              </div>
              <div style={{color: '#132a13'}}>
                <h3 className='text-5xl mb-8'>The Leprechaun</h3>
                <p className='text-xl'>
                  A leprechaun is a small, mischievous man-like creature. 
                  They look like old men wearing green clothing and hats. 
                  Leprechauns are known for their association with rainbows and pots of gold, which they hide and guard. 
                  They are skilled craftsmen and enjoy playing pranks on humans. <br/>
                  <br/>
                  Capturing a leprechaun is believed to bring wealth and good fortune, 
                  as they grant three wishes in exchange for their freedom. 
                  However, leprechauns possess supernatural powers and are elusive beings. <br/>
                  <br/>
                  Leprechauns are deeply rooted in Irish culture and are popular symbols associated with St. Patrick&apos;s Day. 
                  They have become iconic figures in books, movies, and other forms of media, 
                  representing Irish folklore and the enchantment of hidden treasures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
