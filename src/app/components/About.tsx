import Image from "next/image";
import team from "../../../public/landing/team.jpeg";

export default function About() {
  return (
    <div>
      <h1 className="max-w-4xl mb-8 mt-24 mx-auto text-center font-display text-3xl font-medium tracking-tight md:text-5xl text-blue-600 sm:text-48xl">
        Who are we?
      </h1>{" "}
      <div className="flex flex-col lg:flex-row mt-2 items-center justify-center">
        <Image
          src={team}
          alt="Image: a photo of team 479's members together holding up a banner"
          className="lg:w-5/12 rounded-lg md:mr-6"
        />
        <div className="max-w-2xl md:text-lg tracking-tight text-slate-700">
          <p>
            We are Team 479 Stuy Fusion, a robotics team from Stuyvesant High
            School, NYC. Our team competes annually in the First Tech Challenge
            (FTC). We are also part of Stuyvesant Robotics, a 501(c)(3)
            nonprofit which includes our sister teams, FTC 310 Stuy Fission and
            FRC 694 Stuy Pulse. Our mission is to create a robot viable for the
            highest levels of competition while fostering a welcoming STEM
            community.
          </p>
          <p className="mt-6">
            FTC 479 Stuy Fusion is a team dedicated to pushing the boundaries of
            innovation in the field of FIRST Tech Challenge (FTC). We epitomize
            excellence through their unwavering commitment to engineering
            brilliance and teamwork.
          </p>
        </div>
      </div>
    </div>
  );
}
