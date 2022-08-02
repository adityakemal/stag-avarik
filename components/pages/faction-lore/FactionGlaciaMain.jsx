import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getHandleLegendHeroes } from 'redux/gallery/gallery.reducer'

import { Cover } from 'components/anti'


import CoverFaction from './CoverFaction'
import LandmarkSection from './LandmarkSection'
import LegendSection from './LegendSection'
import LoreSection from './LoreSection'

import ignisMap from 'assets/img/factionLore/landmarkSection/ignisMap.png'
import bgLandIgnis from 'assets/img/factionLore/landmarkSection/bgLandIgnis.png'
//cities



export default function FactionGlaciaMain() {

    const { legendaryHeroes } = useSelector(state => state.gallery)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHandleLegendHeroes('Glacia'))
    }, [])


    return (
        <div className='faction-lore'>
            <CoverFaction
                title='Glacia'
                description='The fluid Glacians may seem delicate, but fragile they are not. Ambitious and always striking with precision, they move with meaning and carry the grace of a floating snowflake.'
            />
            <LoreSection
                title={`“Truth serves justice”`}
                logo='glacia' //ignis /glacia /terra
                description={`
                <p>
                The fluid Glacians may seem delicate, but fragile they are not. Ambitious and always striking with precision, they move with meaning and carry the grace of a floating snowflake.
                </p>
                <p>
                Living in everlasting winter has made the Glacians unbreakable yet impossibly poised. Its people value knowledge and information above all, with libraries in every district and reason underlying their every action.
                </p>

                <p>
                However, their fighters are not to be dismissed; hardened by cold nights and austere hearts, they are indeed a fierce and unyielding troupe. As a domain erected amidst water, pirates are not unheard of, so be wary where you set sail.
                </p>

                <p>
                Its capital, Eisdorf, is a wintry metropolis tucked behind the bleak and barren expanse known only as the Tundra. This frozen tract is host to year-long snowstorms and remarkable Yeti sightings.
                </p>

                <p>
                As the entire Vinterberg region comprises countless islets and frozen lakes, many of its people rely on marine life for their livelihood, which is why you will come across just as many Glacian fishermen as scholars and warriors; some even identify as two of these three.
                </p>

                <p>
                In the more remote parts of the land hide the Sanctuary, rumored to be resting place of the gods themselves, although none has stepped foot in this mythical site, much less know the truth behind these stories.
                </p>
                
                <p>
                Glacians too have their fair share of monster tales, most prominent of which is the Zeiglatz. Some believe the beast is guarding a treasure beyond compare, while others claim it is a threshold to a different realm.
                </p>
                `}
            />
            <LegendSection
                title="Glacians"
                data={legendaryHeroes}
            />
            {/* <LandmarkSection
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
            /> */}
        </div>
    )
}
