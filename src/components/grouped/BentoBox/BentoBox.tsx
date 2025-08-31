import Slider from "../../ui/AnimatedSlider/ASlider";
import { useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import "./BentoBox.scss";

import {
  icon_1,
  icon_2,
  more_1,
  more_2,
  project_1,
  project_2,
  tech_01_html,
  tech_02_css,
  tech_03_js,
  tech_04_react,
  tech_05_jquery,
  tech_06_php,
  tech_07_python,
  tech_08_anaconda,
  tech_09_github,
  tech_10_figma,
  tech_11_c,
  tech_12_cplusplus,
  tech_13_csharp,
  tech_14_java,
  tech_15_aws,
  tech_16_ubuntu,
  tech_17_mysql,
  tech_18_mongodb,
  tech_19_opengl,
  tech_20_docker,
} from "../../../assets";

function BentoBox() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);

  const fadeInOptions1 = {
    root: null,
    rootmargin: "0px",
    boxElement: row1Ref.current,
  };

  const fadeInOptions2 = {
    root: null,
    rootmargin: "0px",
    boxElement: row2Ref.current,
  };

  const fadeInOptions3 = {
    root: null,
    rootmargin: "0px",
    boxElement: row3Ref.current,
  };

  const fadeInCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        !entry.target.classList.contains("animate__fadeInUp")
      ) {
        entry.target.classList.add("animate__fadeInUp");
      }
    });
  };

  const row1_AnimateRef = useIntersectionObserver(
    fadeInCallback,
    fadeInOptions1,
    0.15
  );
  const row2_AnimateRef = useIntersectionObserver(
    fadeInCallback,
    fadeInOptions2,
    0.15
  );
  const row3_AnimateRef = useIntersectionObserver(
    fadeInCallback,
    fadeInOptions3,
    0.15
  );

  return (
    <>
      <div className="container-fluid about">
        <div className="about-mobile-row ">
          I’m Jeff. <br /> <br /> Information Engineering Major and Computer
          Science Minor at CUHK. <br /> <br /> I cherish every satisfaction that
          comes at the end.
        </div>
        <div className="about-mobile-row ">
          <ul>
            I'm interested in ... <br />
            <br />
            <li>Web/Software/Game development</li>
            <li>Deep Learning Models</li>
            <li>Data analysis</li>
            <li>UI/UX</li>
          </ul>
        </div>
        <div className="about-mobile-row ">
          <div className="container slider">
            <div className="row">
              <div className="title">My Tech Stack</div>
            </div>
            <div className="slider-row">
              <div className="row">
                <Slider
                  reverse={true}
                  width="60px"
                  height="60px"
                  images={[
                    tech_01_html,
                    tech_02_css,
                    tech_03_js,
                    tech_04_react,
                    tech_05_jquery,
                    tech_06_php,
                    tech_07_python,
                    tech_09_github,
                    tech_10_figma,
                  ]}
                />
              </div>
              <div className="row">
                <Slider
                  reverse={false}
                  width="60px"
                  height="60px"
                  images={[
                    tech_11_c,
                    tech_08_anaconda,
                    tech_14_java,
                    tech_15_aws,
                    tech_16_ubuntu,
                    tech_17_mysql,
                    tech_18_mongodb,
                    tech_19_opengl,
                    tech_20_docker,
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl about-desktop">
        <div
          className="intro1 row pt-5 pb-2 animate__animated"
          ref={row1_AnimateRef}
        >
          <div className="col rectangle">
            <p>
              I’m Jeff. <br /> <br /> Information Engineering Major and Computer
              Science Minor at CUHK. <br /> <br /> I cherish every satisfaction
              that comes at the end.
            </p>
          </div>
          <div className="col-2 square">
            <div className="flipFlexBox">
              <div className="flipFlexBoxInner">
                <div className="front">
                  <img className="fleximg" src={icon_1} alt="icon-front" />
                </div>
                <div className="back">
                  <img className="fleximg" src={icon_2} alt="icon-back" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="intro2 row pb-2 animate__animated"
          ref={row2_AnimateRef}
        >
          <div className="col-2 square">
            <div className="flipFlexBox">
              <div className="flipFlexBoxInner">
                <div className="front">
                  <img className="fleximg" src={more_1} alt="more-front" />
                </div>
                <div className="back">
                  <img className="fleximg" src={more_2} alt="more-back" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 square">
            <div className="flipFlexBox">
              <div className="flipFlexBoxInner">
                <div className="front">
                  <img className="fleximg" src={project_1} alt="more-front" />
                </div>
                <div className="back">
                  <img className="fleximg" src={project_2} alt="more-back" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col rectangle"
            style={{ justifyContent: "flex-start" }}
          >
            <ul>
              I'm interested in ... <br />
              <br />
              <li>Web/Software/Game development</li>
              <li>Deep Learning Models</li>
              <li>Data analysis</li>
              <li>UI/UX</li>
            </ul>
          </div>
        </div>
        <div
          className="intro3 row pb-5 animate__animated"
          ref={row3_AnimateRef}
        >
          <div className="col rectangle">
            <div className="container slider">
              <div className="row">
                <div className="title">My Tech Stack</div>
              </div>
              <div className="slider-row">
                <div className="row">
                  <Slider
                    reverse={true}
                    width="60px"
                    height="60px"
                    images={[
                      tech_01_html,
                      tech_02_css,
                      tech_03_js,
                      tech_04_react,
                      tech_05_jquery,
                      tech_06_php,
                      tech_07_python,
                      tech_08_anaconda,
                      tech_09_github,
                      tech_10_figma,
                    ]}
                  />
                </div>
                <div className="row">
                  <Slider
                    reverse={false}
                    width="60px"
                    height="60px"
                    images={[
                      tech_11_c,
                      tech_12_cplusplus,
                      tech_13_csharp,
                      tech_14_java,
                      tech_15_aws,
                      tech_16_ubuntu,
                      tech_17_mysql,
                      tech_18_mongodb,
                      tech_19_opengl,
                      tech_20_docker,
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BentoBox;
