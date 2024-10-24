import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container justify-between items-center flex mx-auto">
        <Link href={"/"}>
          <h1 className="lg:text-4xl text-2xl font-semibold">
            AbdelbassetHere
            <span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>
        <div className=" lg:hidden  ">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
