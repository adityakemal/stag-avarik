import React from "react"
import Head from "next/head"

function SEO({
  description = "The journey of the 8,888 generative NFT personas of Knights, Wizards, and Marksmen originated from over 400+ uniquely hand drawn traits in 4 clashing factions.",
  title = "Avarik Saga",
  url = "https://www.avariksaga.com",
}) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="language" content="english" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta name="robots" content="index,follow" />

        <title>{title} | Avarik Saga</title>
        <link rel="shortcut icon" href="/icons/favicon.png" />
        <link rel="apple-touch-icon" href="/icons/apple-icon.png" />
        <meta name="title" content={`${title} | Avarik Saga`} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={`${title} | Avarik Saga`} />
        <meta property="og:description" content={description} />
        <meta name="og:image" content={`${url}/icons/richlink.jpg`} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={`${title} | Avarik Saga`} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={`${url}/icons/richlink.jpg`} />

        <meta name="msapplication-TileColor" content="#DBAB3E" />
        <meta
          name="msapplication-TileImage"
          content="/icons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#DBAB3E" />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/icons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/icons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/icons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/icons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/icons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/icons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/manifest.json" />
      </Head>
    </>
  )
}

export default SEO
