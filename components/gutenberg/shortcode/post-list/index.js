import React from "react"

import { Card } from "components/anti/card/card"

import imgDefault from "./assets/bg_default.jpg"

export const ScPostList = ({ pageContext }) => {
  return (
    <section className="py-main sc-post-list">
      <div className="container">
        <div className="row">
          {pageContext.posts.map((item, i) => {
            return (
              <div className="col-6 col-md-4 mb-3" key={`${id}${i}`}>
                <Card
                  variant="boxless"
                  title={item.title}
                  link={`/news/${item.slug}`}
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
