import React, { useState } from "react"
import Alert from "./Alert"

const Contact = () => {
  const [agbAgree, setAgbAgree] = useState(false)
  const [openSentAlert, setOpenSentAlert] = useState(false)
  const [alert, setAlert] = useState({
    title: "",
    body: "",
  })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  })

  const showAlert = (title, body) => {
    setAlert({
      title,
      body,
    })
    setOpenSentAlert(true)
    setTimeout(() => {
      setOpenSentAlert(false)
    }, 5000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (agbAgree) {
      fetch("/api/contact", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          formData,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code === 200) {
            setFormData({
              name: "",
              email: "",
              phone: "",
              msg: "",
            })
            showAlert("Success", "Info successfully sent!")
          } else {
            showAlert("Error", "Info unsuccessfully sent")
          }
        })
    } else {
      showAlert("AGB", "Sie muessen zuerst die AGB's annehmen.")
    }
  }

  return (
    <section className="text-gray-500 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
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
              <a
                href="https://g.page/Newtelco?share"
                target="_blank"
                rel="noopener noreferrer"
                className="focus:outline-none focus:ring-2 focus:ring-newtelco-500 focus:ring-opacity-50 rounded"
              >
                <p className="leading-relaxed font-thin">
                  Moenchhofstr. 24
                  <br />
                  60326 Frankfurt am Main
                  <br />
                  Germany
                </p>
              </a>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-medium text-white tracking-widest text-sm">
                EMAIL
              </h2>
              <a
                href="mailto:sales@newtelco.de"
                className="text-newtelco-500 font-thin leading-relaxed focus:outline-none  focus:ring-2 focus:ring-newtelco-500 focus:ring-opacity-50 rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                sales@newtelco.de
              </a>
              <h2 className="title-font font-medium text-white tracking-widest text-sm mt-4">
                TELEFON
              </h2>
              <p className="leading-relaxed ">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:0049697500270"
                  className="focus:outline-none font-thin focus:ring-2 focus:ring-newtelco-500 focus:ring-opacity-50 rounded"
                >
                  +49 69 75 00 27 0
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:pl-8 md:ml-auto w-full md:py-4 mt-8 md:mt-0">
          {/* <h2 className="text-white text-lg mb-1 font-medium title-font">
            KONTAKT
          </h2> */}
          <p className="leading-relaxed mb-5 text-gray-400">
            Erhalten Sie eine kostenlose Beratung von Jens Leuchters
          </p>
          <form action="/api/contact" method="post">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-900 rounded border border-gray-700 focus:border-newtelco-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors font-thin"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-900 rounded border border-gray-700 focus:border-newtelco-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors font-thin"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-gray-900 rounded border border-gray-700 focus:border-newtelco-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors font-thin"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400"
              >
                Nachricht
              </label>
              <textarea
                id="msg"
                name="msg"
                value={formData.msg}
                onChange={handleChange}
                className="w-full bg-gray-900 rounded border border-gray-700 focus:border-newtelco-500 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors font-thin"
              ></textarea>
            </div>
            <div className="relative flex flex-wrap justify-between">
              <label htmlFor="agb" className="text-xs text-gray-500">
                <input
                  type="checkbox"
                  id="agb"
                  checked={agbAgree}
                  onChange={() => setAgbAgree(!agbAgree)}
                  className="form-checkbox h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-offset focus:ring focus:ring-newtelco-500 focus:ring-opacity-50 text-newtelco-500 mr-1 bg-gray-400"
                />
                Ich erlaube NewTelco meine persönlichen Daten zu speichern und
                zu verarbeiten und stimme den Bestimmungen der{" "}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-newtelco-500 focus:outline-none focus:ring focus:ring-newtelco-500 focus:ring-opacity-50 rounded underline-none hover:underline transitions-all"
                >
                  Datenschutzrichtlinien
                </a>{" "}
                zu.
              </label>
              <div className="flex justify-between mt-4 w-full">
                <button
                  action="submit"
                  onClick={(e) => {
                    e.preventDefault()
                    handleSubmit()
                  }}
                  className="text-white bg-newtelco-500 border-0 py-3 px-6 focus:outline-none focus:ring-2 focus:ring-newtelco-500 focus:ring-opacity-50 hover:bg-newtelco-600 rounded text-lg transition-colors w-1/2 mr-2"
                >
                  Ich möchte Hilfe
                </button>
                <button
                  action="submit"
                  onClick={(e) => {
                    e.preventDefault()
                    handleSubmit()
                  }}
                  className="text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none focus:ring-2 focus:ring-newtelco-500 focus:ring-opacity-50 hover:bg-newtelco-600 rounded text-lg transition-colors w-1/2 ml-2"
                >
                  Rufen Sie uns an
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {openSentAlert && <Alert title={alert.title} body={alert.body} />}
    </section>
  )
}

export default Contact
