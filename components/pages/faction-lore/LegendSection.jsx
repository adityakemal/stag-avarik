import React, { useRef, useState } from 'react'
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
import ModalPic from '../gallery/modal';
import Slider from 'react-slick';



export default function LegendSection({ title, data }) {
    const [trigger, anim] = useScrollAnim()

    const [selectedHeroType, setSelectedHeroType] = useState(0)
    //modal
    const [open, setOpen] = React.useState(false)
    const [currentItem, setCurrentItem] = React.useState(null)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)



    //creating the ref
    const customeSlider = useRef();
    const handleNext = () => {
        customeSlider.current.slickNext()
    }

    const handlePrev = () => {
        customeSlider.current.slickPrev()
    }


    const sliderContent = () => {
        return (
            data?.map((res, i) =>
                <div className='w-100'>
                    <div className=" row mx-0 w-100 box-heroes" key={i}>
                        {
                            res?.heroes?.map((h, j) => (
                                <div className='col-xs-6 col-sm-6 col-md-3 px-2 px-sm-2 px-md-3 px-xl-4  ' style={{ position: 'relative' }}>
                                    <div
                                        className={` wrapimage text-white text-center cursor-pointer `}
                                        key={j}
                                        ref={trigger}
                                        onClick={() => {
                                            setCurrentItem(h)
                                            handleOpen(true)
                                        }}
                                    >
                                        <img src={legendFrame} className='img-fluid frame ' alt="" />
                                        <img src={h?.image} className='img-fluid' alt="" />
                                        <p className="name mt-3 mt-xs-2 mb-3">
                                            {h?.name}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )
        )

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
            <ModalPic
                open={open}
                handleClose={handleClose}
                currentItem={currentItem}
                isFactionPage={true}
            />

            <div className="container-xxl py-5">
                <div className="d-flex justify-content-center w-100 mb-4 pt-5">
                    <AvarikTitle title={title} variant={'white'} />
                </div>
                <h5 className='text-white text-center mb-5'>{data[selectedHeroType]?.heroes[0].Subclass}s</h5>
                <div >
                    <Slider
                        ref={customeSlider}
                        {...{
                            dots: false,
                            arrows: false,
                            infinite: true,
                            speed: 500,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            beforeChange: (current, next) => setSelectedHeroType(next)
                        }}

                    >
                        {sliderContent()}
                    </Slider>
                </div>



                <div className="w-100 d-flex align-items-center justify-content-center">
                    <div className={`d-flex align-items-center justify-content-between w-100 wrapnavhero`}>
                        <img className='buttonslide' src={leftbutton} alt="" onClick={handlePrev} />
                        {data.map((res, i) =>
                            <div
                                key={i}
                                className={`navbut ${i === selectedHeroType && 'active'} `}
                                onClick={() => customeSlider.current.slickGoTo(i)}
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
