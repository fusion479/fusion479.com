import Title from "@/components/Title";

export default function Hero() {
  return (
    <div className="flex flex-col xl:flex-row">
      <img
        src="/placeholder_image.jpg"
        alt="Current robot"
        className="w-5/12 hidden xl:block"
      />
      <div className="xl:w-7/12 xl:mb-0 mb-6">
        <Title
          bold="engineers,"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      <img
        src="/placeholder_image.jpg"
        alt="Current robot"
        className="block xl:hidden mx-auto"
      />
    </div>
  );
}
