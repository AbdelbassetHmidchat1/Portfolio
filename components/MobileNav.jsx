"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },

  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

function MobileNav() {
  const pathname = usePathname();

  return (
    <>
      <Sheet>
        <SheetTrigger className="flex justify-center items-center ">
          <CiMenuFries className="text-5xl text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center bg-primary">
          <div className="w-full my-32">
            <Link href={"/"}>
              <h1 className="text-4xl text-center">Abdelbasset</h1>
            </Link>
          </div>
          <nav className="flex flex-col items-center justify-center space-y-8">
            {links.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname ? "text-accent" : ""
                } hover:text-accent-hover transition-all group`}
              >
                {link.name}
                <div className="w-0 group-hover:w-full bg-accent h-[1px] transition-all duration-300 " />
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default MobileNav;
