import React from "react"

import { Cover } from "components/anti/cover/cover"
import { useScrollAnim } from "components/hooks/hooks"

const CommonCover = () => {
  const [trigger, anim] = useScrollAnim()

  return (
    <section className="sc-common-cover" ref={trigger}>
      <Cover
        theme="dark"
        label="Label"
        title="Lorem Ipsum"
        text="Lorem ipsum dolor siamet adipisicin undit"
      />
    </section>
  )
}

export default CommonCover
