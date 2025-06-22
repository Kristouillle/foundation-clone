"use client";
// using shadcn @/components/ui
// design a feature list using the tabs, card,
// tabs should be on the left side of the card and the right is the content of the selected tab

import * as m from "@/paraglide/messages";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  SiDevpost, SiGamejolt, SiGamemaker,
  SiGithub,
  SiGithubactions,
  SiGithubpages,
  SiGithubsponsors,
} from "react-icons/si";
import React, {useEffect, useRef, useState} from "react";
import {GiGameConsole} from "react-icons/gi";
import {LiaTrophySolid} from "react-icons/lia";
import {LuFileText} from "react-icons/lu";
import {FaFilePdf} from "react-icons/fa";
import { useInView } from "framer-motion";
import {IoGameController} from "react-icons/io5";
import {cn} from "@/lib/utils";

// Features are :
// Associations
// Events
// Coding Challenges
// Internships
// Portfolios

export const Features = React.forwardRef<
  React.HTMLAttributes<HTMLDivElement>,
  React.HTMLAttributes<HTMLDivElement>
>(() => {

  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  return (
    <section
      id={"features"}
      className={"flex flex-col w-full gap-6 items-center py-12"}
      ref={ref}
    >
      <Badge>
        {/*Features*/}
        {m.features()}
      </Badge>
      <h2
        className={
          cn("scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 px-6 sm:px-0 ease-in-out duration-500",
            // isInView ? "opacity-100 -translate-x-40" : "opacity-0",
              )
        }
      >
        {/*Unlock Your Potential With The Opportunities*/}
        {m.unlock_your_potential_with_the_opportunities()}
      </h2>
      <Tabs
        defaultValue="associations"
        // className="bg-muted hidden md:w-[600px] h-[450px] min-h-0 md:flex rounded-xl"
        className="bg-muted hidden md:w-1/2 h-[450px] md:min-w-[600px] min-h-0 md:flex rounded-xl"
      >
        <TabsList className={"w-1/3 p-4 flex flex-col h-full justify-start"}>
          <div
            className={
              "flex flex-col h-full w-full gap-2 bg-white rounded-lg p-4"
            }
          >
            <TabsTrigger
              value="associations"
              className="py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition duration-300 ease-linear"
            >
              {/*Associations*/}
                {m.associations()}
            </TabsTrigger>
            <TabsTrigger
              value="events"
              className="py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition duration-300 ease-linear"
            >
              {/*Events*/}
                {m.events()}
            </TabsTrigger>
            <TabsTrigger
              value="coding-challenges"
              className="py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition duration-300 ease-linear"
            >
              {/*Coding Challenges*/}
                {m.coding_challenges()}
            </TabsTrigger>
            <TabsTrigger
              value="internships"
              className="py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition duration-300 ease-linear"
            >
              {/*Internships*/}
                {m.internships()}
            </TabsTrigger>
            <TabsTrigger
              value="portfolios"
              className="py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition duration-300 ease-linear"
            >
              {/*Portfolios*/}
                {m.portfolios()}
            </TabsTrigger>
          </div>
        </TabsList>
        <div className="flex-1">
          <TabsContent value="associations">
            <CardHeader>
              <CardTitle>
                {/*Associations*/}
                    {m.associations()}
              </CardTitle>
              <CardDescription>
                {/*Discover associations and join them to meet new people.*/}
                {m.discover_associations_and_join_them_to_meet_new_people()}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 w-full flex justify-center">
              <div className={"w-[300px]"}>
                <AspectRatio ratio={1}>
                  <Image
                    src={"/images/associations-feature.png"}
                    alt={"associations"}
                    fill
                    className={"object-cover h-full w-full"}
                    unoptimized
                  />
                </AspectRatio>
              </div>
            </CardContent>
          </TabsContent>
          <TabsContent value="events">
            <CardHeader>
              <CardTitle>
                {/*Events*/}
                    {m.events()}
              </CardTitle>
              <CardDescription>
                {/*Find hackathons, workshops, networking events happening near you.*/}
                {m.find_hackathons_workshops_networking_events_happening_near_you()}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 w-full flex justify-center">
              <div className={" w-[300px]"}>
                <AspectRatio ratio={1}>
                  <Image
                    src={"/images/events-feature.png"}
                    alt={"events"}
                    fill
                    className={"object-cover h-full w-full"}
                    unoptimized
                  />
                </AspectRatio>
              </div>
            </CardContent>
          </TabsContent>
          <TabsContent value="coding-challenges">
            <CardHeader>
              <CardTitle>
                {/*Coding Challenges*/}
                    {m.coding_challenges()}
              </CardTitle>
              <CardDescription>
                {/*Compete with your friends in coding challenges.*/}
                {m.compete_with_your_friends_in_coding_challenges()}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 w-full flex justify-center">
              <div className={"w-[300px]"}>
                <AspectRatio ratio={1}>
                  <Image
                    src={"/images/coding-challenge.png"}
                    alt={"coding challenges"}
                    fill
                    className={"object-cover h-full w-full"}
                    unoptimized
                  />
                </AspectRatio>
              </div>
            </CardContent>
          </TabsContent>
          <TabsContent value="internships">
            <CardHeader>
              <CardTitle>
                {/*Internships*/}
                    {m.internships()}
              </CardTitle>
              <CardDescription>
                {/*Apply to internships and get hired by top companies.*/}
                {m.apply_to_internships_and_get_hired_by_top_companies()}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 w-full flex justify-center">
              <div className={"w-[300px]"}>
                <AspectRatio ratio={1}>
                  <Image
                    src={"/images/internships-feature.png"}
                    alt={"internships"}
                    fill
                    className={"object-cover h-full w-full"}
                    unoptimized
                  />
                </AspectRatio>
              </div>
            </CardContent>
          </TabsContent>
          <TabsContent value="portfolios">
            <CardHeader>
              <CardTitle>
                {/*Portfolios*/}
                    {m.portfolios()}
              </CardTitle>
              <CardDescription>
                {/*Build your portfolio and showcase your projects.*/}
                {m.build_your_portfolio_and_showcase_your_projects()}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 w-full flex justify-center">
              <div className={" w-[300px] h-[300px]"}>
                <PortfolioFeatures />
              </div>
            </CardContent>
          </TabsContent>
        </div>
      </Tabs>

      <Tabs
        defaultValue="associations"
        className="md:hidden min-h-0 rounded-xl w-full"
      >
        <div className={"w-full"}>
          <TabsList
            className={
              "w-full p-4 flex flex-wrap h-full items-start justify-start gap-2 bg-transparent"
            }
          >
            <TabsTrigger
              value="associations"
              className="w-fit py-1 rounded-full border data-[state=inactive]:font-normal data-[state=inactive]:border-1 data-[state=inactive]:border-muted-foreground/50 data-[state=active]:bg-primary data-[state=active]:border-1 data-[state=active]:border-primary  data-[state=active]:text-primary-foreground transition duration-300 ease-linear"
            >
              {/*Associations*/}
                {m.associations()}
            </TabsTrigger>
            <TabsTrigger
              value="events"
              className="w-fit py-1 rounded-full border data-[state=inactive]:font-normal data-[state=inactive]:border-1 data-[state=inactive]:border-muted-foreground/50 data-[state=active]:bg-primary data-[state=active]:border-1 data-[state=active]:border-primary  data-[state=active]:text-primary-foreground transition duration-300 ease-linear"
            >
              {/*Events*/}
                {m.events()}
            </TabsTrigger>
            <TabsTrigger
              value="coding-challenges"
              className="w-fit py-1 rounded-full border data-[state=inactive]:font-normal data-[state=inactive]:border-1 data-[state=inactive]:border-muted-foreground/50 data-[state=active]:bg-primary data-[state=active]:border-1 data-[state=active]:border-primary  data-[state=active]:text-primary-foreground transition duration-300 ease-linear"
            >
              {/*Coding Challenges*/}
                {m.coding_challenges()}
            </TabsTrigger>
            <TabsTrigger
              value="internships"
              className="w-fit py-1 rounded-full border data-[state=inactive]:font-normal data-[state=inactive]:border-1 data-[state=inactive]:border-muted-foreground/50 data-[state=active]:bg-primary data-[state=active]:border-1 data-[state=active]:border-primary  data-[state=active]:text-primary-foreground transition duration-300 ease-linear"
            >
              {/*Internships*/}
                {m.internships()}
            </TabsTrigger>
            <TabsTrigger
              value="portfolios"
              className="w-fit py-1 rounded-full border data-[state=inactive]:font-normal data-[state=inactive]:border-1 data-[state=inactive]:border-muted-foreground/50 data-[state=active]:bg-primary data-[state=active]:border-1 data-[state=active]:border-primary  data-[state=active]:text-primary-foreground transition duration-300 ease-linear"
            >
              {/*Portfolios*/}
                {m.portfolios()}
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="associations">
          <CardHeader>
            <CardTitle>
              {/*Associations*/}
                    {m.associations()}
            </CardTitle>
            <CardDescription>
              {/*Discover associations and join them to meet new people.*/}
                {m.discover_associations_and_join_them_to_meet_new_people()}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 w-full flex justify-center">
            <div className={"w-[300px]"}>
              <AspectRatio ratio={1}>
                <Image
                  src={"/images/associations-feature.png"}
                  alt={"associations"}
                  fill
                  className={"object-cover h-full w-full"}
                  unoptimized
                />
              </AspectRatio>
            </div>
          </CardContent>
        </TabsContent>
        <TabsContent value="events">
          <CardHeader>
            <CardTitle>
              {/*Events*/}
                    {m.events()}
            </CardTitle>
            <CardDescription>
              {/*Find hackathons, workshops, networking events happening near you.*/}
                {m.find_hackathons_workshops_networking_events_happening_near_you()}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 w-full flex justify-center">
            <div className={" w-[300px]"}>
              <AspectRatio ratio={1}>
                <Image
                  src={"/images/events-feature.png"}
                  alt={"events"}
                  fill
                  className={"object-cover h-full w-full"}
                  unoptimized
                />
              </AspectRatio>
            </div>
          </CardContent>
        </TabsContent>
        <TabsContent value="coding-challenges">
          <CardHeader>
            <CardTitle>
              {/*Coding Challenges*/}
                    {m.coding_challenges()}
            </CardTitle>
            <CardDescription>
              {/*Compete with your friends in coding challenges.*/}
                {m.compete_with_your_friends_in_coding_challenges()}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 w-full flex justify-center">
            <div className={" w-[300px]"}>
              <AspectRatio ratio={1}>
                <Image
                  src={"/images/coding-challenge.png"}
                  alt={"coding-challenges"}
                  fill
                  className={"object-cover h-full w-full"}
                  unoptimized
                />
              </AspectRatio>
            </div>
          </CardContent>
        </TabsContent>
        <TabsContent value="internships">
          <CardHeader>
            <CardTitle>
              {/*Internships*/}
                    {m.internships()}
            </CardTitle>
            <CardDescription>
              {/*Apply to internships and get hired by top companies.*/}
                {m.apply_to_internships_and_get_hired_by_top_companies()}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 w-full flex justify-center">
            <div className={" w-[300px]"}>
              <AspectRatio ratio={1}>
                <Image
                  src={"/images/internships-feature.png"}
                  alt={"internships"}
                  fill
                  className={"object-cover h-full w-full"}
                  unoptimized
                />
              </AspectRatio>
            </div>
          </CardContent>
        </TabsContent>
        <TabsContent value="portfolios">
          <CardHeader>
            <CardTitle>
              {/*Portfolios*/}
                    {m.portfolios()}
            </CardTitle>
            <CardDescription>
              {/*Build your portfolio and showcase your projects.*/}
                {m.build_your_portfolio_and_showcase_your_projects()}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 w-full flex justify-center">
            <div className={"w-[300px] h-[300px]"}>
              <PortfolioFeatures />
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>

      {/* Mobile Features List */}
      <div className="flex flex-col gap-6 w-full md:hidden px-4">
        <div className="bg-white rounded-lg p-4 shadow">
          <h3 className="font-semibold text-lg mb-2">{m.associations()}</h3>
          <p className="mb-2">{m.discover_associations_and_join_them_to_meet_new_people()}</p>
          <div className="w-full flex justify-center mb-2">
            <AspectRatio ratio={1}>
              <Image src={"/images/associations-feature.png"} alt={"associations"} fill className={"object-cover h-full w-full"} unoptimized />
            </AspectRatio>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow">
          <h3 className="font-semibold text-lg mb-2">{m.events()}</h3>
          <p className="mb-2">{m.find_hackathons_workshops_networking_events_happening_near_you()}</p>
          <div className="w-full flex justify-center mb-2">
            <AspectRatio ratio={1}>
              <Image src={"/images/events-feature.png"} alt={"events"} fill className={"object-cover h-full w-full"} unoptimized />
            </AspectRatio>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow">
          <h3 className="font-semibold text-lg mb-2">{m.coding_challenges()}</h3>
          <p className="mb-2">{m.compete_with_your_friends_in_coding_challenges()}</p>
          <div className="w-full flex justify-center mb-2">
            <AspectRatio ratio={1}>
              <Image src={"/images/coding-challenge.png"} alt={"coding challenges"} fill className={"object-cover h-full w-full"} unoptimized />
            </AspectRatio>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow">
          <h3 className="font-semibold text-lg mb-2">{m.internships()}</h3>
          <p className="mb-2">{m.apply_to_internships_and_get_hired_by_top_companies()}</p>
          <div className="w-full flex justify-center mb-2">
            <AspectRatio ratio={1}>
              <Image src={"/images/internships-feature.png"} alt={"internships"} fill className={"object-cover h-full w-full"} unoptimized />
            </AspectRatio>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow">
          <h3 className="font-semibold text-lg mb-2">{m.portfolios()}</h3>
          <p className="mb-2">{m.showcase_your_projects_and_skills_with_portfolios()}</p>
          <div className="w-full flex justify-center mb-2">
            <AspectRatio ratio={1}>
              <Image src={"/images/portfolio-feature.png"} alt={"portfolios"} fill className={"object-cover h-full w-full"} unoptimized />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
});

function PortfolioFeatures() {

  const OnMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  }

  const [cloned, setCloned] = useState<Map<string, boolean>>(new Map<string, boolean>());

  function onMove(capture: any, overlay: any) {
    return (event: any) => {
      const x = event.pageX - capture.offsetLeft;
      const y = event.pageY - capture.offsetTop;

      overlay.style.setProperty("--glow-x", `${x}px`);
      overlay.style.setProperty("--glow-y", `${y}px`);
      overlay.style.setProperty("--glow-opacity", "1");
    };
  }

  function onTouchMove(capture: any, overlay: any) {
    return (event: any) => {
      var movedTouch = event.touches[0];

      const x = movedTouch.pageX - capture.offsetLeft;
      const y = movedTouch.pageY - capture.offsetTop;

      overlay.style.setProperty("--glow-x", `${x}px`);
      overlay.style.setProperty("--glow-y", `${y}px`);
      overlay.style.setProperty("--glow-opacity", "1");
    };
  }

  function onLeave(overlay: any) {
    return () => {
      overlay.style.setProperty("--glow-opacity", "0");
    };
  }

  useEffect(() => {
    const captures = document.querySelectorAll(".glow-capture")

    captures.forEach((capture: any) => {
      // Clone a child element. For example, we can clone the first child.

      if (!cloned.has(capture)) {

        const clonedChild = capture.children[0].cloneNode(true)
        const overlay = capture.querySelector(".glow-overlay")

        // Append the cloned child to the overlay.
        overlay.appendChild(clonedChild)

        cloned.set(capture, true)


        overlay.style.setProperty("--glow-x", `150px`)
        overlay.style.setProperty("--glow-y", `150px`)
        overlay.style.setProperty("--glow-opacity", "1")

        capture.addEventListener("mousemove", onMove(capture, overlay))
        capture.addEventListener("touchmove", onTouchMove(capture, overlay))

        // Add mouseleave event to remove the glow effect
        capture.addEventListener("mouseleave", onLeave(overlay))
        capture.addEventListener("touchend", onLeave(overlay))
      }
    })
  }, []);

  return (
    <div
      className={"relative w-full h-full glow-capture"}
      onMouseMove={OnMouseMove}
    >
      <div className={"relative w-full h-full rounded-lg glow border-2 glow:border-glow glow:bg-glow/[.15]"}>
        <div className="absolute top-[25%] left-[1%]">
          <SiGithub className={"w-12 h-12"}/>
        </div>
        <div
            className="absolute top-[10%] left-[40%]">
          <SiDevpost className={"w-12 h-12 text-[#003E54]"}/>
        </div>
        <div
            className="absolute top-[45%] right-[10%]">
          {/*<IoGameController className={"w-12 h-12"}/>*/}
          <svg id="svg2" className={"w-12 h-12"} viewBox="0 0 500 670" xmlns="http://www.w3.org/2000/svg">
            <desc>Source: openclipart.org/detail/209545</desc>
            <defs></defs>
            <path d="M 487.565 277.763 C 466.355 181.873 434.435 130.693 387.085 116.713 C 377.131 113.793 366.807 112.334 356.435 112.383 C 342.725 112.383 330.785 115.723 318.155 119.263 C 302.935 123.533 285.645 128.383 260.435 128.383 C 235.225 128.383 217.925 123.543 202.675 119.273 C 190.035 115.723 178.105 112.383 164.435 112.383 C 153.709 112.345 143.03 113.799 132.705 116.703 C 85.605 130.623 53.705 181.783 32.185 277.703 C 9.045 380.923 20.435 446.093 64.125 461.213 C 70.113 463.324 76.415 464.412 82.765 464.433 C 112.695 464.433 136.695 439.503 153.095 419.093 C 171.625 395.993 193.315 384.273 260.435 384.273 C 320.385 384.273 345.195 392.403 366.625 419.093 C 380.095 435.873 392.825 447.613 405.525 455.003 C 422.415 464.823 439.295 467.003 455.685 461.373 C 481.505 452.563 496.305 429.273 499.685 392.133 C 502.255 363.653 498.295 326.243 487.565 277.763 Z M 212.435 272.383 L 180.435 272.383 L 180.435 304.383 C 180.435 316.699 167.101 324.397 156.435 318.239 C 151.484 315.381 148.435 310.099 148.435 304.383 L 148.435 272.383 L 116.435 272.383 C 104.118 272.383 96.42 259.049 102.578 248.383 C 105.436 243.432 110.718 240.383 116.435 240.383 L 148.435 240.383 L 148.435 208.383 C 148.435 196.066 161.768 188.368 172.435 194.526 C 177.385 197.384 180.435 202.666 180.435 208.383 L 180.435 240.383 L 212.435 240.383 C 224.751 240.383 232.449 253.716 226.291 264.383 C 223.433 269.333 218.151 272.383 212.435 272.383 Z M 296.435 276.383 C 281.039 276.383 271.416 259.716 279.114 246.383 C 286.812 233.049 306.057 233.049 313.755 246.383 C 315.51 249.423 316.435 252.872 316.435 256.383 C 316.435 267.428 307.48 276.383 296.435 276.383 Z M 340.435 320.383 C 325.039 320.383 315.416 303.716 323.114 290.383 C 330.812 277.049 350.057 277.049 357.755 290.383 C 359.519 293.438 360.443 296.905 360.435 300.433 C 360.407 311.459 351.461 320.383 340.435 320.383 Z M 340.435 232.383 C 325.039 232.383 315.416 215.716 323.114 202.383 C 330.812 189.049 350.057 189.049 357.755 202.383 C 359.51 205.423 360.435 208.872 360.435 212.383 C 360.435 223.428 351.48 232.383 340.435 232.383 Z M 384.435 276.383 C 369.039 276.383 359.416 259.716 367.114 246.383 C 374.812 233.049 394.057 233.049 401.755 246.383 C 403.51 249.423 404.435 252.872 404.435 256.383 C 404.435 267.428 395.48 276.383 384.435 276.383 Z"></path>
            <ellipse style={{stroke: "rgb(0, 0, 0)", fill: "rgb(255, 230, 78)"}} cx="340.215" cy="212.269" rx="20.211" ry="20.211"></ellipse>
            <ellipse style={{stroke: "rgb(0, 0, 0)", fill: "rgb(255, 73, 73)"}} cx="384.509" cy="256.95" rx="20.211" ry="20.211"></ellipse>
            <ellipse style={{stroke: "rgb(0, 0, 0)", fill: "rgb(100, 255, 86)"}} cx="340.05" cy="300.004" rx="20.211" ry="20.211"></ellipse>
            <ellipse style={{stroke: "rgb(0, 0, 0)", fill: "rgb(112, 180, 255)"}} cx="296.679" cy="256.089" rx="20.211" ry="20.211"></ellipse>
          </svg>
        </div>
        <div
            className="absolute bottom-[20%] left-[15%]">
          <LiaTrophySolid className={"w-12 h-12 text-[#D58D02]"}/>
        </div>
        <div
            className="absolute bottom-[10%] right-[21%] text-[#AD0B00]">
          <FaFilePdf className={"w-12 h-12"}/>
        </div>
        <svg id={"portfolios"} viewBox="0 0 800 800" className={"absolute glow glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15]"}>
          <path
              d="M 110 250 Q 268 227 272 285 Q 284 359 400 400 "
              stroke="currentColor"
              strokeWidth="10"
              fill="none"
          />
          <path
              d="M 380 200 Q 296 240 360 276 Q 433 298 400 400"
              stroke="currentColor"
              strokeWidth="10"
              fill="none"
          />
          <path
              d="M 653 386 Q 605 309 549 308 Q 482 308 400 400"
              stroke="currentColor"
              strokeWidth="10"
              fill="none"
          />
          <path
              d="M 550 595 Q 556 493 488 478 Q 430 458 400 400"
              stroke="currentColor"
              strokeWidth="10"
              fill="none"
          />
          <path
              d="M 200 535 Q 273 435 318 445 Q 376 455 400 400"
              stroke="currentColor"
              strokeWidth="10"
              fill="none"
          />
        </svg>
        <div
            className="absolute top-[42%] left-[44%] w-12 h-12">
          <AspectRatio ratio={1}>
            <Image src={"/tailed-512x512.png"} alt={"Tail'ed Logo"} fill className={"w-12 h-12"}
                   unoptimized />
          </AspectRatio>
        </div>
      </div>
      <div className="glow-overlay absolute rounded-lg"></div>
      {/*</div>*/}
      {/*<h1 className="ETLtext"><span id="oj">Tail'ed</span> is your Hotspot for building <span id="oj">YOUR</span> future</h1>*/}

    </div>

  );
}

function glow() {
  return (
  <div className="relative glow-capture">
    <div className="group bg-zinc-900/50 border-4 border-white/5 rounded-2xl p-10 shadow-lg shadow-black/80 flex md:flex-row flex-col flex-wrap md:items-start items-center md:justify-between justify-center gap-6 backdrop-blur-md glow glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15]">
      <div className="flex-1 md:order-1 order-2">
        <p className="opacity-50">Tropical fish</p>
        <h2 className="font-bold text-4xl tracking-tighter mb-3 glow:text-glow/[.15]">
          Banana Wrasse
        </h2>
        <div className="md:prose-base prose-lg prose-zinc prose-invert text-opacity-90">
          <p>
            The Banana Wrasse is known for its vibrant yellow color and
            elongated body, resembling a banana.
          </p>
          <p>
            This active and playful fish thrives in tropical reef
            environments, often seen darting among corals and rocks.
          </p>
        </div>

        <button className="font-semibold px-6 bg-zinc-950/50 backdrop-blur-md py-3 rounded-xl text-white/90 border-2 border-white/10 mt-6 glow:ring-1 glow:border-glow glow:ring-glow">
          Learn more
        </button>
      </div>
    </div>
    <div className="glow-overlay"></div>
  </div>
)
}
