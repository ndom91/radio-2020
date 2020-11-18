import React from "react";
import { PlayButton, Timer } from "react-soundplayer/components";
import { withCustomAudio } from "react-soundplayer/addons";

const Player = ({ streamUrl }) => {
  const trackTitle = "Newtelco HR Radio Spot";
  return (
    <div className="p-4 mb-3 mt-1 flex justify-between text-white bg-gray-700 rounded-md w-1/3 m-auto shadow-lg-green">
      <PlayButton
        className="h-5 w-5 mr-4"
        onPlayClick={() => {
          console.log("play button clicked!");
        }}
        trackTitle={trackTitle}
        streamUrl={streamUrl}
      />
      <h2 className="custom-player-title">{trackTitle}</h2>
      <Timer
        className="custom-player-timer"
        streamUrl={streamUrl}
        trackTitle={trackTitle}
      />
    </div>
  );
};

export default withCustomAudio(Player);
