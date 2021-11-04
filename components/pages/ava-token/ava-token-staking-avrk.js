import imgAvrkToken from "assets/img/token/img_avrk-token.png"
import imgStakingMechanics from "assets/img/token/img_staking-mechanics.png"
import { useScrollAnim } from "components/hooks/hooks"
import React from "react"

const AvaTokenStakingAvrk = () => {
  const [trigger, anim] = useScrollAnim()
  return (
    <section className="staking-mechanics-and-avrk-token" ref={trigger}>
      <div className="py-5">
        <div className="row">
          <div className="content col-md-6 col-sm-12">
            <div className="heading mb-5">
              <h3 className={`title ${anim(1)}`}>Staking Mechanics</h3>
            </div>
            <img
              src={imgStakingMechanics}
              className={`img-staking-mechanics ${anim(2)}`}
            />
            <p className={`description ${anim(3)} text-center`}>
              Each Avarik NFT in the staking smart contracts will earn 10 $AVA
              per day
            </p>
          </div>
          <div className="content col-md-6 col-sm-12">
            <div className="heading mb-5">
              <h3 className={`title ${anim(4)}`}>$AVRK Token</h3>
            </div>
            <img src={imgAvrkToken} className={`img-avrk-token ${anim(5)}`} />
            <p className={`description ${anim(6)} text-center`}>
              AVRK Token will be developed as an ERC 20 governance token for
              Avarik Saga Universe, focusing on giving back to our players
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AvaTokenStakingAvrk
