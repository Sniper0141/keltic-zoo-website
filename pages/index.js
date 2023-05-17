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
        <div className='h-16' style={{backgroundImage: 'linear-gradient(#90a955, #ecf39e)'}}/>
        <div className='h-24 text-center flex flex-col justify-center' style={{backgroundColor: '#ecf39e'}}>
          <p className='text-5xl'>Welcome to your <strong>DREAM ZOO</strong></p>
        </div>
        <div className='min-h-screen p-20 bg-repeat bg-contain bg-black' style={{backgroundImage: `url("keltic_pattern.svg")`}}>
          <div className='h-fit p-10 mb-14 rounded-3xl border-black border-4' style={{backgroundColor: '#4f772d'}}>
            <h2 className='mb-10 text-5xl text-center'><strong>See our animals</strong></h2>
            <div className='flex justify-around'>
              <div className='w-fit h-fit p-10 rounded-3xl hover:shadow-black/40 shadow-lg hover:cursor-pointer'>
                <div className='rounded-3xl w-fit border-4 border-black overflow-hidden'>
                  <Image src={'/animals/delete_me.jpg'} width={'500'} height={'850'}></Image>
                </div>
                <h3 className='text-4xl text-center'>Monsters</h3>
              </div>
              <div className='w-fit h-fit p-10 rounded-3xl hover:shadow-black/40 shadow-lg hover:cursor-pointer'>
                <div className='rounded-3xl w-fit border-4 border-black overflow-hidden'>
                  <Image src={'/animals/delete_me.jpg'} width={'500'} height={'850'}></Image>
                </div>
                <h3 className='text-4xl text-center'>Friendly Creatures</h3>
              </div>
            </div>
          </div>
          <div className='h-fit p-10 rounded-3xl border-black border-4' style={{backgroundColor: '#4f772d'}}>
            <h2 className='mb-10 text-center text-5xl text-black'><strong>Animal of the year</strong></h2>
            <div className='flex'>
              <div className='rounded-3xl w-fit border-4 border-black overflow-hidden'>
                <div className='w-fit transition-transform ease-out duration-700 hover:scale-105 hover:z-10'>
                  <Image src={'/animals/delete_me.jpg'} width={'720'} height={'1082'}></Image>
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
