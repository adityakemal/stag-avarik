import { Cover } from 'components/anti'
import React, { useEffect } from 'react'

import CoverFaction from './CoverFaction'
import LandmarkSection from './LandmarkSection'
import LegendSection from './LegendSection'
import LoreSection from './LoreSection'

import ignisMap from 'assets/img/factionLore/landmarkSection/ignisMap.png'
import bgLandIgnis from 'assets/img/factionLore/landmarkSection/bgLandIgnis.png'
//cities
import ignisCity1 from 'assets/img/factionLore/landmarkSection/ignisCity1.svg'
import ignisCity2 from 'assets/img/factionLore/landmarkSection/ignisCity2.svg'
import ignisCity3 from 'assets/img/factionLore/landmarkSection/ignisCity3.svg'
import ignisCity4 from 'assets/img/factionLore/landmarkSection/ignisCity4.svg'
import ignisCity5 from 'assets/img/factionLore/landmarkSection/ignisCity5.svg'
import ignisCity6 from 'assets/img/factionLore/landmarkSection/ignisCity6.svg'
import ignisCity7 from 'assets/img/factionLore/landmarkSection/ignisCity7.png' //from wa
import { useSelector } from 'react-redux'

const data = [
    {
        type: 'knight',
        heroes: [
            {
                "name": "Legionaire",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/gigtp8rqH60mjPucykVgqEJK4P3zXVybjexY2pz2AuVSrD7wj5UUq5NcEdRRsqO5EA-R2Q7oxB0GgSZ6Ju4C2D-ZdUw0Jh_Ak52WVUk"
            },
            {
                "name": "Dragon Knight",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/bQye73RjCdpX57s5jRqgMNcJUwwvMST_eaGtj1oGxyiGv0jY-QLuNQ4sfpF79ikNahfFFurcmm1o0AhNgfG1nECtiyuaVWZT7mrc"
            },
            {
                "name": "Samurai",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/Dhi261_2MnUkDRqDLhcoYFfBFD5e2bRo5f4_VMnKFnbvBdeKVCpJ6xJo6KhCk9edAsql0x1Ocaa_qcymCBwhy4HA61-l2tOVOfGfDQ"
            },
            {
                "name": "Arcane Knight",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/p4Yn_wLbKCvVU6V7QEXhmCmD5GBs0Wc0G1tsgAGLb3MIf8UXnQGWVlMWYQeG5b2MmZl6f6tvRE_-UG0y0t-MCU4AjEn-twBEY1nrfQ"
            }
        ],
    },
    {
        type: 'wizard',
        heroes: [
            {
                "name": "Thunder Lord",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/87CReAR3MWty6BU6LuNl5Ti5ZCCs9EjRD4VNQMJdHlB2L_YOeBPg46iRgBvvUEX526d03ApAKHZk0DrvNYm6896r62bt1MRcuyL5iFs"
            },
            {
                "name": "Fire Sorceress",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/VuIXJzAXYgFZOiGBOlSA0bnpjRWpDTkpunAV9O85ntZhzAoth6t4ZqIbXcrR6mjY9drnx-aTtINbNJOI19_DJW__FM-GIFU6xYsO59U"
            },
            {
                "name": "Dragon Mage",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/iOFyN_D4pmSvoSKK7-enUYHMxpzHUYMKCjyRA0PotRGpz2BWrKqBR3-oeujL2qiLr1tHQVqGDsMZNIPY4YtImuY6n8kbFWWeTJJq1g"
            },
            {
                "name": "Time Keeper",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/Hb_AfUw6VjTTm0dfkic9tYDDL7ZqHdyDk8brN7v0c2Wy6s3lMnpA6owU1X8h-wmv9lIRssUM-6QHfjU6TXENu4-xv0QJStac1QS6n1I"
            }
        ],
    },
    {
        type: 'marksman',
        heroes: [
            {
                "name": "Huntress",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/c8zjirY6hUVH2jxPWSCM4bFgnzUmFMXjinQebv0XJqWS-xZOKe47Kbgr1qzatlSO3PBwc1O0AuamUN9Sy6pJ9cPXHC0SnnVJQgAbDS0"
            },
            {
                "name": "Ranger",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/lS_xs8RyPqYjm47t1CpqB9MP5rnhZ3-0nr44asKJ9PE6d3GM2fPNRd9P8lPANArtDOUiK8uPT2tFY8ooooMnUaHsq6oveIui6q5j5g"
            },
            {
                "name": "Assassin",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/vwpdKYS3zsnvLVN0ySHX-Y4WLh87mEzo_NrnJsGgVOSHne8OyQureHbUoIzaQkrnX3Pgg5YsL8VAJlYMjg-CUTnOW-xvnsLEXRszjA"
            },
            {
                "name": "Ninja",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/eS6RZcyF5dLD9pS2YPKrRKrWV2YlUgLK99qlLAFRG57WcC_xM9ep28YTMB42iSypE9543uluVxcCqoQRsgVbPXvuHmMoqZK-t-ePFlY"
            }
        ],
    },
]

export default function FactionIgnisMain() {
    const { initialGallery } = useSelector(state => state.gallery)
    useEffect(() => {
        console.log(initialGallery.filter(res => res.Faction === 'Ignis' && res.Subclass === 'Legendary Knight'))
    }, [])
    return (
        <div className='faction-lore'>
            <CoverFaction
                title='Ignis'
                description='The feisty Ignis proudly bear their faction’s fire insignia. Much like the scorching desert they call home, they are the life and soul of any party - an Ignis never backs down from a challenge.'
            />
            <LoreSection
                title={`“We are Ignis!”`}
                logo='ignis' //ignis /glacia /terra
                description={`
                <p>
                The feisty Ignis proudly bear their faction’s fire insignia. Much like the scorching desert they call home, they are the life and soul of any party; an Ignisian never backs down from a challenge.
                </p>
                <p>
                Its people are daring and bold, and carry great ardor for life. Expressing themselves through their art and craft, an Ignisian finds beauty even in the face of peril. Their spirited manner also translates to incredible prowess on the battlefield.
                </p>

                <p>
                Calor City, the capital of Calidum, is often said to be a melting pot of the land’s rich cultures and traditions. Theaters and galleries flourish at every turn, while circus troupes and nomadic merchants enliven its streets.
                </p>

                <p>
                As a symbol of their might, the Calidum Colosseum stands at the heart of the capital, where the best gladiators prove their worth and spectators vary from local city people to Ignisian nobility and foreign travelers. Within these historic walls, Ignacio the Dragon Knight himself had obtained his first taste of fame.
                </p>

                <p>
                For a land made up of mostly scorching deserts and arid wastelands, the Tears of Helios and nearby Sunset Gorge are the main sustenance for Ignisians. The water from this oasis gives the clothes fashioned by the Silkweavers their magical healing properties.
                </p>
                <p>
                This is also where the Ignisian Guardian Dragon was said to have once manifested its might in an effort to defend the land. Some people believe the guardian’s spirit still roams these grounds, while others maintain that it is long dead, preserved only by legends and stories.
                </p>

                <p>
                Finally, one shan’t ignore the Grim Wastes, the hottest point in the entire kingdom that is also home to the majestic yet formidable Xalanthi, Herald of the Sun.
                </p>
                `}
            />
            <LegendSection
                title="Ignisians"
                data={data}
            />
            <LandmarkSection
                bigland_img={ignisMap}
                bgLand={bgLandIgnis}
                locations={[
                    { name: 'Calor City', img: ignisCity1, desc: 'The culturally rich capital of Calidum, home to shrewd merchants and gifted craftsmen. Located on the fringes of the desert, its citizens are driven with the fiery passion to showcase their might.', coordinate: { top: '30%', left: '22.5%' }, },
                    { name: 'Tears of Helios', img: ignisCity2, desc: 'Legend has it that Helios had taken pity on the mortals and their arid home, cursed with never-ending thirst. Having wept so, he blessed the land and let his essence pool as a magical, eternal oasis.', coordinate: { top: '23%', left: '38%' } },
                    { name: `Kilghora’s Resting Place`, img: ignisCity3, desc: `Lodged on the outskirts of Calidum, this cave is where Ignacio had lured and slain the dragon Kilghora. Its skull still remains inside, surrounded by the remnants of Kilghora’s flames.`, coordinate: { top: '14%', left: '57%' } },
                    { name: 'Solis Desert', img: ignisCity4, desc: 'A panorama of endless sand that spans as far as the eyes can see. People hailing from various tribes call this vast expanse their home, including bands of nomads who find comfort in this balmy tract.', coordinate: { top: '26%', left: '64%' } },
                    { name: 'Mirage Market', img: ignisCity5, desc: 'The thriving center of Avarus’ economy. Exotic Terran fruits, steel contrabands from Tenebris, Glacian essays on forbidden sagas, you name it... For the right price, you can find anything in this market.', coordinate: { top: '38%', left: '38%' } },
                    { name: 'Grim Wastes', img: ignisCity6, desc: 'An ever-moving region and the hottest point in the desert. In its scorching heart resides Xalanthi the Phoenix, ever eager to challenge those foolish enough to set foot on these barren lands.', coordinate: { top: '55%', left: '58%' } },
                    { name: 'Sunset Gorge', img: ignisCity7, desc: 'A massive gorge formed from the overflowing water of the Tears of Helios over the course of centuries. The small river coursing through it now sustains all the lives that have made the gorge their home.', coordinate: { top: '36%', left: '7%' } },
                ]}
            />
        </div>
    )
}
