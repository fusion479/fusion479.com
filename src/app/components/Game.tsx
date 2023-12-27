import Image from "next/image";
import ftc from "../../../public/landing/ftc.jpeg";

export default function Game() {
  return (
    <div>
      <h1 className="max-w-4xl mt-24 mx-auto text-center font-display text-3xl md:text-5xl font-medium tracking-tight sm:text-6xl">
        FIRST Tech Challenge
      </h1>{" "}
      <div className="flex flex-col lg:flex-row mt-2 items-center justify-center">
        <div className="max-w-2xl mt-2 md:text-lg tracking-tight text-slate-700">
          <p>
            We compete in FTC. Throughout the school year, we assemble robots to
            compete with other teams. FIRST builds strong and supportive
            communities so that students can help each other, even across team
            boundaries. In addition to building a robot, our team has outreach
            initiatives to promote STEM and give back to our community. You can
            read more about that in our page about our community impact.
          </p>
          <p className="mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>{" "}
        <Image
          src={ftc}
          alt="Image: picture of a FTC match"
          className="lg:w-5/12 rounded-lg md:ml-6 mt-6"
        />
      </div>
    </div>
  );
}
