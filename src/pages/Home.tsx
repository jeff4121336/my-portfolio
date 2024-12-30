import "./Home.scss";
import React, { useRef, useEffect, useState } from "react";
import { useIntersectionObserver } from "../components/hooks/useIntersectionObserver";
import TopNavigation from "../components/grouped/TopNavigation/TopNavigation";
import Hero from "../components/grouped/Hero/Hero";
import BentoBox from "../components/grouped/BentoBox/BentoBox";
import ProjectBox from "../components/grouped/ProjectBox/ProjectBox";
import Footer from "../components/grouped/Footer/Footer";
import { macboxProj1_1, macboxProj1_2, macboxProj1_3 } from "../assets";

function Home() {
  const bentoRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const navOptions = {
    root: null,
    rootMargin: "-3% 0px -93% 0px", // for top navbar here
    boxElement: bentoRef.current,
  };

  const navCallback: IntersectionObserverCallback = (entries) => {
    const nav = document.querySelector(".top-nav") as HTMLDivElement;
    const root = document.querySelector("#root") as HTMLDivElement;
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        !entry.target.classList.contains("dark-mode")
      ) {
        nav.classList.add("dark-mode");
        nav.querySelectorAll("*").forEach((child) => {
          (child as HTMLDivElement).classList.add("dark-mode");
        });
        setTimeout(() => {
          root.style.overflow = "hidden";
          setTimeout(() => {
            root.style.overflow = "auto";
          }, 150);
        }, 5);
      } else {
        nav.classList.remove("dark-mode");
        nav.querySelectorAll("*").forEach((child) => {
          (child as HTMLDivElement).classList.remove("dark-mode");
        });
        setTimeout(() => {
          root.style.overflow = "hidden";
          setTimeout(() => {
            root.style.overflow = "auto";
          }, 150);
        }, 5);
      }
    });
  };

  const navRef = useIntersectionObserver(navCallback, navOptions, 100);

  const scrollToIndex = (index: number) => {
    const listNode = frameRef.current;
    const frameList = listNode?.querySelectorAll(".frame");
    if (frameList && frameList[index]) {
      console.log("scrolling to", frameList[index], " index", index);
      setTimeout(() => {
        (frameList[index + 1] as HTMLElement).scrollIntoView({
          behavior: "auto",
          inline: "start",
        });
      }, 150);
    }
    console.log("scrolling to index", index);
  };

  return (
    <>
      <div className="home-frame" ref={frameRef}>
        <div className="frame nav-frame">
          <TopNavigation scrollToIndex={scrollToIndex} />
        </div>
        <div className="frame hero-frame">
          <Hero />
        </div>
        <div className="frame bentobox-frame" ref={navRef}>
          <BentoBox />
        </div>
        <div className="frame project-frame">
          <ProjectBox
            title="Project On Bioinformatics & AI"
            video={["QZ2RmchYzSA"]}
            desc={["RNA Analysis"]}
          >
            This project combines LLM and CNN deep learning models to analyze
            RNA types and content. It predicts 14 types of RNA with 97% accuracy
            and an 85% F1 score, surpassing some current sota models.
            Additionally, it provides bar charts and prediction scores as
            annotations to help users understand the results. This final year
            project is ongoing until May 2025.
          </ProjectBox>

          <ProjectBox title="Project On Web Development">
            I developed my website using React and TypeScript, with designs
            created in Figma and Spline. Additionally, I worked on a web app for
            Hong Kong government cultural programs data in a school group
            project with React, Node.js, and MongoDB. Both projects emphasized
            responsive design and seamless UI/UX.
          </ProjectBox>

          <ProjectBox title="Project On Game Development">
            I worked on both software and hardware aspects of game development.
            For hardware, I created a game using a STM32 microcontroller with C,
            focusing on embedded system logic, hardware, and graphics. For
            software, I developed a 2D NES Bomberman clone using WPF with C#,
            adding self-coded AI and power-ups, following an Agile development
            cycle.
          </ProjectBox>

          <ProjectBox title="More Projects...">
            There are more projects I have worked on, including book system with
            Java, text translation app with Python, OpenGL with C++, etc. But,
            they are not included here. Feel free to watch my GitHub or YouTube
            Channel for uploaded projects.
          </ProjectBox>
        </div>
        <div className="footer-frame">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
