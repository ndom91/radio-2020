import React from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = ({ streamUrl, trackTitle }) => {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-4">
        <h2 className="text-xs text-newtelco-500 tracking-widest font-medium title-font mb-1">
          HR + NEWTELCO
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          Listen to the Spot
        </h1>
      </div>
      <div className="p-4 mb-3 mt-1 flex justify-between text-white bg-gray-700 rounded-md w-5/6 md:w-2/3 lg:w-1/3 m-auto ">
        <AudioPlayer
          src={streamUrl}
          customAdditionalControls={[]}
          customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
          onPlay={(e) => console.log("onPlay")}
          // other props here
        />
      </div>
    </div>
  );
};

export default Player;
