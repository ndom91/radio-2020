import React, { useEffect, useState } from "react";

const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const Features = () => {
  const [features, setFeatures] = useState({});
  async function fetchFeatures() {
    const entries = await client.getEntry("32jrBqN5HwaXxvwaYIff0Y");
    // console.log(entries);
    if (entries.fields) return entries.toPlainObject();
    console.log(`Error getting Entries for ${entries.sys.type}.`);
  }

  useEffect(() => {
    async function getFields() {
      const feat = await fetchFeatures();
      // console.log(feat);
      setFeatures(feat.fields.features);
    }
    getFields();
  }, []);

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
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {features &&
            features
              .sort((a, b) => {
                return a.fields.order - b.fields.order;
              })
              .map((feature) => {
                console.log(feature);
                return (
                  <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="bg-gray-700 p-6 rounded-lg">
                      <img
                        className="h-40 rounded w-full object-cover object-center mb-6"
                        src={feature.fields?.image.fields.file.url || ""}
                        alt="content"
                      />
                      <h3 className="tracking-widest text-newtelco-500 text-xs font-medium title-font">
                        SUBTITLE
                      </h3>
                      <h2 className="text-lg text-white font-medium title-font mb-4">
                        {feature.fields.title}
                      </h2>
                      <p className="leading-relaxed text-base">
                        Fingerstache flexitarian street art 8-bit waistcoat.
                        Distillery hexagon disrupt edison bulbche.
                      </p>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default Features;
