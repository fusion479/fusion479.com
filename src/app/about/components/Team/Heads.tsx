import Image from "next/image";
import avatar from "../../../../../public/team/avatar.webp";
import owen from "../../../../../public/team/owen.jpg";
import jason from "../../../../../public/team/jason.jpg";
import elizabeth from "../../../../../public/team/elizabeth.jpg";

export default function Heads() {
  return (
    <div className="gap-10 grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20">
      {new Array(
        {
          name: "Kiran Yesley",
          role: "Head of Engineering",
          avatar: avatar,
          description:
            "I’m an engineer who loves clear thinking and kind teams. I spend my days turning messy ideas into simple systems, and making sure people have the tools, context, and calm to do their best work. I care a lot about mentoring, writing things down, and leaving code—and people—better than I found them. Outside of work, I’m usually making music, sketching goofy product ideas, or hunting for the perfect cappuccino.",
        },

        {
          name: "Stephen Chen",
          role: "Head of Programming",
          avatar: avatar,
          description:
            "I lead programming with a steady hand and a soft spot for curious questions. I like breaking big problems into small, friendly steps, and I’m happiest when teammates feel confident shipping their own ideas. I’m big on readable code, thoughtful reviews, and the occasional dad joke in a commit message. When I clock out, you’ll find me exploring new games, swimming laps, or baking cookies for whoever’s stuck on a tricky bug.",
        },

        {
          name: "Elizabeth Chen",
          role: "Head of Marketing",
          avatar: elizabeth,
          description:
            "I joined the team as a sophomore with zero prior experience but a strong interest in STEM. Although I was reserved at first, I’ve become a much more confident communicator by participating in and leading outreach initiatives. As Head of Marketing, I'm excited to continue improving myself while giving back to the community and inspiring younger generations to explore STEM. Outside of robotics, I enjoy trying new restaurants with friends, drawing, and watching TV.",
        },
      ).map((v, i) => (
        <div
          key={i}
          className="w-full bg-white h-full p-8 text-left shadow-md rounded-3xl"
        >
          <div className="flex justify-center pb-8">
            <Image
              src={v.avatar}
              height={164}
              width={164}
              alt="img"
              className="aspect-[3/2] w-full rounded-2xl object-cover"
            />
          </div>
          <span className="text-base font-semibold md:text-2xl text-gray-950">
            {v.name}
          </span>
          <p className="text-sm font-semibold text-blue-500">{v.role}</p>
          <p className="pt-2 text-xs font-normal text-gray-600 md:text-sm">
            {v.description}
          </p>
        </div>
      ))}
    </div>
  );
}
