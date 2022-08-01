import { Cover } from 'components/anti'
import React from 'react'

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
                    { name: 'caerstro', img: ignisCity1, desc: 'desc', coordinate: { top: '30%', left: '22.5%' }, },
                    { name: 'city2', img: ignisCity2, desc: 'desc', coordinate: { top: '23%', left: '38%' } },
                    { name: 'city3', img: ignisCity3, desc: 'desc', coordinate: { top: '14%', left: '57%' } },
                    { name: 'city4', img: ignisCity4, desc: 'desc', coordinate: { top: '26%', left: '64%' } },
                    { name: 'city5', img: ignisCity5, desc: 'desc', coordinate: { top: '38%', left: '38%' } },
                    { name: 'city6', img: ignisCity6, desc: 'desc', coordinate: { top: '55%', left: '58%' } },
                ]}
            />
        </div>
    )
}
