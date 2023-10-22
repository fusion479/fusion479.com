import Title from "@/components/Title";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex">
      <img src="/placeholder_image.jpg" alt="team picture" />
      <Title
        bold="a community"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  );
}
