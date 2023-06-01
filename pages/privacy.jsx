import Head from 'next/head'

import Icon from '@/public/images/favicon.ico'

export default function Privacy(){
    return(
        <>
            <Head>
                <title>Privacy - Keltic Zoo</title>
                <link rel="icon" href={Icon.src}/>
            </Head>
            <main className='bg-cover bg-black px-60 py-20' style={{backgroundColor: '#4f772d'}}>
                <div className="font-serif">
                    <h1 className="text-5xl text-center">Privacy Policy</h1>
                    <br/>
                    <br/>
                    <div className="">
                        <p className=''>
                            <b>Verantwortlich für den Inhalt dieser Website: </b><br/>
                            Said Simokovic <br/>
                            Neubrunnenstrasse 33 <br/>
                            8302 Kloten <br/>
                            Schweiz 
                        </p>
                        <br/>
                        <p>
                            <b>Kontakt: </b><br/>
                            Telefon: +41 76 343 03 07 <br/>
                            E-Mail: said.simokovic@icloud.com 
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
                            <b>Haftungshinweis: </b><br/>
                            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. <br/>
                            Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                        </p>
                        <br/>
                        <p>
                            <b>Urheberrecht: </b><br/>
                            Die durch den Betreiber dieser Website erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Schweizer Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des Betreibers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                        </p>
                        <br/>
                        <p>
                            <b>Umsatzsteuer-Identifikationsnummer:</b> <br/>
                            Gemäß § 19 UStG wird keine Umsatzsteuer erhoben.
                        </p>
                        <br/>
                        <p>
                            Ich möchte darauf hinweisen, dass die unerlaubte Verwendung von Teilen des Impressums oder des Inhalts dieser Website zu rechtlichen Konsequenzen führen kann.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}