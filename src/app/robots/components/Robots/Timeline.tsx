import { Dispatch, SetStateAction } from "react";

export default function Timeline({
  setActive,
  active,
}: {
  setActive: Dispatch<SetStateAction<number>>;
  active: number;
}) {
  return (
    <div className="border-l hidden xl:block pl-2">
      {[
        "Centerstage",
        "Powerplay",
        "Freight Frenzy",
        "Ultimate Goal",
        "Skystone",
      ].map((v, i) => (
        <div className="flex items-center" key={i} onClick={() => setActive(i)}>
          <div
            className={`border-t w-3 mr-2 ${i === active && "border-blue-700"}`}
          />
          <span
            className={`inline-block tracking-widest rounded-lg font-light text-xs mr-2 text-gray-500
              ${i === active && "text-blue-700"}`}
          >
            {2023 - i}:
          </span>
          <button
            className={`relative block px-4 py-2 my-4 rounded-lg hover:bg-blue-100 hover:-translate-y-0.5 hover:text-blue-600 duration-150 ${i === active ? "bg-blue-50 text-blue-600" : "text-slate-700"
              }`}
          >
            <span className="inline-block tracking-wide rounded-lg text-sm">
              {v}
            </span>
          </button>
        </div>
      ))}
    </div>
  );
}
