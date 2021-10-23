import React from "react"

import { Card } from "components/anti/card/card"

import imgDefault from "assets/img/common/bg_default.jpg"

export const ScProjectList = ({ pageContext }) => {
  return (
    <section className="py-main sc-project-list">
      <div className="container">
        <div className="row">
          {pageContext.projects.map((item, i) => {
            return (
              <div className="col-6 col-md-4 mb-3" key={i}>
                <Card
                  variant="boxless"
                  title={item.title}
                  link={`/project/${item.slug}`}
                  text={
                    (item.excerpt && item.excerpt) ||
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                  }
                  // prettier-ignore
                  img={(item.featuredImage && item.featuredImage.sourceUrlSharp.childImageSharp.fluid) || imgDefault}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
