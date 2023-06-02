import { useRouter } from 'next/router'
import AnimalPreviewComponent from '@/components/animalpreviewcomponent'
import Head from 'next/head'

import Icon from '@/public/images/favicon.ico'
import monki from '@/public/images/animals/delete_me.jpg'

import fairy from '@/public/images/animals/friends/fairy.jpg'
import glas_gaibhnenn from '@/public/images/animals/friends/glas_gaibhnenn.png'
import leprechaun from '@/public/images/animals/friends/leprechaun.jpg'
import puca from '@/public/images/animals/friends/puca.png'
import merrow from '@/public/images/animals/friends/merrow.png'

import abhartach from '@/public/images/animals/monsters/abhartach.png'
import donn_cuailnge from '@/public/images/animals/monsters/donn_cuailnge.png'
import oillipheist from '@/public/images/animals/monsters/oillipheist.jpg'

export const getStaticPaths = async () => {
    
    return{
        paths: [
            {
                params: {category: "Monsters"}
            },
            {
                params: {category: "Friends"}
            }
        ],
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const category = context.params.category 
    return{
        props: {
            category
        }
    }
}

export default function Category({category}){

    if(category == "Friends"){
        return (
            <>
                <Head>
                    <title>{category} - Keltic Zoo</title>
                    <link rel="icon" href={Icon.src}/>
                </Head>
                <main className='flex flex-col items-center bg-black bg-contain bg-repeat' style={{backgroundImage: 'url(../images/keltic_pattern.svg)'}}>
                    <div className='select-none text-transparent h-0 w-0'/>
                    <h2 className='w-fit m-20 p-5 border-4 border-black rounded-2xl text-6xl font-serif' style={{backgroundColor: '#ecf39e'}}>Friendly Creatures</h2>
                    <AnimalPreviewComponent name="Fairy" imgUrl={fairy.src}/>
                    <AnimalPreviewComponent name="Glas_Gaibhnenn" imgUrl={glas_gaibhnenn.src}/>
                    <AnimalPreviewComponent name="Leprechaun" imgUrl={leprechaun.src}/>
                    <AnimalPreviewComponent name="Puca" imgUrl={puca.src}/>
                    <AnimalPreviewComponent name="Merrow" imgUrl={merrow.src}/>
                </main>
            </>
        )
    }
    else if(category == "Monsters") {
        return (
            <>
                <Head>
                    <title>{category} - Keltic Zoo</title>
                    <link rel="icon" href={Icon.src}/>
                </Head>
                <main className='flex flex-col items-center bg-black bg-contain bg-repeat' style={{backgroundImage: 'url(../images/keltic_pattern.svg)'}}>
                    <div className='select-none text-transparent h-0 w-0'/>
                    <h2 className='w-fit m-20 p-5 border-4 border-black rounded-2xl text-6xl font-serif' style={{backgroundColor: '#ecf39e'}}>Monsters</h2>
                    <AnimalPreviewComponent name="Abhartach" imgUrl={abhartach.src}/>
                    <AnimalPreviewComponent name="Donn_Cuailnge" imgUrl={donn_cuailnge.src}/>
                    <AnimalPreviewComponent name="Oillipheist" imgUrl={oillipheist.src}/>
                </main>
            </>
        )
    }
}