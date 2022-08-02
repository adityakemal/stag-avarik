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
                "name": "High Templar",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/1ZJ5lJKXODLgPYffs3tcftbld6XD4BZIjGKijmNsslHaAwIbnhTfu1RuOAX9XMcHMN7zRGOVZfqiPZzEV_PT--N8zSmpsiX3o4dqy6c"
            },
            {
                "name": "Duelist",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/D_ao1jc715wYoC3UHdvdSfCuaT_qdI9Cjxn_gyDSwTVPipfH175Kn6jLvZR24efUdtStdvpMSKkOlJe9FENkn9JbGbDDvQUUS4wH"
            },
            {
                "name": "Paladin",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/YGIKOjnjjYEIYaI_3uoGshhSig0hbdoNosRofG3v_AaYCuYn8sOSPVligvqAtXUIUQuXCjxJPdvWGy5TaLyb9LJ-uTC1Yv_irzQiIw"
            },
            {
                "name": "Lancer",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/vgQ388fBURs-6ciuCgK-9-oAKhEv5ZuRRQodcSm6-aV1FlDCXpRrIh2Zi_uM5ce7U9aMbU6X7QolCfTADJMI2cAWTaJH07KE4Fqrhw"
            }
        ],
    },
    {
        type: 'wizard',
        heroes: [
            {
                "name": "Priest",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/xktrvZCklnlWkPwX8DwKZL_snnyk7V92mOwde8_oS2HmK-e2T2gs0u2jeCtLjAMmNwoyscdRC_5TuzRepnaiGeZ187sQe5pY7gVd"
            },
            {
                "name": "Cleric",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/uFIWvRWohmG-3jps9_GUDZ5ocbktdWmwN3i_zbxsWkOuTGA-RKhKmxIO6zaBJDTs7zesgc9QBnbZvm_4UK-2P_nS_eMxJwJ6X1EvPA"
            },
            {
                "name": "Sealer",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/0frPWJODcKFqc-HD9eyM0vm1P67vfd7jxI5hwRa33DX7Ao7Xy1V3rImjmRRj-yMzSJpOGLTY8ZX1RlJgnNv5_j8n9t921CX7gdQGGHQ"
            },
            {
                "name": "Ice Wizard",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/3xDKqiYlKLEInQS6O6okMt8r1k8B-p7_upmRDCM8dChB4rCNrWVfgaywMlDEv_jU4LxBupttmbPllSarvH-KXEUhynuW6xcmIHTIwQ"
            }
        ],
    },
    {
        type: 'marksman',
        heroes: [
            {
                "name": "Beastmaster",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/fRyICzixIPbKrzImwYVTTdyz96TXyl8FI3yK01xyWo-doWmFx2Oid6q6-UuXnT-mKcYZGDmUxBJxV-jAQk57YTneY54aSF7JbiB6U4A"
            },
            {
                "name": "Seeker",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/yYXTLecPpApv030DfFdG9q1NZ_4J43XojtNUd-cBtNnR9lVGmv8y2DR_GTdZc3EiVcXpJsWy1flUsQr3VzaQrhQXIMkW66pWOfPBSQ"
            },
            {
                "name": "Pirate",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/0ubOl493BsBJhETruI2v_HguHeSlIDzCvivzOMg8mcDjsayEIt8zXCYEYbvzAXvYhc9KsEqhaRLWy2fTsQWM68Y7GFoxo6DoTtliIQ"
            },
            {
                "name": "Bard",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/p36AOVvX7gIlvNYNhSA590cUs8oNVArpPdSCJo4S5trcoq06oz1V0GA8i20KyZoztN7QrGfSTg7iBzk8XGFXO5P4ASTU2HbdJzoiUYo"
            }
        ],
    },
]

export default function FactionGlaciaMain() {
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
                data={data}
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