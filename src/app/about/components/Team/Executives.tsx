import Card from "./Card";

export default function Executives() {
  return (
    <div className="gap-10 grid auto-rows-fr grid-cols-1 sm:grid-cols-2">
      {new Array(2).fill(0).map((_, i) => (
        <div
          key={i}
          className="w-full flex-col xl:flex-row flex bg-white h-full p-8 text-left shadow-md rounded-3xl"
        >
          <img
            src="/team/avatar.webp"
            className="xl:w-52 xl:mr-8 xl:flex-none aspect-[3/2] xl:mt-0 mb-8 xl:mb-0 w-full rounded-2xl object-cover"
          />
          <div>
            <span className="text-base font-semibold md:text-2xl text-gray-950">
              John Doe
            </span>
            <p className="text-sm font-semibold text-blue-500">
              Head of Engineering
            </p>
            <p className="pt-2 text-xs font-normal text-gray-600 md:text-sm">
              Robotics and technology have fascinated me ever since I was a
              child. Joining 479 as a sophomore, I was a little late to the
              party, but I felt like I was still welcomed and encouraged to
              learn just like everyone else. The adrenaline you get watching the
              team succeed is unlike any other, and you feel kind of proud in a
              way. FTC has allowed me to develop my skills as an amateur
              engineer, machinist, software developer, and team leader, and has
              made me into a more well-rounded individual.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
