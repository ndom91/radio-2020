import React from "react"
import Head from "next/head"

const SEO = ({ title }) => {
  return (
    <Head>
      <html lang="de" />
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#333333" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#333333"></meta>
      <meta
        name="description"
        content="NewTelco GmbH - HR Radio Campaign"
      ></meta>
    </Head>
  )
}

export default SEO
