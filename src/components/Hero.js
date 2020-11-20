import React, { useEffect, useState } from "react"
import Head from "next/head"
import Image from "next/image"
import ContactModal from "./ContactModal"
import { useKeyPressEvent } from "react-use"

const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

const Hero = () => {
  const [heroText, setHeroText] = useState({})
  const [openModal, setOpenModal] = useState(false)

  async function fetchHero() {
    const entries = await client.getEntry("4NtJeBncecmyvJi4OrY0w")
    if (entries.fields) return entries.fields
    console.log(`Error getting Entries for ${entries.sys.type}.`)
  }

  useEffect(() => {
    async function getFields() {
      const heroItems = await fetchHero()
      heroItems.title && setHeroText(heroItems)
    }
    getFields()
  }, [])

  const toggleModal = (val) => {
    setOpenModal(val)
    if (val) {
      window.gtag("event", "screen_view", { screen_name: "contact-modal" })
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }

  useKeyPressEvent("Escape", () => toggleModal(false))

  return (
    <div>
      <section className="text-gray-500 body-font">
        <div className="container mx-auto mb-20 flex px-5 pt-4 md:pt-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto relative">
            <Image
              className="object-cover object-center rounded filter-jens   motion-safe:animate-fadeIn"
              alt="hero"
              layout="intrinsic"
              priority
              width="480"
              height="600"
              src="/img/jleuchters-transparent.png"
            />
            <div className="mx-auto h-1 w-52 sm:w-96 bg-newtelco-500 rounded motion-safe:animate-fadeIn -mt-2"></div>
            <div className="mt-4 md:mr-8 motion-safe:animate-fadeIn flex flex-col justify-center items-center">
              <h2 className="text-3xl text-gray-200 font-semibold">
                Jens Leuchters
              </h2>
              <h4 className="text-xl text-gray-200 font-thin">
                Managing Director
              </h4>
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mt-20 md:mt-0">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-semibold text-white">
              {heroText.title}
            </h1>
            <p className="mb-8 leading-relaxed max-w-xl">{heroText.subtitle}</p>
            <button
              className="inline-flex text-white bg-newtelco-500 border-0 py-4 px-6 focus:outline-none hover:bg-newtelco-600 rounded text-lg transition transition-colors duration-200 ease-in-out focus:outline-none focus:ring focus:ring-white focus:ring-opacity-70 rounded"
              onClick={() => toggleModal(true)}
            >
              {heroText.ctaButton1}
            </button>
          </div>
        </div>
      </section>
      {openModal && (
        <>
          <Head>
            <html className="overflow-hidden" />
          </Head>
          <ContactModal toggleModal={toggleModal} />
        </>
      )}
    </div>
  )
}

export default Hero
