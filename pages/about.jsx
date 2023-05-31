import Head from 'next/head'

import Icon from '@/public/images/favicon.ico'
import monki from '@/public/images/animals/delete_me.jpg'

import oillipheist from '@/public/images/animals/monsters/oillipheist.jpg'

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
                            Welcome to the Keltic Zoo, where the mystical creatures of keltic mythology come to life! Immerse yourself in a world of ancient legends, where majestic beings and mythical creatures dwell. Our zoo is a unique haven, carefully designed to preserve and showcase the captivating creatures that have fascinated and inspired people for centuries. <br/>
                            <br/>
                            At the Keltic Zoo, we believe in the power of storytelling and the enchantment it brings. Our mission is to educate, entertain, and create an unforgettable experience for visitors of all ages, as we delve into the rich tapestry of keltic mythology. We strive to promote conservation, appreciation, and understanding of these magical beings, fostering a sense of wonder and respect for the natural world. <br/>
                            <br/>
                            This place is not just a place to observe these extraordinary creatures; it's a sanctuary where they are cared for with the utmost respect and dedication. We prioritize their well-being and ensure they are provided with spacious and natural habitats, allowing them to thrive in an environment that closely resembles their legendary origins. <br/>
                            <br/>
                            Beyond our captivating exhibits, we offer a variety of educational programs, interactive displays, and engaging presentations that delve into the fascinating mythology behind each creature. Our knowledgeable staff is passionate about sharing their expertise and facilitating a deeper understanding of the intricate folklore that surrounds these mythical beings. 
                            Whether you are a mythology enthusiast, a nature lover, or simply seeking a day of enchantment, the Keltic Zoo promises an unforgettable experience. We invite you to embark on a magical journey, exploring the realms of keltic mythology and encountering creatures that have captivated the imaginations of countless generations. 
                            Join us at the Keltic Zoo, and let your spirit soar as you witness the wonders of the keltic world come to life!
                        </p>
                        <div className='w-5 h-5'></div>
                        <div className='w-1/2 h-fit rounded-2xl overflow-hidden'>
                            <img src={oillipheist.src} width="100%"/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}