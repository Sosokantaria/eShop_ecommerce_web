import { Carousel } from "antd";

export function SlickCarousel() {
  const contentStyle: React.CSSProperties = {
    height: "280px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    borderRadius:"16px",
  };
  return (
    <div>
    <Carousel autoplay >
      <div>
        <h3 style={contentStyle} className="rounded-lg">1</h3>
      </div>
      <div>
        <h3 style={contentStyle} className="rounded-lg">2</h3>
      </div>
      <div>
        <h3 style={contentStyle} className="rounded-lg">3</h3>
      </div>
      <div>
        <h3 style={contentStyle} className="rounded-lg">4</h3>
      </div>
    </Carousel></div>
  );
}