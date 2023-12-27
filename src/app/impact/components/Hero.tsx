import Title from "@/components/Title";
import heroImage from "../../../../public/impact/hero.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex items-center flex-col-reverse xl:flex-row">
      <Image
        src={heroImage}
        alt="Image: opening image to the website depicting team 479 as community members"
        className="xl:w-1/2 rounded-lg mt-8 xl:mt-0"
      />
      <div className="xl:w-1/2 xl:mb-0 mb-6">
        <Title
          bold="blah,"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
}
