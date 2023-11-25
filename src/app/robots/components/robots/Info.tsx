export default function Info() {
  return (
    <div className="max-w-4xl flex flex-col justify-center items-center">
      <img src="placeholder_image.jpg" alt="robot picture" />
      <p className="mt-6 max-w-3xl text-base tracking-wide text-slate-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. tion ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="border-t-[1px] w-3/4 ml-auto my-8 mr-auto border-slate-300" />
      <div className="flex">
        <div>
          <span className="text-xl text-blue-500 tracking-wide font-semibold">
            Awards
          </span>
          <ul className="ml-8">
            {[
              "NYC Qualifier 3 Design Award",
              "NYC Qualifier 5 Winning Alliance",
              "NYC Qualifier 5 Winning Alliance",
              "NYC Super Qualifier Innovate Award",
              "NYC Super Qualifier Inspire Award 2nd place",
              "NYC Championship Motivate Award",
            ].map((v) => (
              <li className="flex text-slate-500 text-sm font-semibold" key={v}>
                <span className="mr-4 h-full">-</span> {v}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="text-xl text-blue-500 tracking-wide font-semibold">
            Videos
          </span>
          <ul className="ml-8">
            {[
              "NYC Qualifier 3 Design Award",
              "NYC Qualifier 5 Winning Alliance",
              "NYC Qualifier 5 Winning Alliance",
              "NYC Super Qualifier Innovate Award",
              "NYC Super Qualifier Inspire Award 2nd place",
              "NYC Championship Motivate Award",
            ].map((v) => (
              <li className="flex text-slate-500 text-sm font-semibold" key={v}>
                <span className="mr-4 h-full">-</span> {v}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="text-xl text-blue-500 tracking-wide font-semibold">
            Code & Records
          </span>
          <ul className="ml-8">
            {[
              "NYC Qualifier 3 Design Award",
              "NYC Qualifier 5 Winning Alliance",
              "NYC Qualifier 5 Winning Alliance",
              "NYC Super Qualifier Innovate Award",
              "NYC Super Qualifier Inspire Award 2nd place",
              "NYC Championship Motivate Award",
            ].map((v) => (
              <li className="flex text-slate-500 text-sm font-semibold" key={v}>
                <span className="mr-4 h-full">-</span> {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
