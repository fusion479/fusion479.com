import Marquee from "react-fast-marquee";
import Image from "next/image";

import one from "../../../../public/community/1.jpeg";
import two from "../../../../public/community/2.jpg";
import three from "../../../../public/community/3.jpg";
import four from "../../../../public/community/4.jpg";
import five from "../../../../public/community/5.jpeg";
import six from "../../../../public/community/6.jpeg";
import seven from "../../../../public/community/7.jpeg";
import eight from "../../../../public/community/8.jpeg";
import nine from "../../../../public/community/9.jpeg";
import ten from "../../../../public/community/10.jpeg";
import eleven from "../../../../public/community/11.jpeg";
import twelve from "../../../../public/community/12.jpeg";

export default function Slider() {
  return (
    <>
      <Marquee className="h-[16.5rem]" speed={75}>
        {[one, two, three, four, five, six].map((v, i) => (
          <Image
            key={i}
            src={v}
            priority
            height={224}
            placeholder="blur"
            className={`mr-12 rounded-lg ${
              i % 6 === 0 ? "-rotate-6" : i % 3 === 0 && "rotate-6"
            }`}
            alt="Looping image slider: FTC Team 479 team members at various events and being community members."
          />
        ))}
      </Marquee>
      <Marquee className="h-[16.5rem]" speed={75}>
        {[seven, eight, nine, ten, eleven, twelve].map((v, i) => (
          <Image
            key={i}
            src={v}
            priority
            placeholder="blur"
            height={224}
            className={`mr-12 rounded-lg ${
              i % 6 === 0 ? "-rotate-6" : i % 3 === 0 && "rotate-6"
            }`}
            alt="Looper image slider: FTC Team 479 team members at various events and being community members."
          />
        ))}
      </Marquee>{" "}
    </>
  );
}
