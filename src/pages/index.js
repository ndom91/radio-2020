import React, { useEffect, useState } from "react"
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
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (value && JSON.parse(value)) {
      value.accepted === true
      // load GA
    } else {
      setOpen(true)
    }
  }, [])

  const hideBanner = (choice) => {
    if (choice === "accept") {
      updateCookie(JSON.stringify({ accepted: true }))
    } else if (choice === "decline") {
      updateCookie(JSON.stringify({ accepted: false }))
    }
    setOpen(false)
  }

  return (
    <>
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
