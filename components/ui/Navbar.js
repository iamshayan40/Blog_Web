"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ui/theme-btn";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(30);

    const timer1 = setTimeout(() => {
      setProgress(70);
    }, 100);

    const timer2 = setTimeout(() => {
      setProgress(100);
    }, 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(0);
    }, 900);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <nav className="p-4 bg-opacity-50 sticky top-0 backdrop-blur border-b z-10">
      <LoadingBar
        color="#6028FF"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto flex justify-between items-center">
        <Link href="#">
          <div className="text-xl font-bold pl-2">Shayan's Blog</div>
        </Link>
        <div className="hidden md:flex space-x-8 uppercase items-center">
          <Link href="/" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
            Home
          </Link>
          <Link href="/about" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
            About
          </Link>
          <Link href="/blog" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
            Blog
          </Link>
          <Link href="/contact" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
            Contact
          </Link>
          <div className="flex items-center">
            <Button className="mx-1" variant="outline">
              Sign Up
            </Button>
            <Button className="mx-1" variant="outline">
              Login
            </Button>
            <ModeToggle />
          </div>
        </div>
      <div className="md:hidden flex items-center">
          <span className="mx-2 relative">
       <ModeToggle />
          </span>
          <Sheet>
            <SheetTrigger className="focus:outline-none relative top-0 right-0">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
                <SheetTitle className="font-bold text-sm pb-6">
                  Shayan's Blog
                </SheetTitle>
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
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
