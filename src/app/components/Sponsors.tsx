import Image from "next/image";
import logoTransistor from "../../../public/sponsors/transistor.svg";
import logoTuple from "../../../public/sponsors/tuple.svg";
import logoStaticKit from "../../../public/sponsors/statickit.svg";
import logoMirage from "../../../public/sponsors/mirage.svg";
import logoLaravel from "../../../public/sponsors/laravel.svg";
import logoStatamic from "../../../public/sponsors/statamic.svg";

export default function Sponsors() {
  return (
    <div className="mt-36 xl:mt-54">
      <p className="font-display text-base text-white">Proudly sponsored by</p>
      <ul
        role="list"
        className="mt-4 flex items-center justify-center gap-x-8 flex-wrap"
      >
        {[
          { name: "Transistor", logo: logoTransistor },
          { name: "Tuple", logo: logoTuple },
          { name: "StaticKit", logo: logoStaticKit },
          { name: "Mirage", logo: logoMirage },
          { name: "Laravel", logo: logoLaravel },
          { name: "Statamic", logo: logoStatamic },
        ].map((sponsor) => (
          <li key={sponsor.name} className="flex">
            <Image src={sponsor.logo} alt={sponsor.name} priority />
          </li>
        ))}
      </ul>
    </div>
  );
}
