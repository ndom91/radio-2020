import React from "react"

const Alert = ({ title, body }) => {
  return (
    <div
      className="fixed top-10 right-10 bg-newtelco-500 border-l-4 border-newtelco-700 text-gray-200 p-4 motion-safe:animate-fade"
      role="alert"
    >
      <p className="font-bold">{title}</p>
      <p>{body}</p>
    </div>
  )
}

export default Alert
