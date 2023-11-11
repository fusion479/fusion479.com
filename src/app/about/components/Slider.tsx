import Marquee from "react-fast-marquee";

export default function Slider() {
  return (
    <>
      <Marquee className="h-64" speed={75}>
        {new Array(10).fill(0).map((_, i) => (
          <img
            src="placeholder_image.jpg"
            alt="placeholder"
            className={`mr-12 h-52 ${
              i % 6 === 0 ? "-rotate-6" : i % 3 === 0 && "rotate-6"
            }`}
          />
        ))}
      </Marquee>
      <Marquee className="h-64" speed={75} direction="right">
        {new Array(10).fill(0).map((_, i) => (
          <img
            src="placeholder_image.jpg"
            alt="placeholder"
            className={`mr-12 h-52 ${
              i % 6 === 0 ? "-rotate-6" : i % 3 === 0 && "rotate-6"
            }`}
          />
        ))}
      </Marquee>
    </>
  );
}
