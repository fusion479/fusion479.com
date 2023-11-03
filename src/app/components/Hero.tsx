import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import Title from "@/components/Title";

export default function Hero() {
  return (
    <div className="sm:flex">
      <div className="sm:w-7/12">
        <Title
          bold={["Stuy Fusion,", "a community,", "engineers,"]}
          loop
          description={
            "Stuyvesant FTC Team 479 is a robotics team based in New York City that competes in the FIRST Tech Challenge."
          }
        />
        <div>
          <AiOutlineGithub className="inline-block w-10 h-10 mt-8 text-gray-500 hover:text-gray-600 cursor-pointer duration-150" />
          <AiOutlineInstagram className="inline-block w-10 h-10 mt-8 ml-4 text-gray-500 hover:text-gray-600 cursor-pointer duration-150" />
        </div>
      </div>
      <img
        src="/placeholder_image.jpg"
        alt="3D model of robot"
        className="sm:w-5/12"
      />
    </div>
  );
}
