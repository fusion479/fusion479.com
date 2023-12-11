import Card from "./Card";

export default function Members() {
  return (
    <div className="gap-10 grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-20">
      {new Array(8).fill(0).map((_, i) => (
        <div key={i}>
          <div className="justify-center pb-8 grid place-items-center">
            <img
              src="avatar.webp"
              height={100}
              width={100}
              alt="img"
              className="rounded-full border-[1.5px] border-slate-300 mb-2"
            />
            <span className="text-base font-semibold md:text-xl text-gray-950">
              John Doe
            </span>
            <p className="text-xs font-semibold text-blue-500">
              Head of Engineering
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
