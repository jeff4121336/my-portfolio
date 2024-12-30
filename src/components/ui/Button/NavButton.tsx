import "./Button.scss";

interface NavButtonProps {
  color: string;
  bgColor: string;
  fontSize: string;
  width: string;
  height: string;
  children: React.ReactNode;
}

function NavButton({
  color,
  bgColor,
  fontSize,
  width,
  height,
  children,
}: NavButtonProps) {
  return (
    <>
      <div
        className="navbtn"
        style={
          {
            "--btn-color": color,
            "--btn-bgcolor": bgColor,
            "--font-size": fontSize,
            "--width": width,
            "--height": height,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </>
  );
}

export default NavButton;
