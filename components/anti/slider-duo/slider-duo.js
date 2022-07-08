// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Slider Duo
// ========================================================================================================================================

import React, { useState, useEffect, useRef } from "react"

import { Button } from "components/anti/buttons/buttons"
import { Card } from "components/anti/card/card"
import { Slider } from "components/anti/slider/slider"

export const SliderDuo = ({ values }) => {
  const [state, setState] = useState({
    nav1: null,
    nav2: null,
  })
  const slider1 = useRef()
  const slider2 = useRef()

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    })
  }, [])

  const { nav1, nav2 } = state

  return (
    <div className="slider-duo">
      <div className="row row-5">
        <div className="col-bg col-md-6 order-md-last mb-sm-down-4">
          <Slider
            asNavFor={nav1}
            forwardRef={slider => (slider2.current = slider)}
            noGutter
            visibleInitial={false}
            visibleLgDown={false}
            visibleMdDown={false}
            visibleSmDown={false}
            arrowsMdDown={true}
            arrowsSmDown={true}
            showInitial={1}
            showLgDown={1}
            showMdDown={1}
            showSmDown={1}
          >
            {values.map((value, i) => {
              return (
                <Card
                  forwardKey={i}
                  variant="boxless"
                  src={value.img}
                  imgRatio="r-1-1"
                />
              )
            })}
          </Slider>
        </div>
        <div className="col-body col-md-6 order-md-first">
          <Slider
            asNavFor={nav2}
            forwardRef={slider => (slider1.current = slider)}
            fade
            visibleInitial={false}
            visibleLgDown={false}
            visibleMdDown={false}
            visibleSmDown={false}
            showInitial={1}
            showLgDown={1}
            showMdDown={1}
            showSmDown={1}
            arrowsInitial={false}
            arrowsLgDown={false}
          >
            {values.map((value, i) => {
              return (
                <div className="col-body-content" key={i}>
                  <h2 className="h4">{value.title}</h2>
                  <p className="lead">{value.text}</p>
                  <p>{value.name}</p>
                  <div className="content-v-center-left">
                    {value.buttons.map((value, i) => {
                      return (
                        <Button variant="link" forwardKey={`button-${i}`}>
                          {value}
                        </Button>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}
