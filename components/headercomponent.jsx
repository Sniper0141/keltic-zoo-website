import Link from 'next/link'
import logo from '@/public/images/Keltic_Zoo_Logo.svg'

export default function HeaderComponent(){
    return(
        <>
            <header>
                <div className="flex fixed w-screen" style={{backgroundColor: '#90a955'}}>
                    <div className="w-1/2">
                        <Link href="/" className="flex w-fit ml-10 md:ml-20 ">
                            <img src={logo.src} alt='keltic zoo logo' className='h-24'></img>
                            <p className="text-3xl px-6 mt-auto mb-auto font-serif">Keltic Zoo</p>
                        </Link>
                    </div>
                    <div className="w-1/2">
                        <nav className="flex flex-col md:flex-row gap-10 mt-8 md:justify-end md:mr-8">
                            <Link href="/" className="w-fit bg-black border-black rounded-lg border-2  font-bold text-white text-2xl pb-1 px-4 hover:transition-transform duration-500 ease-out md:hover:scale-105">Home</Link>
                            <Link href="/categories/monsters" className="w-fit bg-black border-black rounded-lg border-2  font-bold text-white text-2xl pb-1 px-4 hover:transition-transform duration-500 ease-out md:hover:scale-105">Monsters</Link>
                            <Link href="/categories/friends" className="w-fit bg-black border-black rounded-lg border-2  font-bold text-white text-2xl pb-1 px-4 hover:transition-transform duration-500 ease-out md:hover:scale-105">Friends</Link>
                            <Link href="/" className="w-fit border-black rounded-lg border-2 font-bold text-2xl pb-1 px-4 hover:transition-transform duration-500 ease-out md:hover:scale-105">Privacy</Link>
                            <Link href="/" className="w-fit border-black rounded-lg border-2 font-bold text-2xl pb-1 px-4 hover:transition-transform duration-500 ease-out md:hover:scale-105">About</Link>
                        </nav>
                    </div>
                </div>
                <div className='h-24'></div>
            </header>
        </>
    )
}