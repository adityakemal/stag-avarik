import React from "react"
import Head from "next/head"
import favicon from "assets/ico/favicon.png"
import appleTouchIcon from "assets/ico/apple-touch-icon.png"

import metaImg from "assets/ico/richlink.jpg"

function SEO({
  description = "The journey of the 8,888 generative NFT personas of Knights, Wizards, and Marksmen originated from over 400+ uniquely hand drawn traits in 4 clashing factions.",
  metaImage = metaImg,
  title = "Avarik Saga",
  url = "https://www.avariksaga.com",
}) {
  return (
    <>
      <Head>
        <title>{title} | Avarik Saga</title>
        <link rel="shortcut icon" href={favicon} />
        <link rel="apple-touch-icon" href={appleTouchIcon} />

        <title>{title} | Avarik Saga</title>
        <meta name="title" content={`${title} | Avarik Saga`} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={`${title} | Avarik Saga`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={metaImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={`${title} | Avarik Saga`} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={metaImage} />
      </Head>
    </>
  )
}

export default SEO
