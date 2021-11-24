import logo from "assets/img/vortem/1_logo.png"
import whatMain from "assets/img/vortem/2a_what_main.png"
import { Button } from "components/anti"
import { useScrollAnim } from "components/hooks/hooks"
import React from "react"

const HomeVortem = () => {
  const [trigger, anim] = useScrollAnim()
  const [trigger2, anim2] = useScrollAnim()
  const [trigger3, anim3] = useScrollAnim()

  return (
    <section className="sc-home-vortem">
      <div className="py-main">
        <div className="container">
          <div className="heading">
            <h2 className={`${anim(1)} text-white`}>In Game Currency</h2>
          </div>
          <div className="box mb-3">
            <div className="box-inner">
              <div className="sc-main sc-dark sc-vortem-logo" ref={trigger}>
                <div className="container">
                  <div className="row mb-3">
                    <div className="col-md-8 col-6 d-flex align-items-center">
                      <div className="logo-text">
                        <p className={`title ${anim(1)}`}>Avarik Saga In Game Currency</p>
                        <h1 className={anim(2)}>
                          <span>$Vortem</span> Token
                        </h1>
                        <p className={`d-none d-md-block ${anim(3)}`}>
                          $VORTEM is the official Avarik Saga in-game currency, which you can use for upgrading weapons and armors, recruit new Avariks and purchase ingredient
                        </p>
                        <Button
                          variant="outline-white mx-1"
                          className={`d-none d-md-block mb-sm-down-2 mt-3 ${anim(4)}`}
                          link="/vortem"
                        >
                          Click here to learn more about $VORTEM»
                        </Button>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 d-flex align-items-center">
                      <img src={logo} className={anim(3)} alt="Vortem" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <p className={`d-block d-md-none ${anim(3)}`}>
                      $VORTEM is the official Avarik Saga in-game currency, which you can use for upgrading weapons and armors, recruit new Avariks and purchase ingredient
                    </p>
                  </div>
                  {/* <div className="w-100 d-flex justify-content-start" ref={trigger3}> */}
                  <Button
                    variant="outline-white mx-1"
                    className={`d-block d-md-none mb-sm-down-2 ${anim(4)}`}
                    link="/vortem"
                  >
                    Click here to learn more about $VORTEM »
                  </Button>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HomeVortem
