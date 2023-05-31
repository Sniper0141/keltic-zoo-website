import { useRouter } from 'next/router'
import Head from 'next/head'

import Icon from '@/public/images/favicon.ico'
import monki from '@/public/images/animals/delete_me.jpg'

import fairy from '@/public/images/animals/friends/fairy.jpg'
import glas_gaibhnenn from '@/public/images/animals/friends/glas_gaibhnenn.png'
import leprechaun from '@/public/images/animals/friends/leprechaun.jpg'
import puca from '@/public/images/animals/friends/puca.png'
import merrow from '@/public/images/animals/friends/merrow.png'

import abhartach from '@/public/images/animals/monsters/abhartach.png'
import donn_cuailnge from '@/public/images/animals/monsters/donn_cuailnge.png'
import oillipheist from '@/public/images/animals/monsters/oillipheist.jpg'


export default function Creature(){
    
    const router = useRouter()
    const { creature } = router.query

    let description;
    let imgSrc;

    if(creature == 'TestAnimal'){        
        description = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        imgSrc = monki.src;
    }

    if(creature == 'Fairy'){
        description = "Fairies find their home in the depths of nature. With their delicate form and fleeting movements, they are often hard to spot for human eyes. Fairies are of natural beauty and radiate an incomparable charm. Their delicate wings shimmer in the colors of the rainbow, enabling them to gracefully float through the air. It is said that they possess the magic of nature and have the ability to transform into various forms. If one has the opportunity to encounter a fairy, it is important to behave with awe and respect in their presence, for they are beguiling and powerful beings who watch over their own realm. Fairies are known for their love of music and dance. Often, one can hear soft melodies in the woods at night, originating from their enchanting play. Fairies are also guardians of nature, deeply connected to plants and animals. They bring fertility and fortune to the lands and are renowned for their healing powers and knowledge of herbs and remedies. However, while fairies may appear graceful and benevolent, one should always be cautious, for their nature is complex and sometimes whimsical. They can be friends and protectors, but also play tricks if their trust is betrayed."
        imgSrc = fairy.src;
    }
    if(creature == 'Leprechaun'){
        description = "A leprechaun is a small, mischievous man-like creature. They look like old men wearing green clothing and hats. Leprechauns are known for their association with rainbows and pots of gold, which they hide and guard. They are skilled craftsmen and enjoy playing pranks on humans. Capturing a leprechaun is believed to bring wealth and good fortune, as they grant three wishes in exchange for their freedom. However, leprechauns possess supernatural powers and are elusive beings. Leprechauns are deeply rooted in Irish culture and are popular symbols associated with St. Patrick's Day. They have become iconic figures in books, movies, and other forms of media, representing Irish folklore and the enchantment of hidden treasures."
        imgSrc = leprechaun.src;
    }
    if(creature == 'Puca'){
        description = "The Púca is a creature from Irish folklore that is deeply rooted in Celtic mythology. It is often described as a shape-shifting entity that can take the form of various animals, such as a horse, goat, or hare. The Púca is known for its mischievous nature and is said to enjoy both playing tricks on humans and providing them with guidance or warnings. While it can be unpredictable in its actions, it is generally seen as a creature that brings both fear and fascination. Encountering a Púca can be both thrilling and treacherous. Those who approach or interact with a Púca may receive a gift or a warning, but they must also be cautious as the Púca has the ability to lead people astray or lure them into dangerous situations. The Púca is closely associated with the autumn season, particularly during Samhain (Halloween), when it normally roams the countryside, causing mischief and creating an air of mystery and enchantment. "
        imgSrc = puca.src;
    }
    if(creature == 'Merrow'){
        description = "A Merrow is a creature similar to humans, often referred to as a sea fairy or mermaid. Merrows have the appearance of a beautiful human with the lower body of a fish. They are known for their enchanting singing voices and their connection to the sea. Merrows possess a magical red cap, known as a cohuleen druith, which grants them the ability to live and breathe underwater. They are gentle and shy creatures, sometimes spotted sitting on rocks or combing their long hair with a golden comb. Merrows have a love for music and can be heard singing melodious songs while swimming in the ocean. Capturing a Merrow's cap would render them powerless and compel them to live on land, but doing so is both difficult and dangerous."
        imgSrc = merrow.src;
    }
    if(creature == 'Glas_Gaibhnenn'){
        description = "The Glas Gaibhnenn is a mystical creature with a unique green-colored hide. It is believed to roam the Irish countryside, feeding on magical herbs and plants, which give its milk extraordinary properties. The Green Cow brings abundance, prosperity, and fertility, playing a significant role in the cycles of nature. Its green spots serve as a positive omen of blessings and harmony."
        imgSrc = glas_gaibhnenn.src;
    }

    if(creature == 'Abhartach'){
        description = "The Abhartach is an undead being, a malevolent vampire or revenant, haunting the lands of Ireland. With a gruesome appearance and an insatiable thirst for blood, the Abhartach possesses unholy strength and the ability to command dark forces. Legends warn of its relentlessness, as it can rise again even after temporary defeat. It is said that the Abhartach can only be stopped through the use of ancient rituals or a stake driven through its heart."
        imgSrc = abhartach.src;
    }
    if(creature == 'Donn_Cuailnge'){
        description = "With its massive size, powerful physique, and gleaming brown coat, the Donn Cuailnge commands respect and instills fear in those who encounter it. Its strength and indomitable spirit make it a symbol of prowess and virility. The Donn Cuailnge's significance lies in an ancient epic tale where it sparks a war between kingdoms. Its value is such that armies clash in fierce battles to claim possession of this extraordinary creature. And no, it is not for sale."
        imgSrc = donn_cuailnge.src;
    }
    if(creature == 'Oillipheist'){
        description = "The Oillipheist is a colossal serpent-like creature. The Oillipheist would normally dwell in the depths of Ireland's lakes, rivers, and seas, emerging from the water with an imposing and formidable presence. Legends describe its immense size, with a serpentine body covered in iridescent scales that shimmer in hues of emerald and sapphire. Its eyes, blazing with an otherworldly fire, are said to possess a mesmerizing and hypnotic power. It possesses great wisdom and the ability to control the elements, unleashing storms and tempests with a flick of its mighty tail."
        imgSrc = oillipheist.src;
    }
    
    return(
        <>
            <Head>
                <title>{creature} - Keltic Zoo</title>
                <link rel="icon" href={Icon.src}/>
            </Head>
            <main>
                <div className='bg-cover bg-black px-80 py-20' style={{backgroundImage: 'url(../images/celtic_pattern_animal_page.png)'}}>
                    <div className='p-5 rounded-3xl border-black border-4' style={{backgroundColor: '#4f772d'}}>
                        <h1 className='w-fit p-5 mx-auto rounded-2xl border-black border-4 text-center text-6xl font-serif' style={{backgroundColor: '#ecf39e'}}>{creature}</h1>
                    </div>
                    <div className='h-5 w-5'/>
                    <div className='p-8 rounded-3xl border-black border-4' style={{backgroundColor: '#4f772d'}}>
                        <div className='w-full rounded-2xl border-4 overflow-hidden' style={{borderColor: '#132a13'}}>
                            <img className='w-full' src={imgSrc}/>
                        </div>
                    </div>
                    <div className='h-5 w-5'/>
                    <div className='p-8 rounded-3xl border-black border-4 text-center' style={{backgroundColor: '#4f772d'}}>
                        <h2 className='text-5xl'>Description</h2>
                        <br/>
                        <p className='text-3xl'>{description}</p>
                    </div>
                </div>
            </main>
        </>
    )
}