import Image from "next/image";
import avatar from "../../../../../public/team/avatar.webp";

export default function Executives() {
  return (
    <div className="gap-10 grid auto-rows-fr grid-cols-1 sm:grid-cols-2">
      {new Array(
        {
          name: "Cassandra Chan",
          role: "President",
          avatar: avatar,
          description:
            "",
        },

        {
          name: "Aidan Gray",
          role: "Vice President",
          avatar: avatar,
          description:
            "",
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
