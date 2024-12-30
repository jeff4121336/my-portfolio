import "./Hero.scss";
import Spline from "@splinetool/react-spline";

function Hero() {
  return (
    <>
      <div className="hero container-fluid">
        <div className="row flex-md-column">
          <div className="text-col col-md-6">
            <div className="row col-md">
              <div className="main-text"> Hi, I'm Jeff! </div>
            </div>
            <div className="row col-md">
              <div className="sub-text"> This is my website. </div>
            </div>
          </div>
          <div className="spline-col col-md-6"></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
