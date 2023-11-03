import Image from "next/image";
import logoTransistor from "../../../public/logos/transistor.svg";
import logoTuple from "../../../public/logos/tuple.svg";
import logoStaticKit from "../../../public/logos/statickit.svg";
import logoMirage from "../../../public/logos/mirage.svg";
import logoLaravel from "../../../public/logos/laravel.svg";
import logoStatamic from "../../../public/logos/statamic.svg";

export default function Sponsors() {
  return (
    <div className="mt-36 lg:mt-40">
      <p className="font-display text-base text-gray-50">
        Proudly sponsored by
      </p>
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
