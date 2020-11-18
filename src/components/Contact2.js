import React from "react";

const Contact = () => {
  return (
    <section className="text-gray-500 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=NewTelco+GmbH+Frankfurt&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
          ></iframe>
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded-md lg:w-2/3">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-medium text-white tracking-widest text-sm">
                ADRESSE
              </h2>
              <p className="leading-relaxed">
                Moenchhofstr. 24
                <br />
                60326 Frankfurt am Main
                <br />
                Germany
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-medium text-white tracking-widest text-sm">
                EMAIL
              </h2>
              <a className="text-newtelco-500 leading-relaxed">
                sales@newtelco.de
              </a>
              <h2 className="title-font font-medium text-white tracking-widest text-sm mt-4">
                TELEFON
              </h2>
              <p className="leading-relaxed">+49 69 75 00 27 0</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white text-lg mb-1 font-medium title-font">
            KONTAKT
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <div className="relative mb-4">
            <label for="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-newtelco-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-newtelco-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="message" className="leading-7 text-sm text-gray-400">
              Nachricht
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-newtelco-500 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-newtelco-500 border-0 py-2 px-6 focus:outline-none hover:bg-newtelco-600 rounded text-lg">
            Send
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
