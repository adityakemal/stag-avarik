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
