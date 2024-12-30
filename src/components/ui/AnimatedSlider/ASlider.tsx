import "./ASlider.scss";

interface SliderProps {
  images: string[];
  width: string;
  height: string;
  reverse?: boolean;
}

function Slider({ images, width, height, reverse }: SliderProps) {
  const imgCount = images.length;
  return (
    <>
      <div
        className="slider"
        style={
          {
            "--img-count": imgCount,
            "--width": width,
            "--height": height,
          } as React.CSSProperties
        }
      >
        <div
          className={reverse ? "list reverse" : "list"}
          style={
            {
              "--img-count": imgCount,
            } as React.CSSProperties
          }
        >
          {images.map((img, index) => {
            return (
              <div
                className="item"
                style={{ "--img-position": index } as React.CSSProperties}
              >
                <img src={img} alt={`img-${index}`} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Slider;
