import React from "react"

import { CoverContent } from "components/anti/cover/cover"
import { Link } from "components/anti/link/link"

export const AcfDownload = ({ data }) => {
  const block = data && data.download

  return (
    <CoverContent
      theme="dark"
      img={block.bgImg && block.bgImg.sourceUrlSharp.childImageSharp.fluid}
      imgOverlay={block.bgImgOverlay}
      contentMaxWidth="mw-100"
      className={`acf-download ${data.attributes.className || ""}`}
    >
      <div className="row">
        <div className="col-text col-md-6 col-lg-7">
          {block.title && <h2 className="h2">{block.title}</h2>}
          {block.text && <p>{block.text}</p>}
          <div className="btn-group">
            {block.buttons.map((button, i) => {
              return (
                <Link to={button.link && button.link.url} key={i}>
                  <img
                    src={button.img && button.img.sourceUrl}
                    className="img-fluid"
                    alt={button.img.altText || button.img.title || "Download"}
                  />
                </Link>
              )
            })}
          </div>
        </div>
        <div className="col-img order-md-first col-md-6 col-lg-5">
          {block.img && (
            <img
              src={block.img.sourceUrl}
              className="img-fluid"
              alt={block.img.altText || block.img.title || "Download"}
            />
          )}
        </div>
      </div>
    </CoverContent>
  )
}
