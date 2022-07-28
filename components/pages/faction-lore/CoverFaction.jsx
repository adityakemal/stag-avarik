import AvarikTitle from 'components/avarik-saga/avarik-title'
import React from 'react'

import bgIgnis from '../../../assets/img/factionLore/bgIgnis.png'
import ignisOverlay from '../../../assets/img/factionLore/ignisOverlay.svg'
import ignisFlag from '../../../assets/img/factionLore/ignisFlag.svg'

import bgGlacia from '../../../assets/img/factionLore/bgGlacia.png'
import glaciaOverlay from '../../../assets/img/factionLore/glaciaOverlay.svg'
import glaciaFlag from '../../../assets/img/factionLore/glaciaFlag.svg'

import bgTerra from '../../../assets/img/factionLore/bgTerra.png'
import terraOverlay from '../../../assets/img/factionLore/terraOverlay.svg'
import terraFlag from '../../../assets/img/factionLore/terraFlag.svg'

import bgBottomCover from '../../../assets/img/factionLore/bgBottomCover.png'

export default function CoverFaction({ title, description }) {
    let background = title === 'Ignis' ? bgIgnis : title === 'Glacia' ? bgGlacia : bgTerra

    let overlay = title === 'Ignis' ? ignisOverlay : title === 'Glacia' ? glaciaOverlay : terraOverlay;

    return (
        <div
            className="cover-bg-wrap d-flex justify-content-center align-items-center"
            style={{
                backgroundImage: `url(${bgBottomCover}), url(${overlay}), url(${ignisFlag}), url(${background})`,
            }}
        >
            <div className="middle d-flex justify-content-center align-items-center flex-column">
                <div className="wraptitle">
                    <AvarikTitle
                        variant={'white'}
                        titleClassName="text-white"
                        className='mb-5'
                        title={title}
                    />
                </div>
                <div className='text-white desc text-center'>
                    {description}
                </div>
            </div>


        </div>
    )
}
