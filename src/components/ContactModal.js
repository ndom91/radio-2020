import React, { useState } from "react"
import Image from "next/image"
import Alert from "./Alert"

const ContactModal = ({ toggleModal }) => {
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
            toggleModal(false)
          } else {
            showAlert("Error", "Info unsuccessfully sent")
          }
        })
    } else {
      showAlert("AGB", "Sie muessen zuerst die AGB's annehmen.")
    }
  }

  return (
    <section className="text-gray-500 body-font fixed z-50 top-0 left-0 w-full h-full items-center justify-center flex motion-safe:animate-fade bg-gray-900 bg-opacity-40">
      <div className="w-5/6 lg:w-2/3 md:w-1/2 md:h-5/6 lg:h-2/3 container mx-auto flex bg-gray-400 rounded-lg justify-center relative shadow-2xl max-w-screen-md">
        <button
          className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-gray-600 text-sm z-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded"
          onClick={() => toggleModal(false)}
        >
          <svg
            className="fill-current text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
          <span className="text-sm">(Esc)</span>
        </button>
        <div className="flex md:ml-auto w-full ">
          <div className="w-1/2 bg-gray-200 p-12 rounded-l-lg hidden lg:flex flex-col justify-around">
            <Image
              src="/img/newtelco_logo.png"
              height="63"
              width="512"
              layout="intrinsic"
              className="max-w-md"
              style={{ maxWidth: "276px" }}
            />
            <Image
              src="/img/servers.png"
              height="437"
              width="400"
              layout="intrinsic"
            />
          </div>
          <div className="mx-auto w-5/6 p-8 lg:w-1/2 lg:p-8 flex flex-col justify-around">
            <h2 className="text-gray-700 text-xl md:text-md mr-4 mb-1 font-medium title-font">
              Erhalten Sie eine kostenlose Beratung von Jens Leuchters
            </h2>
            <form action="/api/contact" method="post">
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-200 rounded border border-gray-500 focus:border-newtelco-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-200 rounded border border-gray-500 focus:border-newtelco-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-700"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-200 rounded border border-gray-500 focus:border-newtelco-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-700"
                >
                  Nachricht
                </label>
                <textarea
                  id="msg"
                  name="msg"
                  value={formData.msg}
                  onChange={handleChange}
                  className="w-full bg-gray-200 rounded border border-gray-500 focus:border-newtelco-500 h-24 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors"
                ></textarea>
              </div>
              <div className="relative flex flex-wrap justify-between">
                <button
                  action="submit"
                  onClick={(e) => {
                    e.preventDefault()
                    handleSubmit()
                  }}
                  className="text-white bg-newtelco-500 border-0 py-2 px-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 hover:bg-newtelco-600 rounded text-lg transition-colors"
                >
                  Absenden
                </button>
                <p className="text-xs text-gray-600 my-4">
                  <input
                    type="checkbox"
                    checked={agbAgree}
                    onChange={() => setAgbAgree(!agbAgree)}
                    className="form-checkbox h-4 w-4 rounded border-gray-300 focus:outline-none focus:ring-offset focus:ring focus:ring-newtelco-500 focus:ring-opacity-50 text-newtelco-500 mr-0.5 bg-gray-100"
                  />
                  Ich bin mit den{" "}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-newtelco-500 focus:outline-none focus:ring focus:ring-newtelco-500 focus:ring-opacity-50 rounded underline-none hover:underline transitions-all"
                  >
                    AGB's
                  </a>{" "}
                  einverstanden.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      {openSentAlert && <Alert title={alert.title} body={alert.body} />}
    </section>
  )
}

export default ContactModal
