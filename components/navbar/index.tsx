"use client";

import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";

import {Button} from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {Icon, Menu} from "lucide-react";
import {ModeToggle} from "../general/mode-toggle";
import {useTheme} from "next-themes";

const Navbar = () => {
  const {theme, setTheme} = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <div className="relative z-10 bg-card">
      <div className="max-w-[1164px] mx-auto px-4 py-6 flex items-center gap-4 justify-between text-foreground">
        <Image
          src={
            theme === "light"
              ? "/assets/site/logoLight.webp"
              : "/assets/site/logoDark.webp"
          }
          alt="Logo"
          width={200}
          height={200}
        />

        <div className="hidden md:flex items-center gap-4">
          <Button variant="default" className="hidden md:block" asChild>
            <Link href="/dashboard/narrativeFunds">Launch App</Link>
          </Button>

          <ModeToggle />
        </div>

        <div className="flex md:hidden">
          <Sheet>
            <div className="flex items-center gap-2">
              <ModeToggle />
              <SheetTrigger asChild>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <Menu />
                  </Button>
                </div>
              </SheetTrigger>
            </div>
            <SheetContent showX side="left">
              <SheetHeader className="mb-8">
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>

              <div className=" flex flex-col items-left gap-4 ">
                <SheetClose asChild>
                  <Link href="#" className="text-base  w-max">
                    Why Narratives
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="#" className="text-base  w-max">
                    Resources
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="#" className="text-base  w-max">
                    Products
                  </Link>
                </SheetClose>

                <div className="flex items-center gap-4">
                  <Button variant="default" asChild>
                    <Link href="/dashboard/narrativeFunds">Launch App</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
