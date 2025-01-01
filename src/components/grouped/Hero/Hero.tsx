import "./Hero.scss";
import { avatar } from "../../../assets";

function Hero() {
  return (
    <>
      <div className="hero container-fluid">
        <div className="row main-text animate__animated animate__bounce animate__delay-1s animate__repeat-3">
          Hi, I'm Jeff!
        </div>
        <div className="row sub-text animate__animated animate__bounce animate__delay-1s animate__repeat-3">
          This is my website.
        </div>
        <img src={avatar} alt="avatar" />
      </div>
    </>
  );
}

export default Hero;
