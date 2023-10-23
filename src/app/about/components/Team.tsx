export default function Team() {
  return (
    <div className="gap-10 md:grid auto-rows-fr md:grid-cols-2 lg:grid-cols-3">
      {new Array(9).fill(0).map((member, i) => (
        <div
          key={i}
          className="w-full bg-white h-full p-8 text-left shadow-md rounded-3xl"
        >
          <div className="flex justify-center pb-8">
            <img
              src="avatar.webp"
              height={164}
              width={164}
              alt="img"
              className="h-20 lg:h-[164px] rounded-full border-[1px] border-slate-300"
            />
          </div>
          <span className="text-base font-semibold md:text-2xl text-gray-950">
            John Doe
          </span>
          <span className="px-2 text-sm font-semibold md:text-base text-blue-500">
            Programming Head
          </span>
          <p className="py-1 text-xs font-medium text-gray-600 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="pt-4 text-xs font-normal text-gray-600 md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            dolor officia iste, earum nesciunt, suscipit eius non beatae iusto
            ea, consequatur reprehenderit perspiciatis! Sequi, fugit. Ipsum
            nihil, consequuntur excepturi adipisci amet consectetur praesentium
            molestias porro reiciendis alias! Amet in animi reiciendis
            accusantium quis totam, repudiandae eaque, nobis fugit, voluptatem
            velit et ex itaque. Quos repellendus ad repudiandae rem, ullam
            dolore!
          </p>
        </div>
      ))}
    </div>
  );
}
