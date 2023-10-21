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
        className="mt-4 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
      >
        {[
          [
            { name: "Transistor", logo: logoTransistor },
            { name: "Tuple", logo: logoTuple },
            { name: "StaticKit", logo: logoStaticKit },
          ],
          [
            { name: "Mirage", logo: logoMirage },
            { name: "Laravel", logo: logoLaravel },
            { name: "Statamic", logo: logoStatamic },
          ],
        ].map((group, groupIndex) => (
          <li key={groupIndex}>
            <ul
              role="list"
              className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
            >
              {group.map((company) => (
                <li key={company.name} className="flex">
                  <Image src={company.logo} alt={company.name} priority />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
