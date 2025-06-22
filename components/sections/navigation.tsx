// sticky navigation bar at the top with logos, menus and sign/up button
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BiSolidMagicWand } from "react-icons/bi";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";

import * as m from "@/paraglide/messages.js";
import {Languages} from "@/components/ui/languages";

export const Navigation = React.forwardRef<
  React.HTMLAttributes<HTMLDivElement>,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  return (
    <nav className="fixed z-50 top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between flex-nowrap overflow-x-auto">
        <div className="flex items-center">
          <div className={"relative w-24 h-8 sm:w-28 sm:h-10 md:w-32 md:h-12"}>
            <AspectRatio ratio={3042 / 968}>
              <a href={"/"}>
                <Image
                  src="/tailed-logo-w-name.png"
                  alt="Logo"
                  fill
                  className={"object-contain"}
                  unoptimized
                />
              </a>
            </AspectRatio>
          </div>
        </div>
        <div className={"hidden lg:flex flex-1"}>
          <div className="flex-1 flex justify-center items-center gap-4 xl:gap-5">
            <Button variant={"link"} className={"text-black hover:text-primary text-sm xl:text-base"}>
              <a href={"/business"}>
                {m.for_business()}
              </a>
            </Button>
            <Button variant={"link"} className={"text-black hover:text-primary text-sm xl:text-base"}>
              <a href={"/school"}>
                {m.for_school()}
              </a>
            </Button>
          </div>
          <div className={"flex gap-3 xl:gap-4"}>
            <a href={"https://app.tailed.ca/login"} target={"_blank"}>
              <Button variant={"outline"} className="hover:bg-primary/10 text-sm xl:text-base px-3 xl:px-4">
                {m.sign_in()}
              </Button>
            </a>
            <a href={"https://app.tailed.ca/register"} target={"_blank"}>
              <Button variant={"default"} className="hover:bg-primary/90 text-xs sm:text-sm xl:text-base px-2 sm:px-3 xl:px-4 max-w-[110px] sm:max-w-[140px] truncate w-full">
                {m.get_started()} &nbsp; <BiSolidMagicWand className={"w-4 h-4 xl:w-5 xl:h-5"} />
              </Button>
            </a>
          </div>
        </div>

        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="hover:bg-primary/10 -mr-2">
                <HiMenu className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[350px] p-0">
              <nav className="flex flex-col h-full">
                <div className="flex h-14 items-center justify-between px-4 border-b">
                  <div className="relative w-24 h-8">
                    <AspectRatio ratio={3042 / 968}>
                      <Image
                        src="/tailed-logo-w-name.png"
                        alt="Logo"
                        fill
                        className={"object-contain"}
                        unoptimized
                      />
                    </AspectRatio>
                  </div>
                </div>
                
                <div className="flex-1 overflow-y-auto">
                  <div className="flex flex-col gap-1 p-4">
                    <Link
                      href="/business"
                      className="flex items-center gap-3 px-3 py-2.5 text-base font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {m.for_business()}
                    </Link>
                    <Link
                      href="/school"
                      className="flex items-center gap-3 px-3 py-2.5 text-base font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {m.for_school()}
                    </Link>
                  </div>
                  
                  <div className="flex flex-col gap-3 p-4 border-t">
                    <a href={"https://app.tailed.ca/login"} target={"_blank"} className="w-full">
                      <Button variant={"outline"} className="w-full text-base">
                        {m.sign_in()}
                      </Button>
                    </a>
                    <a href={"https://app.tailed.ca/register"} target={"_blank"} className="w-full">
                      <Button variant={"default"} className="w-full text-base">
                        {m.get_started()} &nbsp; <BiSolidMagicWand className={"w-5 h-5"} />
                      </Button>
                    </a>
                  </div>

                  <div className="flex flex-col gap-1 p-4 border-t">
                    <Link
                      href="/contact"
                      className="flex items-center gap-3 px-3 py-2.5 text-base text-muted-foreground hover:text-primary transition-colors"
                    >
                      {m.contact()}
                    </Link>
                    <Link
                      href="/privacy"
                      className="flex items-center gap-3 px-3 py-2.5 text-base text-muted-foreground hover:text-primary transition-colors"
                    >
                      {m.privacy_policy()}
                    </Link>
                    <Link
                      href="/terms-and-conditions"
                      className="flex items-center gap-3 px-3 py-2.5 text-base text-muted-foreground hover:text-primary transition-colors"
                    >
                      {m.terms_and_conditions()}
                    </Link>
                  </div>
                </div>
                
                <div className="p-4 border-t">
                  <Languages />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
});
