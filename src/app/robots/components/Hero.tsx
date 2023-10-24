import Title from "@/components/Title";

export default function Hero() {
  return (
    <div className="flex">
      <img
        src="/placeholder_image.jpg"
        alt="3D model of robot"
        className="w-5/12"
      />
      <div className="w-7/12">
        <Title
          bold="engineers,"
          description={
            "Stuyvesant FTC Team 479 is a robotics team based in New York City that competes in the FIRST Tech Challenge."
          }
        />
      </div>
    </div>
  );
}
