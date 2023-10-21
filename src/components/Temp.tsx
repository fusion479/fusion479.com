import Image from "next/image";
import backgroundImage from "../../public/background.jpg";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-32">
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-logo text-4xl sm:text-5xl text-center text-slate-900">
            Stuy Fusion
          </h1>
          <p className="text-center text-slate-700 mt-2 sm:mt-4">
            Stuyvesant High School's FIRST Tech Challenge team
          </p>
        </div>
      </Container>
    </section>
  );
}
