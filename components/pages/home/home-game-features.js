import React, { useRef, useState } from "react"
import { Parallax } from "react-parallax"
import AvarikTitle from "components/avarik-saga/avarik-title"
import { StackedCarousel, ResponsiveContainer, StackedCarouselSlideProps } from 'react-stacked-center-carousel';
import { Slider } from "components/anti"

import separator from "assets/img/home/separator-advisors.png"
import bg from "assets/img/home/bg_game-features.png"
import features1 from "assets/img/home/features-1.png"
import features2 from "assets/img/home/features-2.jpeg"
import features3 from "assets/img/home/features-3.jpeg"
import frame from "assets/img/home/feature-game-frame.png"
import arrowRight from "assets/img/common/arrow-right.png"
import arrowLeft from "assets/img/common/arrow-left.png"

const features = [
    { img: features1 },
    { img: features2 },
    { img: features3 },
]

const HomeGameFeatures = () => {
    const ref = useRef()
    const [index, setIndex] = useState(0)

    const onSlide = (newIndex) => {
        setIndex(newIndex)
    }

    const Slide = React.memo(
        function (props) {
            const { data, dataIndex, isCenterSlide, swipeTo } = props;
            const { img } = data[dataIndex];
            return (
                <div className={`slider-item ${isCenterSlide ? "active" : ""}`}>
                    <img className="img-frame" src={frame} alt="" />
                    <img
                        className="img-features-slider"
                        draggable={false}
                        src={img}
                    />
                </div>
            );
        }
    );

    return (
        <Parallax
            blur={0}
            bgImage={bg}
            strength={200}
            className="cover"
        >
            <section className="sc-home-game-features">
                <img src={separator} className="separator" alt="" />
                <div className="py-main">
                    <div className="container">
                        <AvarikTitle title="Game Features" className="mx-auto text-white" variant="white" />
                        <ResponsiveContainer
                            carouselRef={ref}
                            render={(parentWidth, carouselRef) => {
                                let currentVisibleSlide = 3;
                                if (parentWidth <= 576) currentVisibleSlide = 1;
                                return (
                                    <StackedCarousel
                                        ref={carouselRef}
                                        data={features}
                                        carouselWidth={parentWidth}
                                        slideWidth={750}
                                        slideComponent={Slide}
                                        maxVisibleSlide={5}
                                        currentVisibleSlide={currentVisibleSlide}
                                        useGrabCursor={true}
                                        className="features-slider"
                                        customScales={[1, 0.7, 0.5, 0.2]}
                                        fadeDistance={0.3}
                                        onActiveSlideChange={onSlide}
                                    />
                                )
                            }} />
                        <div className="pagination">
                            {features.map((item, i) => (
                                <div
                                    // onClick={() => ref.current.swipeTo(i)}
                                    className={`item ${i === index ? "active" : ""}`}
                                />
                            ))}
                        </div>
                        <div onClick={() => ref.current.goBack()} className="arrow left">
                            <img src={arrowLeft} className="img-fluid" />
                        </div>
                        <div onClick={() => ref.current.goNext()} className="arrow right">
                            <img src={arrowRight} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section >
        </Parallax >
    )
}

export default HomeGameFeatures