import Link from 'next/link'

export default function AnimalPreviewComponent(props){

    const displayName = props.name.replace('_', ' ');

    return(
        <Link href={"/creatures/" + props.name} className="w-fit mb-5 sm:mb-20 p-6 border-black border-4 flex items-center flex-col rounded-3xl font-serif" style={{backgroundColor: '#4f772d'}}>
            <p className='w-60 mb-5 text-center text-5xl'>{displayName}</p>
            <div className='overflow-hidden w-fit rounded-3xl border-4' style={{borderColor: '#132a13'}}>
                <img src={props.imgUrl} className='w-60 sm:w-96 transition-transform ease-out duration-700 hover:scale-105'/>
            </div>
        </Link>
    )
}