import React from "react"

export const AcfHeader = ({ data }) => {
  const block = data && data.header

  return (
    <section
      className={`acf-header py-main ${data.attributes.className || ""}`}
    >
      <div className="container mw-lg">
        <h1 className="h1">{block.title}</h1>
      </div>
    </section>
  )
}
