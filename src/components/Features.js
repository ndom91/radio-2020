import React, { useEffect, useState } from "react"

const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

const Support = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height="64"
    width="64"
    stroke="currentColor"
    className="text-newtelco-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const Clock = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="64"
    width="64"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="text-newtelco-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const Flexible = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    height="64"
    width="64"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="text-newtelco-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
    />
  </svg>
)

const Features = () => {
  const [features, setFeatures] = useState([])
  async function fetchFeatures() {
    const entries = await client.getEntry("32jrBqN5HwaXxvwaYIff0Y")
    // console.log(entries);
    if (entries.fields) return entries.toPlainObject()
    console.log(`Error getting Entries for ${entries.sys.type}.`)
  }

  useEffect(() => {
    async function getFields() {
      const feat = await fetchFeatures()
      console.log(feat.fields.features)
      setFeatures(feat.fields.features)
    }
    getFields()
  }, [])

  return (
    <section className="text-gray-500 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Features
            </h1>
            <div className="h-1 w-20 bg-newtelco-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {Array.isArray(features) &&
            features
              .sort((a, b) => {
                return a.fields.order - b.fields.order
              })
              .map((feature) => {
                console.log(feature)
                return (
                  <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                    <div className="border-4 border-gray-700 bg-gray-700 bg-opacity-50 px-4 py-6 rounded-lg h-full flex flex-col justify-around items-center">
                      {feature.fields.title === "24/7 Support" ? (
                        <Support />
                      ) : feature.fields.title === "Null Aufwand" ? (
                        <Clock />
                      ) : (
                        <Flexible />
                      )}
                      <h2 className="title-font font-thin text-3xl text-white my-4">
                        {feature.fields.title}
                      </h2>
                      <p className="leading-relaxed text-center font-medium">
                        {feature.fields.body.content[0].content[0].value}
                      </p>
                    </div>
                  </div>
                )
              })}
        </div>
      </div>
    </section>
  )
}

export default Features
