import React from "react"

import { Button } from "components/anti"
import { useScrollAnim } from "components/hooks/hooks"

const HomeAbout = () => {
  const [trigger, anim] = useScrollAnim()

  return (
    <section className="sc-home-about py-main" ref={trigger}>
      <div className="container">
        <h3 className={`caption ${anim(1)}`}>Caption</h3>
        <h2 className={`h1 ${anim(2)}`}>Title</h2>
        <p className={`${anim(3)}`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          eius quis fugit maxime quasi, pariatur fugiat dolore neque! Tempora,
          ea laborum veniam voluptate maiores culpa enim tempore nobis
          aspernatur officia?
        </p>
        <Button variant="primary" className={anim(4)} link="/wow">
          Test
        </Button>
      </div>
    </section>
  )
}

export default HomeAbout
