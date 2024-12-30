import MacBox from "../MacBox/MacBox";
import { useEffect, useState } from "react";
import "./ProjectBox.scss";
interface ProjectBoxProps {
  title: string;
  children: React.ReactNode;
  video?: string[];
  desc?: string[];
}

function ProjectBox({ title, children, video, desc }: ProjectBoxProps) {
  return (
    <>
      <div className="project container-xxl">
        <div className="row">
          <div className="col-8 text main-text">
            <div> {title} </div>
          </div>
          <div className="col btn">
            <button className="navMacboxBtn"> L </button>
            <button className="navMacboxBtn"> R </button>
          </div>
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
