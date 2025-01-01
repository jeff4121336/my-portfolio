import MacBox from "../MacBox/MacBox";
import { useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import "./ProjectBox.scss";
interface ProjectBoxProps {
  title: string;
  children: React.ReactNode;
  video?: string[];
  desc?: string[];
}

function ProjectBox({ title, children, video, desc }: ProjectBoxProps) {
  const projectRef = useRef<HTMLDivElement>(null);

  const fadeLeftOptions = {
    root: null,
    rootmargin: "0px",
    boxElement: projectRef.current,
  };

  const fadeLeftCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        !entry.target.classList.contains("animate__fadeInLeft")
      ) {
        entry.target.classList.add("animate__fadeInLeft");
      }
    });
  };

  const projectAnimateRef = useIntersectionObserver(
    fadeLeftCallback,
    fadeLeftOptions,
    0.2
  );

  return (
    <>
      <div
        className="project container-xxl animate__animated"
        ref={projectAnimateRef}
      >
        <div className="row">
          <div className="col-8 text main-text">
            <div> {title} </div>
          </div>
          {/* <div className="col button">
            <button
              disabled={video == null || video?.length === 1}
              className="navMacboxBtn"
            >
              L
            </button>
            <button
              disabled={video == null || video?.length === 1}
              className="navMacboxBtn"
            >
              R
            </button>
          </div> */}
        </div>
        <div className="row">
          <div className="col sub-text"> {children} </div>
          <div className="col macbox">
            <MacBox video={video} desc={desc}></MacBox>
          </div>
        </div>
        <br />
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#FCF2E5",
          height: "1.0vh",
        }}
      />
    </>
  );
}

export default ProjectBox;
