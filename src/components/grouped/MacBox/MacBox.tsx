import "./MacBox.scss";
import { useState } from "react";
import { macbook } from "../../../assets";

interface MacBoxProps {
  video?: string[];
  desc?: string[];
}
function MacBox({ video, desc }: MacBoxProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [vidx, setVidx] = useState(0);

  const playVideo = (idx: number) => {
    setVidx(idx);
    console.log("Playing video", idx, vidx, video?.[vidx]);
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
              No videos available. It will be uploaded soon.
              <br />
              Check the photos and code in my{" "}
              <a href="https://github.com/jeff4121336" target="_blank">
                GitHub
              </a>{" "}
              instead!
            </div>
          ) : isPlaying ? (
            <>
              <iframe
                src={`https://www.youtube.com/embed/${video[vidx]}?rel=0&autoplay=1`}
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                key={vidx}
              ></iframe>
              <button className="macbox-play" onClick={hideVideo}>
                ▶ Change Video
              </button>
            </>
          ) : (
            <>
              <div className="mcontainer">
                {desc?.map((d, idx) => (
                  <>
                    <button key={video[idx]} onClick={() => playVideo(idx)}>
                      {" "}
                      ▶ Play {idx + 1}: {d}{" "}
                    </button>{" "}
                    <br />
                  </>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default MacBox;
