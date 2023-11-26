export default function Card({
  key,
  name,
  role,
  body,
}: {
  key: number;
  name: string;
  role: string;
  body: string;
}) {
  return (
    <div
      key={key}
      className="w-full bg-white h-full p-8 text-left shadow-md rounded-3xl"
    >
      <div className="flex justify-center pb-8">
        <img
          src="avatar.webp"
          height={164}
          width={164}
          alt="img"
          className="h-[164px] rounded-full border-[1px] border-slate-300"
        />
      </div>
      <span className="text-base font-semibold md:text-2xl text-gray-950">
        {name}
      </span>
      <p className="text-sm font-semibold text-blue-500">{role}</p>
      <p className="pt-2 text-xs font-normal text-gray-600 md:text-sm">
        {body}
      </p>
    </div>
  );
}
