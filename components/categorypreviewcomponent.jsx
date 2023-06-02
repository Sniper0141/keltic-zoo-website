import Link from 'next/link'

export default function   CategoryPreviewComponent(props){

    let displayName = props.categoryName;
    if(props.categoryName == "Friends"){
        displayName = "Friendly Creatures"
    }

    return(
        <Link href={"/categories/" + props.categoryName}>
          <div className='w-fit h-fit p-10 pb-2 rounded-3xl hover:shadow-black/40 shadow-lg '>
            <div className='w-fit h-fit md:h-96 rounded-3xl border-4 overflow-hidden' style={{borderColor: '#132a13'}}>
              <img src={props.imgUrl}/>
            </div>
            <h3 className='m-4 text-4xl text-center'><strong>{displayName}</strong></h3>
          </div>
        </Link>
    )
}