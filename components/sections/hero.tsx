"use client";
import Image from "next/image";
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import * as m from "@/paraglide/messages.js";
import {languageTag} from "@/paraglide/runtime";

export const Hero = React.forwardRef<
  React.HTMLAttributes<HTMLDivElement>,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {

  let tag = languageTag();

  return (
    <section className="relative w-full py-12 sm:py-24 bg-gradient-to-r from-[#EC7B24] to-[#EC7B24]/[.45] sm:to-transparent text-white overflow-hidden">
      <div className="flex flex-col sm:flex-row p-4 h-full justify-start">
        <div className="flex flex-col w-full sm:w-2/3 items-center justify-center text-center">
          <h1 className="relative text-4xl md:text-6xl font-bold mb-4 z-10">
            {/*Join Tail'ed's tech young talent network*/}
            {m.join_tailed_tech_young_talent_network()}
          </h1>
          <p className="relative text-xl md:text-2xl font-medium mb-8 z-10">
            {/*Empowering the next generation of tech innovators*/}
            {m.empowering_the_next_generation_of_tech_innovators()}
          </p>
          <div className="flex space-x-4 z-10">
            {/*<a*/}
            {/*  className={"w-48 hover:scale-110 transition"}*/}
            {/*  href={"#"}*/}
            {/*  target={"_blank"}*/}
            {/*>*/}
            {/*  <AspectRatio ratio={120 / 40}>*/}
            {/*    <Image*/}
            {/*      src={ tag == "fr" ? "/images/ios-french.svg" : "/images/ios-english.svg"}*/}
            {/*      // src="/images/ios-english.svg"*/}
            {/*      alt="Google Play Badge"*/}
            {/*      fill*/}
            {/*      className={"object-fill"}*/}
            {/*    />*/}
            {/*  </AspectRatio>*/}
            {/*</a>*/}
            <a
              className={
                "w-[214.8571428571429px] block hover:scale-110 transition"
              }
              href={
                "https://play.google.com/store/apps/details?id=ca.tailed.app&pcampaignid=web_share"
              }
              target={"_blank"}
            >
              <AspectRatio ratio={564 / 168}>
                <Image
                  src={
                    tag == "fr"
                      ? "/images/google-play-badge-french.png"
                      : "/images/google-play-badge-english.png"
                  }
                  alt="Google Play Badge"
                  fill
                  className={"object-fill"}
                />
              </AspectRatio>
            </a>
          </div>
          <p className="relative text-lg mt-8 z-10">
            {/*100% free, Always*/}
            {m.free_always()}
          </p>
          {/* Mobile dashboard image below text */}
          <div className="block sm:hidden w-full mt-8">
            <AspectRatio ratio={2285 / 1985}>
              <Image
                src="/images/leader.png"
                alt="Hero"
                fill
                className="object-cover h-full w-full"
                unoptimized
              />
            </AspectRatio>
          </div>
        </div>
        {/* Desktop dashboard image on the right */}
        <div className="flex-1 hidden sm:block">
          <AspectRatio ratio={2285 / 1985}>
            <Image
              src="/images/leader.png"
              alt="Hero"
              fill
              className="object-cover h-full w-full"
              unoptimized
            />
          </AspectRatio>
        </div>
      </div>
      {/* Wave SVG for smooth transition */}
      <div className="absolute xl:-bottom-32 lg:-bottom-16 md:-bottom-16 -bottom-2 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full fill-current text-[#EC7B24]"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,96L48,117.3C96,139,192,181,288,192C384,203,480,181,576,149.3C672,117,768,75,864,69.3C960,64,1056,96,1152,90.7C1248,85,1344,43,1392,21.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
});
