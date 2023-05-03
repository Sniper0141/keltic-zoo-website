import Link from 'next/link';

export default function HeaderComponent(){
    return(
        <header className="bg-white flex">
            <div className="w-1/2">
                <Link href="/" className="flex w-fit ml-10 md:ml-20 ">
                    <img src="./Keltic_Zoo_Logo.svg" alt='keltic zoo logo' className='h-24'></img>
                    <p className="text-3xl px-6 mt-auto mb-auto font-serif">Keltic Zoo</p>
                </Link>
            </div>
            <input type='checkbox' className='md:hidden '></input>
            <div className="w-1/2">
                <nav className="flex flex-col md:flex-row gap-10 mt-8 mr-10">
                    <Link href="/" className="w-fit bg-black border-black rounded-lg border-2  font-bold text-white text-2xl pb-1 px-4 hover:transition-transform duration-500 ease-out md:hover:scale-105">Home</Link>
                    <Link href="/" className="w-fit bg-black border-black rounded-lg border-2  font-bold text-white text-2xl pb-1 px-4 hover:transition-transform duration-500 ease-out md:hover:scale-105">Animals</Link>
                    <Link href="/" className="w-fit border-black rounded-lg border-2 font-bold text-2xl pb-1 px-4 hover:transition-transform duration-500 ease-out md:hover:scale-105">Privacy</Link>
                    <Link href="/" className="w-fit border-black rounded-lg border-2 font-bold text-2xl pb-1 px-4 hover:transition-transform duration-500 ease-out md:hover:scale-105">About</Link>
                </nav>
            </div>
        </header>
    )
}