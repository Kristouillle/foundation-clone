// using shadcn @/components/ui
// design a footer with logo, contact, privacy, terms&condition links, social media icons, language switcher

import * as m from "@/paraglide/messages";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  SiDiscord,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiYoutube,
} from "react-icons/si";
import { Separator } from "@/components/ui/separator";
import React from "react";
import {Languages} from "@/components/ui/languages";

export const Footer = React.forwardRef<
  React.HTMLAttributes<HTMLDivElement>,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  return (
    <footer className="relative flex flex-col w-full items-center justify-center">
      <div className="md:hidden z-50 absolute -top-10 xs:top-0 sm:top-10 flex mt-4 gap-4 sm:justify-center sm:mt-0 flex-col">
        <div className={"flex gap-6 justify-center"}>
          <a
            href="https://www.facebook.com/profile.php?id=100093963022968"
            target={"_blank"}
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <SiFacebook className={"w-5 h-5"} />
          </a>
          <a
            href="https://www.instagram.com/tailedinc"
            target={"_blank"}
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <SiInstagram className={"w-5 h-5"} />
          </a>
          <a
            href="https://www.linkedin.com/company/tailed"
            target={"_blank"}
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <SiLinkedin className={"w-5 h-5"} />
          </a>
        </div>
        <div className={"flex gap-6 justify-center"}>
          <a
            href="https://github.com/tail-ed"
            target={"_blank"}
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <SiGithub className={"w-5 h-5"} />
          </a>
          <a
            href="https://discord.gg/gpbtFXTgNQ"
            target={"_blank"}
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <SiDiscord className={"w-5 h-5"} />
          </a>
          <a
            href="https://www.youtube.com/@tailedinc/videos"
            target={"_blank"}
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <SiYoutube className={"w-5 h-5"} />
          </a>
        </div>
      </div>
      <div
        className={"relative w-full flex flex-col items-center justify-center"}
      >
        <div className="z-50 hidden md:flex mt-4 gap-4 2xl:gap-6 sm:justify-center sm:mt-0 flex-col">
          <div className={"flex xl:flex-col gap-2"}>
            <Button
              variant={"link"}
              className={"text-black font-normal text-base"}
            >
              <a href={"/contact"}>
                {/*Contact*/}
                {m.contact()}
              </a>
            </Button>
            <Button
              variant={"link"}
              className={"text-black font-normal text-base"}
            >
              <a href={"/privacy"}>
                {/*Privacy Policy*/}
                {m.privacy_policy()}
              </a>
            </Button>
            <Button
              variant={"link"}
              className={"text-black font-normal text-base"}
            >
              <a href={"/terms-and-conditions"}>
                {/*Terms & Conditions*/}
                {m.terms_and_conditions()}
              </a>
            </Button>
            <Languages />
          </div>
          <Separator />
          <div className={"flex gap-6 justify-center"}>
            <a
              href="https://www.facebook.com/profile.php?id=100093963022968"
              target={"_blank"}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <SiFacebook className={"w-5 h-5"} />
            </a>
            <a
              href="https://www.instagram.com/tailedinc"
              target={"_blank"}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <SiInstagram className={"w-5 h-5"} />
            </a>
            <a
              href="https://www.linkedin.com/company/tailed"
              target={"_blank"}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <SiLinkedin className={"w-5 h-5"} />
            </a>
          </div>
          <div className={"flex gap-6 justify-center"}>
            <a
              href="https://github.com/tail-ed"
              target={"_blank"}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <SiGithub className={"w-5 h-5"} />
            </a>
            <a
              href="https://discord.gg/gpbtFXTgNQ"
              target={"_blank"}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <SiDiscord className={"w-5 h-5"} />
            </a>
            <a
              href="https://www.youtube.com/@tailedinc/videos"
              target={"_blank"}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <SiYoutube className={"w-5 h-5"} />
            </a>
          </div>
        </div>
        <div className={"absolute top-0 left-0 w-full"}>
          <AspectRatio ratio={4700 / 1500}>
            <Image
              src="/images/banner4.png"
              alt="Tail'ed Banner"
              fill
              unoptimized
            />
          </AspectRatio>
          <p className="absolute bottom-0 left-0 p-2 text-sm text-gray-800 sm:text-center">
            <span>© {new Date().getFullYear()} Tail'ed</span> <span className={"hidden md:inline-block "}>
            {/*— All rights reserved*/}
            {m.all_rights_reserved()}
          </span>
          </p>
        </div>
      </div>
      {/*<div className={"w-48"}>*/}
      {/*    <AspectRatio ratio={3042 / 968}>*/}
      {/*        <Image src="/tailed-logo-w-name.png" alt="Tail'ed Logo" fill />*/}
      {/*    </AspectRatio>*/}
      {/*</div>*/}
    </footer>
  );
});
