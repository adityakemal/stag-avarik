import React, { useState } from 'react'
import 'animate.css';

import { useScrollAnim } from 'components/hooks/hooks'
import AvarikTitle from 'components/avarik-saga/avarik-title'


import knightButton from 'assets/img/factionLore/legendsSection/knightButton.svg'
import wizardButton from 'assets/img/factionLore/legendsSection/wizardButton.svg'
import marksmanButton from 'assets/img/factionLore/legendsSection/marksmanButton.svg'

import leftbutton from 'assets/img/factionLore/legendsSection/leftbutton.png'
import rightbutton from 'assets/img/factionLore/legendsSection/rightbutton.png'
import legendFrame from 'assets/img/factionLore/legendsSection/legendFrame.svg'

import bgLegend from 'assets/img/factionLore/legendsSection/bgLegend.jpeg'
import bgLegendGlacia from 'assets/img/factionLore/legendsSection/bgLegendGlacia.png'



export default function LegendSection({ title, data }) {
    const [trigger, anim] = useScrollAnim()

    const [selectedHeroType, setSelectedHeroType] = useState(0)


    const handleNext = () => {
        if (selectedHeroType < (data?.length - 1)) {
            setSelectedHeroType(selectedHeroType + 1)
        } else {
            setSelectedHeroType(0)
        }
    }

    const handlePrev = () => {
        if (selectedHeroType > 0) {
            setSelectedHeroType(selectedHeroType - 1)
        } else {
            setSelectedHeroType(data?.length - 1)
        }
    }

    return (
        <section className={`sc-legend d-flex align-items-center`}
            style={{
                backgroundImage: `url(${title === 'Ignisians' ? bgLegend : title === 'Glacians' ? bgLegendGlacia : bgLegend})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
        >
            <div className="container-xxl py-5">
                <div className="d-flex justify-content-center w-100 mb-4 pt-5">
                    <AvarikTitle title={title} variant={'white'} />
                </div>
                <h5 className='text-white text-center mb-5'>{data[selectedHeroType]?.heroes[0].Subclass}s</h5>
                <div className={`w-100 box-heroes`}>
                    {
                        data[selectedHeroType]?.heroes?.map((res, i) => (
                            <div className={`wrapimage text-white text-center ${anim(i + 2, "revealInDown")}`} key={i} ref={trigger}>
                                <img src={legendFrame} className='img-fluid frame ' alt="" />
                                <img src={res?.image} className='img-fluid' alt="" />
                                <p className="name mt-3 mt-xs-2 mb-0">
                                    {res?.name}
                                </p>
                                {/* <p className="desc">
                                    {res.subclass}
                                </p> */}
                            </div>
                        ))
                    }

                    {
                        [1, 1].map((res, i) => (
                            <div className={`wrapimage text-white text-center`} style={{ opacity: 0 }} >
                                <img src={''} className='img-fluid frame ' alt="" />
                            </div>
                        ))
                    }


                </div>

                <div className="w-100 d-flex align-items-center justify-content-center">
                    <div className={`d-flex align-items-center justify-content-between w-100 wrapnavhero`}>
                        <img className='buttonslide' src={leftbutton} alt="" onClick={handlePrev} />
                        {data.map((res, i) =>
                            <div
                                key={i}
                                className={`navbut ${i === selectedHeroType && 'active'} `}
                                onClick={() => setSelectedHeroType(i)}
                            >
                                <img src={res?.type === 'knight' ? knightButton : res?.type === 'wizard' ? wizardButton : marksmanButton} alt="" />
                            </div>
                        )}
                        <img className='buttonslide' src={rightbutton} alt="" onClick={handleNext} />
                    </div>
                </div>

            </div>
        </section >
    )
}
