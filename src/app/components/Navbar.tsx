import Link from "next/link";
import Container from "../../components/Container";

function Navlink({
  href,
  children,
  margin,
}: {
  href: string;
  children: React.ReactNode;
  margin?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-block hover:-translate-y-1 duration-150 font-light rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-blue-600 ${
        margin && "mr-6"
      }`}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="py-10">
      <Container>
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center cursor-pointer">
            <img
              src="/logo.png"
              alt="Stuy Fusion Logo"
              className="h-12 w-12 mr-2"
            />
            <span className="font-cursive text-xl text-blue-700">
              Stuy Fusion
            </span>
          </Link>
          <div className="hidden sm:block">
            <Navlink margin href="/">
              Home
            </Navlink>
            <Navlink margin href="/about">
              About
            </Navlink>
            <Navlink href="/impact">Impact</Navlink>
            <div className="mx-6 inline-block font-thin">|</div>
            <Navlink href="/robots">Robots</Navlink>
          </div>
        </nav>
      </Container>
    </header>
  );
}
