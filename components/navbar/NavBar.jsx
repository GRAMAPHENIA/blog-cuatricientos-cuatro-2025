import React from "react";
import { ModeToggle } from "../mode-toggle";
import Link from "next/link";

const NavBar = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 lg:px-0 sticky">
      <nav className="bg-card/70 sticky backdrop-blur-md shadow-sm top-5 z-20 rounded-xl border my-4">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold cursor-pointer">404</h1>
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
