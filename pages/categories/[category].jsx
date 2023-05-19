import { useRouter } from 'next/router'
import AnimalPreviewComponent from '@/components/animalpreviewcomponent'

import monki from '@/public/images/animals/delete_me.jpg'

export default function Category(){

    const router = useRouter()
    const { category } = router.query

    if(category == "monsters"){
        return (
            <div className='flex flex-col items-center bg-black bg-contain bg-repeat' style={{backgroundImage: 'url(../images/keltic_pattern.svg)'}}>
                <div className='select-none text-transparent h-0 w-0'/>
                <h2 className='w-fit m-20 p-5 rounded-2xl text-6xl font-serif' style={{backgroundColor: '#ecf39e'}}>Monsters</h2>
                <AnimalPreviewComponent name="TestAnimal" imgUrl={monki.src}/>
                <AnimalPreviewComponent name="TestAnimal" imgUrl={monki.src}/>
                <AnimalPreviewComponent name="TestAnimal" imgUrl={monki.src}/>
            </div>
        )
    }
    else if(category == "friends") {
        return (
            <div className='flex flex-col items-center bg-black bg-contain bg-repeat' style={{backgroundImage: 'url(../images/keltic_pattern.svg)'}}>
                <div className='select-none text-transparent h-0 w-0'/>
                <h2 className='w-fit m-20 p-5 rounded-2xl text-6xl font-serif' style={{backgroundColor: '#ecf39e'}}>Friendly Creatures</h2>
                <AnimalPreviewComponent name="TestAnimal" imgUrl={monki.src}/>
                <AnimalPreviewComponent name="TestAnimal" imgUrl={monki.src}/>
                <AnimalPreviewComponent name="TestAnimal" imgUrl={monki.src}/>
            </div>
        )
    }
}