import Image from "next/image";
import avatar from "../../../../../public/team/avatar.webp";

export default function Heads() {
  return (
    <div className="gap-10 grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20">
      {new Array(
        {
          name: "Megan Chan",
          role: "Head of Engineering",
          avatar,
          description:
            "I joined the team as a sophomore, looking to learn more about mechanical engineering and electronics. Participating in the late-night meetings, I learned more about engineering and FTC in general. Learning from others, I began to take a role in our team for engineering. I’m excited to continue learning about robotics and strive to better my engineering skills to lead the engineering aspect of the team. Outside of school, I really enjoy sleeping in, playing video games, and buying weird snacks to try with friends.",
        },

        {
          name: "Princeden Hom",
          role: "Head of Programming",
          avatar,
          description:
            "I first joined the team as sophmore, interested to learn more about software engineering. I had never been a part of a robotics team in the past, and I decided to join Team 479 by pure chance. I started with zero knowledge of programming or robotics, but over the course of the year I was able to learn enough from veteran members of the team and hands on experience with the robot, to become the head of SE this year. I’m excited to continue to develop both my leadership and robotics skills by continuing to help lead our software  efforts, and hope to continue the spirit of the team by teaching new members.",
        },
        {
          name: "Khin Aung",
          role: "Head of Marketing",
          avatar,
          description:
            "As the Head of Marketing for Stuy Fusion, FTC Team 479, I combine my marketing skills with my enthusiasm for robotics. My interests in osu, EDM, and J-Pop inspire my creative approaches, helping me design campaigns that appeal to a broad audience. In this role, I enjoy blending my technical knowledge with current cultural trends, making every project an exciting challenge and an opportunity to connect with others who share my passions.",
        },
      ).map((v, i) => (
        <div
          key={i}
          className="w-full bg-white h-full p-8 text-left shadow-md rounded-3xl"
        >
          <div className="flex justify-center pb-8">
            <Image
              src={avatar}
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
