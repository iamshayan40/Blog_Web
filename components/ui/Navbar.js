import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ModeToggle } from "./theme-btn";

const Navbar = () => {
  return (
    <nav className="p-4 background/50 sticky top-0 backdrop-blur border-b z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"#"}>
          <div className="text-xl font-bold pl-2">Shayan's Blog</div>
        </Link>
 <div className="hidden md:flex space-x-8 uppercase items-center">
  <Link href="/" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Home</Link>
  <Link href="/about" className="hover:scale-105 hover:font-semibold transition-transform duration-300">About</Link>
  <Link href="/blog" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Blog</Link>
  <Link href="/contact" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Contact</Link>
  <div className="flex items-center">
    <Button className="mx-1 " variant="outline">
      Sign Up
    </Button>
    <Button className="mx-1 " variant="outline">
      Login
    </Button>
    <ModeToggle/>
  </div>
</div>
        <div className="md:hidden">
            <span className="mx-2">
    <ModeToggle/>
            </span>
          <Sheet>
            <SheetTrigger className=" focus:outline-none">
             <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 -5 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold text-2xl pb-6">Shayan's Blog</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-8 text-xl">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                    <div>
                      <Button className="mx-4" variant="outline">
                        Sign Up
                      </Button>
                      <Button className="mx-4" variant="outline">
                        Login
                      </Button>
            
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
