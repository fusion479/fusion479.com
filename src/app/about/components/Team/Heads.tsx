import Image from "next/image";
import avatar from "../../../../../public/team/avatar.webp";

export default function Heads() {
  return (
    <div className="gap-10 grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20">
      {new Array(3).fill(0).map((_, i) => (
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
            John Doe
          </span>
          <p className="text-sm font-semibold text-blue-500">
            Head of Engineering
          </p>
          <p className="pt-2 text-xs font-normal text-gray-600 md:text-sm">
            Robotics and technology have fascinated me ever since I was a child.
            Joining 479 as a sophomore, I was a little late to the party, but I
            felt like I was still welcomed and encouraged to learn just like
            everyone else. The adrenaline you get watching the team succeed is
            unlike any other, and you feel kind of proud in a way. FTC has
            allowed me to develop my skills as an amateur engineer, machinist,
            software developer, and team leader, and has made me into a more
            well-rounded individual.
          </p>
        </div>
      ))}
    </div>
  );
}
