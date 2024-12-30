import "./MacBox.scss";
// import Slider from "../../ui/Slider/Slider";
import { React, useState } from "react";
import { macbook } from "../../../assets";
import { static_noise } from "../../../assets";

interface MacBoxProps {
  video?: string[];
  desc?: string[];
}
function MacBox({ video, desc }: MacBoxProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };

  const hideVideo = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <div className="container macbox-container">
        <div className="row">
          <img className="macbox-image" src={macbook} alt="macbook" />
          {video == null ? (
            <div className="overlay">
              {" "}
              No videos available.
              <br />
              Check the photos and code in my{" "}
              <a href="https://github.com/jeff4121336">GitHub</a> instead!
            </div>
          ) : isPlaying ? (
            <>
              {video.map((vid) => (
                <iframe
                  src={`https://www.youtube.com/embed/${vid}?rel=0&autoplay=1`}
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ))}
              <button className="macbox-play" onClick={hideVideo}>
                ▶ Hide Video(s)
              </button>
            </>
          ) : (
            <>
              <div className="mcontainer">
                <div className="macbox-play" onClick={playVideo}>
                  <button> ▶ Show Video(s) </button> <br />
                  {desc?.map((d, idx) => `${idx + 1}: ${d}`)}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default MacBox;
