import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import Title from "@/components/Title";

import robot from "../../../public/landing/robot.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex items-center flex-col xl:flex-row">
      <div className="xl:w-7/12 xl:mb-0 mb-6">
        <Title
          bold={["Stuy Fusion,", "a community,", "engineers,"]}
          loop
          description={
            "Stuyvesant FTC Team 479 is a robotics team based in New York City that competes in the FIRST Tech Challenge."
          }
        />
        <div className="text-center">
          <a href="https://www.youtube.com/@stuyfusion">
            <AiOutlineYoutube className="inline-block w-10 h-10 mt-8 text-gray-600 hover:text-gray-700 cursor-pointer duration-150" />
          </a>
          <a href="https://www.instagram.com/stuyfusion/">
            <AiOutlineGithub className="inline-block w-10 h-10 mt-8 ml-4 text-gray-600 hover:text-gray-700 cursor-pointer duration-150" />
          </a>
          <a href="https://github.com/fusion479">
            <AiOutlineInstagram className="inline-block w-10 h-10 mt-8 ml-4 text-gray-600 hover:text-gray-700 cursor-pointer duration-150" />
          </a>
        </div>
      </div>
      <Image
        src={robot}
        priority
        placeholder="blur"
        alt="Image: render of team 479's current robot for the 2024 season"
        className="xl:w-5/12 mx-auto rounded-lg"
      />
    </div>
  );
}
