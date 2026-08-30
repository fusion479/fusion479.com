import Image from "next/image";
import avatar from "../../../../../public/team/avatar.webp";

export default function Members() {
  return (
    <div className="gap-10 grid auto-rows-fr grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 mt-20">
      {new Array(
        { name: "Jayden Yang", role: "Veteran Engineer", avatar, },
        { name: "Jeremy Wen", role: "Rookie Engineer", avatar, },        
        { name: "Tamim Sarker", role: "Rookie Engineer", avatar, },
        { name: "Noah Deer", role: "Rookie Engineer", avatar, },
        { name: "Charles Chen", role: "Rookie Engineer", avatar, },
        { name: "Tun Naing", role: "Veteran Engineer", avatar, },
        { name: "Bryce Tsao", role: "Rookie Engineer", avatar, },

      ).map((v, i) => (
        <div key={i}>
          <div className="justify-center pb-8 grid place-items-center">
            <Image
              src={v.avatar}
              height={100}
              width={100}
              alt="img"
              className="rounded-full border-[1.5px] border-slate-300 mb-2"
            />
            <span className="text-base font-semibold md:text-xl text-gray-950">
              {v.name}
            </span>
            <p className="text-xs font-semibold text-blue-500">{v.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
