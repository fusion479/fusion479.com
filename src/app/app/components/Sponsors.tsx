import Image from "next/image";

import abb from "../../../public/sponsors/abb.png";
import conedison from "../../../public/sponsors/conedison.png";
import google from "../../../public/sponsors/google.png";
import nasa from "../../../public/sponsors/nasa.png";
import bloomberg from "../../../public/sponsors/bloomberg.png";
import amazon from "../../../public/sponsors/amazon.png";

export default function Sponsors() {
  return (
    <div className="mt-36 xl:mt-54">
      <p className="font-display text-base text-center">Proudly sponsored by</p>
      <ul
        role="list"
        className="mt-4 flex items-center justify-center gap-x-8 gap-y-4 flex-wrap"
      >
        {[abb, conedison, google, nasa, bloomberg, amazon].map((sponsor, i) => (
          <li key={i} className="flex mt-2">
            <Image
              src={sponsor}
              alt="Image: logo of one of our many wonderful sponsors"
              height={28}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
