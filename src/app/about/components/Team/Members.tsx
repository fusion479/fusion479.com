import Image from "next/image";
import avatar from "../../../../../public/team/avatar.webp";

export default function Members() {
  return (
    <div className="gap-10 grid auto-rows-fr grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 mt-20">
      {[
        { name: "Brandon Ngyuen", role: "Rookie Programmer" },
        { name: "Owen Shi", role: "Rookie Programmer" },
        { name: "Stephen Chen", role: "Rookie Engineer" },
        { name: "Stas Chadrys", role: "Rookie Engineer" },
        { name: "Raahat Amin", role: "Rookie Engineer" },
        { name: "Kayden Au", role: "Rookie Engineer" },
        { name: "Xuan Yao", role: "Rookie Engineer" },
        { name: "Zachary Aaron", role: "Rookie Engineer" },
        { name: "Jayden Vallejo", role: "Rookie Engineer" },
        { name: "Tasfia Bietea", role: "Rookie Engineer" },
        { name: "Kiran Yesley", role: "Rookie Engineer" },
        { name: "Jason Zhao", role: "Rookie Engineer" },
        { name: "Elizabeth Chen", role: "Rookie Engineer" },
        { name: "Kelly Lin", role: "Rookie Engineer" },
        { name: "Erica You", role: "Rookie Engineer" },
        { name: "Ryan Kim", role: "Rookie Engineer" },
      ].map((v, i) => (
        <div key={i}>
          <div className="justify-center pb-8 grid place-items-center">
            <Image
              src={avatar}
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
