import Image from "next/image";
import avatar from "../../../../../public/team/avatar.webp";

export default function Heads() {
  return (
    <div className="gap-10 grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20">
      {new Array(
        {
          name: "Erica You",
          role: "Head of Engineering",
          avatar: avatar,
          description:
            "",
        },

        {
          name: "Justin Dai",
          role: "Head of Software",
          avatar: avatar,
          description:
            "",
        },

        {
          name: "Tasfia Bideta",
          role: "Head of Marketing",
          avatar: avatar,
          description:
            "",
        },

      {
        name: "Kyson Dong",
        role: "Head of Operations",
        avatar: avatar,
        description:
          "",
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
