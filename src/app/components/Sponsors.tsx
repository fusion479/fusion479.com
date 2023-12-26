import Image from "next/image";

export default function Sponsors() {
  return (
    <div className="mt-36 xl:mt-54">
      <p className="font-display text-base text-center">Proudly sponsored by</p>
      <ul
        role="list"
        className="mt-4 flex items-center justify-center gap-x-8 gap-y-4 flex-wrap"
      >
        {[
          { src: "/sponsors/abb.png" },
          { src: "/sponsors/conedison.png" },
          { src: "/sponsors/google.png" },
          { src: "/sponsors/nasa.png" },
          { src: "/sponsors/bloomberg.png" },
          { src: "/sponsors/amazon.png" },
        ].map((sponsor, i) => (
          <li key={i} className="flex mt-2">
            <img src={sponsor.src} className="h-7" />
          </li>
        ))}
      </ul>
    </div>
  );
}
