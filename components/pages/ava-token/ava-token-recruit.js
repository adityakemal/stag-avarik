import imgRecruitMechanic from "assets/img/token/img_recruit-mechanic.png"
import { useScrollAnim } from "components/hooks/hooks"
import React from "react"

const data = [
  "Must have 2 Avarik NFT, both Male & Female.",
  "The cost to breed will vary based on the number of times the Avarik has bred.",
  "We are planning to introduce the Avarik Saga Governance Token ($AVRK), which will be required for breeding additional to the in-game utility token.",
  "We are setting up a model to decide on the duration of breeding with a chance to lower the duration through in-game rewards such as breeding stones and scrolls",
]

const AvaTokenRecruit = () => {
  const [trigger, anim] = useScrollAnim()
  return (
    <section className="recruit-mechanic" ref={trigger}>
      <div className="py-5">
        <div className="content row w-100 m-0 py-3">
          <div className="col-md-6 col-sm-12">
            <h3 className={`title ${anim(1)} mb-4`}>Recruit Mechanic</h3>
            <ol className="recruit-mechanic-list">
              {data.map((item, index) => (
                <li className={anim(index + 2)}>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="col-md-6 col-sm-12 img-wrapper">
            <img
              src={imgRecruitMechanic}
              className={`img-recruit-mechanic ${anim(1)}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AvaTokenRecruit
