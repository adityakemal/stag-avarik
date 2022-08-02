import AvarikTitle from 'components/avarik-saga/avarik-title'
import React from 'react'
import { useScrollAnim } from 'components/hooks/hooks'

import bgIgnis from '../../../assets/img/factionLore/bgIgnis.png'

import bgGlacia from '../../../assets/img/factionLore/bgGlacia.png'

import bgTerra from '../../../assets/img/factionLore/bgTerra.png'


export default function CoverFaction({ title, description }) {
    const [trigger, anim] = useScrollAnim()

    let background = title === 'Ignis' ? bgIgnis : title === 'Glacia' ? bgGlacia : bgTerra

    return (
        <div
            className={`cover-bg-wrap d-flex justify-content-center align-items-center`}
            ref={trigger}
            style={{
                backgroundImage: `url(${background})`,
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
