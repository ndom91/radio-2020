import React, { useEffect, useState } from "react"
import Image from "next/image"

const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

const Hero = () => {
  const [heroText, setHeroText] = useState({})
  async function fetchHero() {
    const entries = await client.getEntry("4NtJeBncecmyvJi4OrY0w")
    if (entries.fields) return entries.fields
    console.log(`Error getting Entries for ${entries.sys.type}.`)
  }

  useEffect(() => {
    async function getFields() {
      const heroItems = await fetchHero()
      console.log(heroItems)
      heroItems.title && setHeroText(heroItems)
    }
    getFields()
  }, [])

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
              src="/jleuchters-transparent.png"
            />
            <div className="mx-auto h-1 w-52 sm:w-96 bg-newtelco-500 rounded motion-safe:animate-fadeIn -mt-2"></div>
            <div className="mt-4 md:mr-8 motion-safe:animate-fadeIn flex flex-col justify-center items-center">
              <h2 className="text-3xl text-gray-200 font-normal">
                Jens Leuchters
              </h2>
              <h4 className="text-xl text-gray-200 ">Managing Director</h4>
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mt-20 md:mt-0">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-semibold text-white">
              {heroText.title}
            </h1>
            <p className="mb-8 leading-relaxed">{heroText.subtitle}</p>
            <a
              href="mailto:sales@newtelco.de?cc=jleuchters@newtelco.de&subject=Habe%20von%20Ihnen%20bei%20HR%20gehoert!%20Koennen%20Sie%20uns%20helfen%3F&body=Hi%20Team%2C%0D%0A%0D%0A..."
              alt="Mail To sales@newtelco.de"
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none focus:ring focus:ring-white focus:ring-opacity-70 rounded"
            >
              <button
                className="inline-flex text-white bg-newtelco-500 border-0 py-4 px-6 focus:outline-none hover:bg-newtelco-600 rounded text-lg transition transition-colors duration-200 ease-in-out"
                tabIndex="-1"
              >
                {heroText.ctaButton1}
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
