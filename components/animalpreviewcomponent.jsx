import Link from 'next/link'
import monki from '@/public/images/animals/delete_me.jpg'

export default function AnimalPreviewComponent(props){
    return(
        <div className="w-fit mb-20 p-6 flex flex-col rounded-3xl font-serif" style={{backgroundColor: '#4f772d'}}>
            <Link href={"/creatures/" + props.name}>
                <p className='mb-5 text-center text-5xl'>{props.name}</p>
                <img src={props.imgUrl} className='rounded-3xl border-black border-4'/>
            </Link>
        </div>
    )
}