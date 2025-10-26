import Image from "next/image";
import jason from "../../../../../public/team/jason.jpg";
import owen from "../../../../../public/team/owen.jpg";

export default function Executives() {
  return (
    <div className="gap-10 grid auto-rows-fr grid-cols-1 sm:grid-cols-2">
      {new Array(
        {
          name: "Jason Zhao",
          role: "Head of Engineering",
          avatar: jason,
          description:
            "In my sophomore year, I joined the FTC robotics team 479, feeling a mix of excitement and nerves. The world of robotics and engineering was new to me, and I was unsure of how I would fit in. However, as I spent more time with the team, I quickly became immersed in the technical challenges and collaborative environment. I developed a passion for engineering, learning new skills and concepts along the way. The support from my teammates helped me grow more confident, and I found myself contributing actively to the team's projects, gaining valuable experience in the process.",
        },

        {
          name: "Owen Shi",
          role: "Vice President",
          avatar: owen,
          description:
            "I joined Stuy Fusion a little late, as a sophomore, unsure of where I could contribute. Determined to help out, I quickly immersed myself in learning FTC software and discovered my passion for programming and problem-solving. Being part of Stuy Fusion has sharpened my technical skills and taught me the value of collaboration and perseverance. Outside of robotics, I enjoy playing video games and swimming, both of which help me unwind and stay motivated in everything I do.",
        },
      ).map((v, i) => (
        <div
          key={i}
          className="w-full flex-col xl:flex-row flex bg-white h-full p-8 text-left shadow-md rounded-3xl"
        >
          <Image
            src={v.avatar}
            alt="Image: headshot of one of our team members"
            className="xl:w-52 xl:mr-8 xl:flex-none aspect-[3/2] xl:mt-0 mb-8 xl:mb-0 w-full rounded-2xl object-cover"
          />
          <div>
            <span className="text-base font-semibold md:text-2xl text-gray-950">
              {v.name}
            </span>
            <p className="text-sm font-semibold text-blue-500">{v.role}</p>
            <p className="pt-2 text-xs font-normal text-gray-600 md:text-sm">
              {v.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
