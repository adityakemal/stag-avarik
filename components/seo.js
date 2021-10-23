import React from "react"
import Head from "next/head"
import favicon from "assets/ico/favicon.png"
import appleTouchIcon from "assets/ico/apple-touch-icon.png"

import metaImg from "assets/ico/richlink.jpg"

function SEO({
  description = "Digital experience design & development agency",
  metaImage = metaImg,
  title = "Antikode",
  url = "https://www.antikode.com",
}) {
  return (
    <>
      <Head>
        <title>Sampoerna 234 | {title}</title>
        <link rel="shortcut icon" href={favicon} />
        <link rel="apple-touch-icon" href={appleTouchIcon} />

        <title>Sampoerna 234 | {title}</title>
        <meta name="title" content={`Sampoerna234 | ${title}`} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={`Sampoerna234 | ${title}`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={metaImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={`Sampoerna234 | ${title}`} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={metaImage} />
      </Head>
    </>
  )
}

export default SEO
