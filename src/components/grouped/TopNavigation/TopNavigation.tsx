import NavButton from "../../ui/Button/NavButton";
import "./TopNavigation.scss";
const color = "#000000";
const bgColor = "#FCF2E5";
const fontSize = "11px";
const width = "55px";
const height = "22px";

interface TopNavigationProps {
  scrollToIndex: (index: number) => void;
}

function TopNavigation({ scrollToIndex }: TopNavigationProps) {
  return (
    <>
      <div className="top-nav container-fluid">
        <div className="row">
          <div className="col text-column">
            <div className="row">
              <div className="main-text"> Jeff's Website </div>
            </div>
            <div className="row">
              <div className="sub-text"> Recently Graduated </div>
            </div>
          </div>
          <div className="col btn-column">
            <div onClick={() => scrollToIndex(0)}>
              <NavButton
                color={color}
                bgColor={bgColor}
                fontSize={fontSize}
                width={width}
                height={height}
              >
                Home
              </NavButton>
            </div>
            <div onClick={() => scrollToIndex(1)}>
              <NavButton
                color={color}
                bgColor={bgColor}
                fontSize={fontSize}
                width={width}
                height={height}
              >
                About
              </NavButton>
            </div>
            <div onClick={() => scrollToIndex(2)}>
              <NavButton
                color={color}
                bgColor={bgColor}
                fontSize={fontSize}
                width={width}
                height={height}
              >
                Project
              </NavButton>
            </div>
            <div onClick={() => scrollToIndex(3)}>
              <NavButton
                color={color}
                bgColor={bgColor}
                fontSize={fontSize}
                width={width}
                height={height}
              >
                <a href="mailto:jeffyau36@gmail.com">Contact</a>
              </NavButton>
            </div>
          </div>
          {/* <button className="sidebar-btn"> Bar </button> */}
        </div>
      </div>
    </>
  );
}

export default TopNavigation;
