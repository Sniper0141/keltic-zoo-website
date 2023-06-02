import Head from 'next/head'

import Icon from '@/public/images/favicon.ico'

export default function Privacy(){
    return(
        <>
            <Head>
                <title>Privacy - Keltic Zoo</title>
                <link rel="icon" href={Icon.src}/>
            </Head>
            <main className='bg-cover bg-black px-10 md:px-60 py-10 md:py-20' style={{backgroundColor: '#4f772d'}}>
                <div className="font-serif">
                    <h1 className="text-5xl md:text-center">Privacy Policy</h1>
                    <br/>
                    <br/>
                    <div className="">
                        <p className=''>
                            <b>Responsible for the content of this site: </b><br/>
                            Sniper0141 <br/>
                            Kelticstreet 1 <br/>
                            3GJC Antananarivo <br/>
                            Madagascar 
                        </p>
                        <br/>
                        <p>
                            <b>Contact: </b><br/>
                            Phone: +69 69 420 69 69 <br/>
                            E-Mail: peeper.pooper@veryreal-emailaddress.com 
                        </p>
                        <br/>
                        <p>
                            <b>Hosting-Provider: </b><br/>
                            GitHub <br/>
                            88 Colin P Kelly Jr St <br/>
                            San Francisco, CA 94107 <br/>
                            USA 
                        </p>
                        <br/>
                        <p>
                            <b>Disclaimer: </b><br/>
                            Despite careful content control, we assume no liability for the content of external links. <br/>
                            The operators of the linked pages are solely responsible for their content.
                        </p>
                        <br/>
                        <p>
                            <b>Copy Right: </b><br/>
                            The content and works created by the operator of this website on these pages are subject to Swiss copyright law. <br/>Reproduction, editing, distribution, and any kind of utilization beyond the limits of copyright require the written consent of the operator. Downloads and copies of this page are only permitted for private, non-commercial use.
                        </p>
                        <br/>
                        <p>
                            <b>VAT number:</b> <br/>
                            In accordance with § 19 UStG, no sales tax is levied.
                        </p>
                        <br/>
                        <p>
                            I would like to point out that the unauthorized use of parts of the imprint or content of this website may result in legal consequences.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}