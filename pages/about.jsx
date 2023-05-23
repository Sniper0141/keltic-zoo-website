import Head from 'next/head'

import Icon from '@/public/images/favicon.ico'
import monki from '@/public/images/animals/delete_me.jpg'

export default function About(){
    return(
        <>
            <Head>
                <title>About - Keltic Zoo</title>
                <link rel="icon" href={Icon.src}/>
            </Head>
            <main className='bg-cover bg-black px-60 py-20' style={{backgroundColor: '#4f772d'}}>
                <div className="font-serif">
                    <h1 className="text-5xl text-center">Our History</h1>
                    <br/>
                    <br/>
                    <div className="flex justify-center">
                        <p className='w-1/2'>
                            Lorem ipsum dolor sit amet, 
                            consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor invidunt  
                            ut labore et dolore magna aliquyam erat, 
                            sed diam voluptua. <br/>
                            <br/>
                            At vero eos et accusam et justo duo dolores et ea rebum. 
                            Stet clita kasd gubergren, 
                            no sea takimata sanctus est Lorem ipsum dolor sit amet. <br/>
                            <br/>
                            Lorem ipsum dolor sit amet, 
                            consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor invidunt  
                            ut labore et dolore magna aliquyam erat, 
                            sed diam voluptua. <br/>
                            <br/>
                            At vero eos et accusam et justo duo dolores et ea rebum. 
                            Stet clita kasd gubergren, 
                            no sea takimata sanctus est Lorem ipsum dolor sit amet. <br/>
                        </p>
                        <div className='w-1/2 rounded-2xl overflow-hidden'>
                            <img src={monki.src}/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}