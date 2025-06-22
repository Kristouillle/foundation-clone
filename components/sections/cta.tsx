"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

import * as m from "@/paraglide/messages.js";

export const CTA1 = React.forwardRef<
  React.HTMLAttributes<HTMLDivElement>,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  const [hoverState, setHoverState] = useState("");

  const onMouseEnter = () => {
    setHoverState("scale-x-[-1]");
  };

  const onMouseLeave = () => {
    setHoverState("");
  };

  return (
    <section
      id={"cta1"}
      className={
        "flex flex-col w-full sm:w-1/2 sm:min-w-[600px] h-full gap-6 items-center justify-center py-6"
      }
    >
      <div
        className={"w-2/3 h-full cursor-pointer hover:transition duration-300"}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <a href={"https://app.tailed.ca/register"} target={"_blank"}>
          <AspectRatio ratio={6600 / 1650}>
            <Image
              src="/images/banner.png"
              alt="Tail'ed Banner"
              fill
              unoptimized
              className={cn("rounded-lg transition duration-500", hoverState)}
            />
            <div className={"flex h-full"}>
              <div
                className={cn(
                  "relative h-full w-1/2 flex items-center justify-center",
                  !hoverState
                    ? "transition duration-1000 ease-out opacity-100"
                    : "opacity-0"
                )}
              >
                <h1
                  className={
                    "w-2/3 text-sm sm:text-base xl:text-xl 2xl:text-2xl font-bold text-white"
                  }
                >
                  {/*Join your Tech Young Talent Network*/}
                    {m.join_your_tech_young_talent_network()}
                </h1>
              </div>
              <div
                className={cn(
                  "relative h-full w-1/2 flex items-center justify-center",
                  !!hoverState
                    ? "transition duration-1000 ease-out opacity-100"
                    : "opacity-0"
                )}
              >
                <h1
                  className={
                    "w-1/2 text-sm sm:text-base xl:text-xl 2xl:text-2xl font-bold text-white"
                  }
                >
                  {/*Get Started*/}
                    {m.get_started()}
                </h1>
              </div>
            </div>
          </AspectRatio>
        </a>
      </div>
    </section>
  );
});

export const CTA2 = React.forwardRef<
  React.HTMLAttributes<HTMLDivElement>,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  return <p>CTA2 Section</p>;
});
