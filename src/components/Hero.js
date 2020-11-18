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
      heroItems.title && setHeroText(heroItems);
    }
    getFields();
  }, []);

  return (
    <div>
      <section className="text-gray-500 body-font">
        <div className="container mx-auto mb-20 flex px-5 pt-24 md:flex-row flex-col items-center">
          <div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 translateY-jens"
            style={{ transformStyle: "preserve-3d", perspective: "400px" }}
          >
            <Image
              className="object-cover object-center rounded filter-jens translateY-jens  motion-safe:animate-fadeIn"
              alt="hero"
              layout="intrinsic"
              priority
              width="480"
              height="600"
              src="/jleuchters-transparent.png"
              // src="/jleuchters.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-semibold text-white">
              {heroText.title}
            </h1>
            <p className="mb-8 leading-relaxed">{heroText.subtitle}</p>
            <a
              href="mailto:sales@newtelco.de?cc=jleuchters@newtelco.de&?subject=Habe%20von%20Ihnen%20bei%20HR%20gehoert!%20Koennen%20Sie%20uns%20helfen%3F&body=Hi%20Team%2C%0D%0A%0D%0A..."
              alt="Mail To sales@newtelco.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex text-white bg-newtelco-500 border-0 py-4 px-6 focus:outline-none hover:bg-newtelco-600 rounded text-lg transition transition-colors duration-200 ease-in-out">
                {heroText.ctaButton1}
              </button>
            </a>
          </div>
        </div>
        {/* <svg
          className="hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="5%" stopColor="#0e0e0e" />
              <stop offset="35%" stopColor="#181818" stopOpacity="0.5" />
              <stop offset="95%" stopColor="#222222" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient)"
            d="M0,160L26.7,160C53.3,160,107,160,160,176C213.3,192,267,224,320,229.3C373.3,235,427,213,480,181.3C533.3,149,587,107,640,112C693.3,117,747,171,800,208C853.3,245,907,267,960,240C1013.3,213,1067,139,1120,138.7C1173.3,139,1227,213,1280,250.7C1333.3,288,1387,288,1413,288L1440,288L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
          ></path>
        </svg> */}
      </section>
    </div>
  );
};

export default Hero;
