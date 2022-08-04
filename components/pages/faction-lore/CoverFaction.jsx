import AvarikTitle from 'components/avarik-saga/avarik-title'
import React from 'react'
import { useScrollAnim, useWindowSize } from 'components/hooks/hooks'

import bgIgnis from '../../../assets/img/factionLore/bgIgnis.png'
import bgIgnisMob from '../../../assets/img/factionLore/bgIgnisMob.png'

import bgGlacia from '../../../assets/img/factionLore/bgGlacia.png'
import bgGlaciaMob from '../../../assets/img/factionLore/bgGlaciaMob.png'

import bgTerra from '../../../assets/img/factionLore/bgTerra.png'
import bgTerraMob from '../../../assets/img/factionLore/bgTerraMob.png'

import bgTenebris from '../../../assets/img/factionLore/bgTenebris.png'
import bgTenebrisMob from '../../../assets/img/factionLore/bgTenebrisMob.png'



export default function CoverFaction({ title, description }) {
    const [trigger, anim] = useScrollAnim()

    const { width } = useWindowSize() // < 767

    let background = title === 'Ignis' ? bgIgnis : title === 'Glacia' ? bgGlacia : title === 'Terra' ? bgTerra : bgTenebris
    let backgroundMobile = title === 'Ignis' ? bgIgnisMob : title === 'Glacia' ? bgGlaciaMob : title === 'Terra' ? bgTerraMob : bgTenebrisMob

    return (
        <div
            className={`cover-bg-wrap d-flex justify-content-center align-items-center`}
            ref={trigger}
            style={{
                backgroundImage: `url(${width < 767 ? backgroundMobile : background})`,
            }}
        >
            <div className="container-xxl">
                <div className="middle d-flex justify-content-center align-items-center flex-column">
                    <div className="wraptitle">
                        <AvarikTitle
                            variant={'white'}
                            titleClassName="text-white"
                            className='mb-5'
                            title={title}
                        />
                    </div>
                    <div className={`text-white desc text-center  ${anim()}`}>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}
