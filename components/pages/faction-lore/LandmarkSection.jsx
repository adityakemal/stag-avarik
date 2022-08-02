import React, { useState } from 'react'
import AvarikTitle from 'components/avarik-saga/avarik-title'
import { useScrollAnim } from 'components/hooks/hooks'

import leftbutton from 'assets/img/factionLore/legendsSection/leftbutton.png'
import rightbutton from 'assets/img/factionLore/legendsSection/rightbutton.png'

import pinMark from 'assets/img/factionLore/landmarkSection/pinMark.svg'


export default function LandmarkSection({ bigland_img, locations, bgLand }) {

    const [trigger, anim] = useScrollAnim()

    const [activeLocation, setActiveLocation] = useState(0)

    const handleNext = () => {
        if (activeLocation < (locations.length - 1)) {
            setActiveLocation(activeLocation + 1)
        } else {
            setActiveLocation(0)
        }
    }

    const handlePrev = () => {
        if (activeLocation > 0) {
            setActiveLocation(activeLocation - 1)
        } else {
            setActiveLocation(locations.length - 1)
        }
    }

    return (
        <section
            className={`sc-landmark d-flex align-items-center py-main`}
            ref={trigger}
            style={{
                backgroundImage: `url(${bgLand})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top center',
                backgroundSize: 'cover'
            }}
        >
            <div className="container-xxl">
                <div className="d-flex justify-content-center w-100  pt-5">
                    <AvarikTitle title={'Landmarks'} variant={'white'} />
                </div>
                <div className={`row row-0 ${anim(2, "revealInDown")} `}>
                    <div className="col-lg-8 d-flex justify-content-center py-4">
                        <div className={`wrapmap`}>
                            <img src={pinMark} alt="" className='pin-mark' style={locations[activeLocation]?.coordinate} />
                            <img src={bigland_img} alt="" className='big-map' />
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center flex-column align-items-center">
                        <div className="w-100 d-flex align-items-center justify-content-center mb-3 mb-sm-0">
                            <img className='buttonslide' src={leftbutton} alt="leftarrow" onClick={handlePrev} />

                            <div className={`w-100 px-4  d-flex justify-content-center`}>
                                <img src={locations[activeLocation]?.img} alt="land image" className='city' />
                            </div>

                            <img className='buttonslide' src={rightbutton} alt="roghtarrow" onClick={handleNext} />
                        </div>
                        <div className="text-center text-white">
                            <h2>{locations[activeLocation]?.name}</h2>
                            <p className="desc">
                                {locations[activeLocation]?.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
