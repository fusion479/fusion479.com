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
      {new Array(3).fill(0).map((_, i) => (
        <div className="flex items-center" key={i} onClick={() => setActive(i)}>
          <div
            className={`border-t w-3 mr-2 ${i === active && "border-blue-700"}`}
          />
          <button
            className={`relative block px-4 py-2 my-4 rounded-lg shadow-sm hover:bg-blue-100 hover:-translate-y-0.5 hover:text-blue-600 duration-150 ${
              i === active
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-50 text-slate-700"
            }`}
          >
            <span className="inline-block font-light rounded-lg text-sm">
              {2022 + i}: CENTERSTAGE
            </span>
          </button>
        </div>
      ))}
    </div>
  );
}
