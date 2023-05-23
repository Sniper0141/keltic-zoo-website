import Link from 'next/link'
import monki from '@/public/images/animals/delete_me.jpg'

export default function AnimalPreviewComponent(props){
    return(
        <div className="w-fit mb-20 p-6 border-black border-4 flex flex-col rounded-3xl font-serif" style={{backgroundColor: '#4f772d'}}>
            <Link href={"/creatures/" + props.name}>
                <p className='mb-5 text-center text-5xl'>{props.name}</p>
                <div className='overflow-hidden rounded-3xl border-4' style={{borderColor: '#132a13'}}>
                    <img src={props.imgUrl} className='transition-transform ease-out duration-700 hover:scale-105'/>
                </div>
            </Link>
        </div>
    )
}