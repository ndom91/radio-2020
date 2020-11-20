import React from "react"
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"

const Player = ({ streamUrl, trackTitle }) => {
  return (
    <div className="container px-5 py-24 mx-auto relative">
      <div className="flex flex-col text-center w-full mb-4 z-30">
        <h2 className="text-xs text-newtelco-500 tracking-widest font-medium title-font mb-1 z-30">
          HR + NEWTELCO
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white z-30">
          Listen to the Spot
        </h1>
      </div>
      <div className="p-4 w-5/6 sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto mb-3 mt-1 flex justify-between text-white z-40">
        <AudioPlayer
          src={streamUrl}
          customAdditionalControls={[]}
          customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
          // onPlay={(e) => console.log("onPlay")}
          className="z-40 border-4 border-gray-300 rounded-md p-4"
        />
      </div>
      <div className="-left-4 sm:-left-6 md:-left-1/4 top-4 w-130 transform -rotate-3 -skew-y-3 h-96 absolute bg-gray-700 z-auto"></div>
    </div>
  )
}

export default Player
