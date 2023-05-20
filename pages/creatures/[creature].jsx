import { useRouter } from 'next/router'

import monki from '@/public/images/animals/delete_me.jpg'

export default function Creature(){
    
    const router = useRouter()
    const { creature } = router.query

    let description;

    if(creature == 'TestAnimal'){
        description = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    }
    
    return(
        <>
            <main>
                <div className='bg-cover bg-black px-80 py-20' style={{backgroundImage: 'url(../images/celtic_pattern_animal_page.png)'}}>
                    <div className='p-5 rounded-3xl border-black border-4' style={{backgroundColor: '#4f772d'}}>
                        <h1 className='w-fit p-5 mx-auto rounded-2xl border-black border-4 text-center text-6xl font-serif' style={{backgroundColor: '#ecf39e'}}>{creature}</h1>
                    </div>
                    <div className='h-5 w-5'/>
                    <div className='p-8 rounded-3xl border-black border-4' style={{backgroundColor: '#4f772d'}}>
                        <div className='w-full rounded-2xl border-4 overflow-hidden' style={{borderColor: '#132a13'}}>
                            <img className='w-full' src={monki.src}/>
                        </div>
                    </div>
                    <div className='h-5 w-5'/>
                    <div className='p-8 rounded-3xl border-black border-4 text-center' style={{backgroundColor: '#4f772d'}}>
                        <h2 className='text-5xl'>Description</h2>
                        <br/>
                        <p className='text-3xl'>{description}</p>
                    </div>
                </div>
            </main>
        </>
    )
}