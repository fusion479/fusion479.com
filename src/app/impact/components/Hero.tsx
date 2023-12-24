import Title from "@/components/Title";

export default function Hero() {
  return (
    <div className="flex items-center flex-col-reverse xl:flex-row">
      <img
        src="/impact/hero.png"
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
