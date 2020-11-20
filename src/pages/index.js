import React, { useEffect, useState } from "react"
import Head from "next/head"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Player from "../components/Player"
import Features from "../components/Features"
import Steps from "../components/Steps"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import { useCookie } from "react-use"

function HomePage() {
  const streamUrl = "radioSpot.mp3"
  const [value, updateCookie, deleteCookie] = useCookie("gdpr-banner-dev")
  const [acceptedGDPR, setAcceptedGDPR] = useState(false)
  const [open, setOpen] = useState(false)

  const GA4Code = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-G5PLDMEVWF');
  `

  const setupGA = () => {
    const a = document.createElement("script")
    a.type = "text/javascript"
    a.async = true
    a.innerHTML = GA4Code
    const b = document.createElement("script")
    b.type = "text/javascript"
    b.src = "https://www.googletagmanager.com/gtag/js?id=G-G5PLDMEVWF"
    document.head.appendChild(b)
    document.head.appendChild(a)
  }

  useEffect(() => {
    if (value && JSON.parse(value)) {
      if (JSON.parse(value).accepted === true) {
        // setAcceptedGDPR(true)
        setupGA()
      }
    } else {
      setOpen(true)
    }
  }, [])

  const hideBanner = (choice) => {
    if (choice === "accept") {
      updateCookie(JSON.stringify({ accepted: true }))
      // setAcceptedGDPR(true)
      setupGA()
    } else if (choice === "decline") {
      updateCookie(JSON.stringify({ accepted: false }))
    }
    setOpen(false)
  }

  return (
    <>
      {/* {acceptedGDPR && (
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-G5PLDMEVWF"
          ></script>
          <script>
            {" "}
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)} gtag('js', new Date()); gtag('config',
            'G-G5PLDMEVWF');{" "}
          </script>
        </Head>
      )} */}
      <SEO title="Newtelco Radio" />
      <Header />
      {open && <Banner hide={hideBanner} />}
      <Hero />
      <Player
        streamUrl={streamUrl}
        preloadType="auto"
        trackTitle="Newtelco HR Radio Spot"
      />
      <Features />
      <Steps />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage
