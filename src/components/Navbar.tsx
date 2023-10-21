import Link from "next/link";
import Container from "./Container";

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
      className={`inline-block duration-150 font-light rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 ${
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
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Stuy Fusion Logo"
              className="h-12 w-12 mr-2"
            />
            <span className="font-logo text-xl">Stuy Fusion</span>
          </div>
          <div>
            <Navlink margin href="/">
              Home
            </Navlink>
            <Navlink margin href="/about">
              About
            </Navlink>
            <Navlink href="/team">Team</Navlink>
          </div>
        </nav>
      </Container>
    </header>
  );
}
