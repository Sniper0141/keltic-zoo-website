export default function HeaderComponent(){
    return(
        <header className="bg-white flex">
            <div className="w-1/2">
                <div className="flex w-fit ml-40">
                    <img src="./Keltic_Zoo_Logo.svg" alt='keltic zoo logo' className='h-24'></img>
                    <p className="text-3xl ml-6 mt-auto mb-auto font-serif">Keltic Zoo</p>
                </div>
            </div>
            <div className="w-1/2">
                <nav className="flex gap-10 justify-end mt-8 mr-10">
                    <p className="border-black rounded-lg border-2 font-bold text-2xl pb-1 px-4">Home</p>
                    <p className="border-black rounded-lg border-2 font-bold text-2xl pb-1 px-4">Animals</p>
                    <p className="border-black rounded-lg border-2 font-bold text-2xl pb-1 px-4">About</p>
                    <p className="bg-black border-black rounded-lg border-2  font-bold text-white text-2xl pb-1 px-4">Log In</p>
                </nav>
            </div>
        </header>
    )
}