import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Slider() {
  return (
    <>
      <Marquee className="h-64" speed={75}>
        {["1.jpeg", "2.jpg", "3.jpg", "4.jpg", "5.jpeg", "6.jpeg"].map(
          (v, i) => (
            <img
              src={`/community/${v}`}
              className={`mr-12 h-52 rounded-lg ${
                i % 6 === 0 ? "-rotate-6" : i % 3 === 0 && "rotate-6"
              }`}
            />
          ),
        )}
      </Marquee>
      <Marquee className="h-64" speed={75}>
        {["7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg", "11.jpeg", "12.jpeg"].map(
          (v, i) => (
            <img
              src={`/community/${v}`}
              className={`mr-12 h-52 rounded-lg ${
                i % 6 === 0 ? "-rotate-6" : i % 3 === 0 && "rotate-6"
              }`}
            />
          ),
        )}
      </Marquee>{" "}
    </>
  );
}
