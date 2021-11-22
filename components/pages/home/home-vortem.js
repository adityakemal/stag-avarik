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
            <h2 className={`${anim(1)} text-white`}>$VORTEM</h2>
          </div>
          <div className="box mb-3">
            <div className="box-inner">
              <div className="sc-main sc-dark sc-vortem-logo py-main" ref={trigger}>
                <div className="container">
                  <div className="logo-text">
                    <p className={anim(1)}>Avarik Saga In Game Currency</p>
                    <h1 className={anim(2)}>
                      <span>$Vortem</span> <br />
                      Token
                    </h1>
                  </div>
                  <img src={logo} className={anim(3)} alt="Vortem" />
                </div>
              </div>
            </div>
          </div>
          <div className="box mb-3">
            <div className="box-inner">
              <div className="sc-main sc-dark sc-vortem-what py-main" ref={trigger2}>
                <div className="container">
                  <div className="heading">
                    <p className={`mb-1 ${anim2(1)}`}>What Is</p>
                    <h2 className={`h1 ${anim2(2)}`}>
                      <span>$Vortem</span>
                    </h2>
                  </div>
                  <img src={whatMain} className={`"img-fluid ${anim2(3)}`} alt="Vortem" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 d-flex justify-content-center" ref={trigger3}>
            <Button
              variant="outline-white mx-1"
              className={`mb-sm-down-2 ${anim3()}`}
              link="/vortem"
            >
              <h5 className="mb-0">
                Click here to learn more about $VORTEM »
              </h5>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeVortem
