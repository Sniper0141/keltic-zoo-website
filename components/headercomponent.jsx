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
                        <nav className="flex items-end sm:justify-end flex-col md:flex-row gap-1 md:gap-8 mt-2 md:mt-8 mr-2 md:mr-8">
                            <Link href="/" className="hidden lg:block w-fit bg-black border-black rounded-lg border-2 font-bold text-white text-2xl pb-1 px-4 hover:transition-transform duration-500 ease-out md:hover:scale-105">Home</Link>
                            <Link href="/categories/Monsters" className="w-fit bg-black border-black rounded-lg border-2  font-bold text-white text-2xl pb-1 px-4 hover:transition-transform duration-500 ease-out md:hover:scale-105">Monsters</Link>
                            <Link href="/categories/Friends" className="w-fit bg-black border-black rounded-lg border-2  font-bold text-white text-2xl pb-1 px-4 hover:transition-transform duration-500 ease-out md:hover:scale-105">Friends</Link>
                            <Link href="/about" className="hidden xl:block w-fit border-black rounded-lg border-2 font-bold text-2xl pb-1 px-4 hover:transition-transform duration-500 ease-out md:hover:scale-105">About</Link>
                            <Link href="/privacy" className="hidden xl:block w-fit border-black rounded-lg border-2 font-bold text-2xl pb-1 px-4 hover:transition-transform duration-500 ease-out md:hover:scale-105">Privacy</Link>
                        </nav>
                    </div>
                </div>
                <div className='h-24'></div>
            </header>
        </>
    )
}