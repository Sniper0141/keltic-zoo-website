import Link from 'next/link';

export default function FooterComponent(){
    return(
        <footer className="h-64 text-center flex flex-col" style={{backgroundColor: '#31572c'}}>
            <br/>
            <br/>
            <p>
                <strong>Disclaimer</strong><br/>
                Do not try to search this zoo in the real world. <br/>
                It is purely fictional and made up for a school project. 
            </p>
            <br/>
            <p>
                <strong>©</strong> All rights reserved by <a className="underline" href="https://github.com/Sniper0141">Sniper0141</a> on Github.
            </p>
            <br/>
            <div>
                <Link href="/" className='hover:underline'>Privacy</Link>
                <text> - </text>
                <Link href="/" className='hover:underline'>About</Link>
            </div>
        </footer>
    )
}