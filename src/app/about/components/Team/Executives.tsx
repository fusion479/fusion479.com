import Image from "next/image";
import avatar from "../../../../../public/team/avatar.webp";

export default function Executives() {
  return (
    <div className="gap-10 grid auto-rows-fr grid-cols-1 sm:grid-cols-2">
      {new Array(
        {
          name: "Daniel Xu",
          role: "President",
          avatar,
          description:
            "Robotics and technology have fascinated me ever since I was a child. Joining 479 as a sophomore, I was a little late to the party, but I felt like I was still welcomed and encouraged to learn just like everyone else. The adrenaline you get watching the team succeed is unlike any other, and you feel kind of proud in a way. FTC has allowed me to develop my skills as an amateur engineer, machinist, software developer, and team leader, and has made me into a more well-rounded individual.",
        },

        {
          name: "Victoria Reguyal",
          role: "Vice President",
          avatar,
          description:
            "I’m a junior and I joined Team 479 as a freshman to learn about engineering and electronics while having fun with robots. Though I’ve been interested in STEM since elementary school, I started out with hardly any relevant experience. But in FTC, I have been a part of a warm community with people who push each other to learn and achieve more. Outside of school, I like to spend my time reading, playing games, and exploring the city.",
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
