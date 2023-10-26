import Title from "@/components/Title";

export default function Hero() {
  return (
    <div className="flex">
      <img
        src="/placeholder_image.jpg"
        alt="Current robot"
        className="w-5/12"
      />
      <div className="w-7/12">
        <Title
          bold="engineers,"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
}
