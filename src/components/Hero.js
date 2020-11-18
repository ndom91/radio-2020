import React, { useEffect, useState } from "react";
import Image from "next/image";

const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const Hero = () => {
  const [heroText, setHeroText] = useState({});
  async function fetchHero() {
    const entries = await client.getEntry("4NtJeBncecmyvJi4OrY0w");
    if (entries.fields) return entries.fields;
    console.log(`Error getting Entries for ${entries.sys.type}.`);
  }

  useEffect(() => {
    async function getFields() {
      const heroItems = await fetchHero();
      console.log(heroItems);
      heroItems.fields && setHeroText(heroItems.fields);
    }
    getFields();
  }, []);

  return (
    <div>
      <section class="text-gray-500 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
            class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
            style={{ transformStyle: "preserve-3d", perspective: "400px" }}
          >
            <Image
              class="object-cover object-center rounded filter-jens"
              alt="hero"
              layout="intrinsic"
              priority
              width="480"
              height="600"
              src="/jleuchters-transparent.png"
              // src="/jleuchters.jpg"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              {heroText.title}
            </h1>
            <p class="mb-8 leading-relaxed">{heroText.subtitle}</p>
            <div class="flex w-full md:justify-start justify-center items-end">
              <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                <label for="hero-field" class="leading-7 text-sm text-gray-400">
                  Email
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  class="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button class="inline-flex text-white bg-newtelco-500 border-0 py-2 px-6 focus:outline-none hover:bg-newtelco-600 rounded text-lg transition transition-colors duration-200 ease-in-out">
                {heroText.ctaButton1}
              </button>
            </div>
            <p class="text-sm mt-2 text-gray-600 mb-8 w-full">
              {heroText.heroWarning}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
