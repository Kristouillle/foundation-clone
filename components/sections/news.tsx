"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import * as m from "@/paraglide/messages.js";

export const News = React.forwardRef<
  React.HTMLAttributes<HTMLDivElement>,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {

  const links = [
    {
      title: m.tout_commence_ici_ep_1(),
      description: m.listen_to_the_latest_tailed_podcast_live_now_on_spotify(),
      link: "https://open.spotify.com/embed/episode/21DtcrM67UqKPZckp0fpgy?utm_source=generator",
      type: "spotify",
    },
    {
      // title: "Tout Commence Ici ep. 2",
      // description: "Listen to the latest Tail'ed Podcast, live now on Spotify!",
        title: m.tout_commence_ici_ep_2(),
        description: m.listen_to_the_latest_tailed_podcast_live_now_on_spotify(),
      link: "https://open.spotify.com/embed/episode/4Llu9rwlrwcYEHwk8A0qP9?utm_source=generator",
      type: "spotify",
    },
    {
      // title: "Tout Commence Ici ep. 3",
      // description: "Listen to the latest Tail'ed Podcast, live now on Spotify!",
        title: m.tout_commence_ici_ep_3(),
        description: m.listen_to_the_latest_tailed_podcast_live_now_on_spotify(),
      link: "https://open.spotify.com/embed/episode/374EoTuQpcRLYacyFdrWON?utm_source=generator",
      type: "spotify",
    },
    {
      // title: "Tout Commence Ici ep. 4",
      // description: "Listen to the latest Tail'ed Podcast, live now on Spotify!",
        title: m.tout_commence_ici_ep_4(),
        description: m.listen_to_the_latest_tailed_podcast_live_now_on_spotify(),
      link: "https://open.spotify.com/embed/episode/5PVuuab1lNpcUfGq00nlIm?utm_source=generator",
      type: "spotify",
    },
    {
      // title: "UOttaHack 6",
      // description: "Relive the electrifying moments of uOttaHack 6, where innovation, collaboration, and fun collide!",
        title: m.uottahack_6(),
        description: m.relive_the_electrifying_moments_of_uottahack_6(),
      link: "https://www.youtube.com/embed/KUSfBsegUqM",
      type: "youtube",
    },
    {
      // title: "Girls Who Hack 2024",
      // description: "Relive the energy from this weekend at Girls Who Hack, McGill University's pioneering initiative aimed at inspiring young girls to explore the realms of technology.",
        title: m.girls_who_hack_2024(),
        description: m.relive_the_energy_from_this_weekend_at_girls_who_hack(),
      link: "https://www.youtube.com/embed/KsN3jh-zpZM",
      type: "youtube",
    },
    {
      // title: "JACHacks 2024",
      // description: "Relive the excitement at JACHacks, John Abbott College's first-ever 24-hour hackathon where students team up to create innovative projects, compete for exciting prizes, and receive guidance from experienced mentors.",
        title: m.jachacks_2024(),
        description: m.relive_the_excitement_at_jachacks(),
      link: "https://www.youtube.com/embed/aTQwrKki43U",
      type: "youtube",
    },
  ];

  return (
    <section id={"news"} className={"flex flex-col w-full gap-6 items-center p-12"}>
      <Badge>
        {/*News*/}
        {m.news()}
      </Badge>
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
        {/*Latest from Tail'ed*/}
        {m.latest_from_tailed()}
      </h2>
      <div className={"flex flex-1 justify-center items-center"}>
        <Carousel
          className="w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[800px] mt-6"
          opts={{ watchDrag: false }}
        >
          <CarouselContent>
            {links.map((data, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-2 sm:p-6">
                      <iframe
                        style={{ borderRadius: "12px" }}
                        src={data.link}
                        width="50%"
                        height="250"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className={"w-full "}
                      />
                      <div className="text-content">
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={"top-0 left-1/2 -translate-y-full -translate-x-full sm:hidden"} />
          <CarouselNext className={"top-0 left-1/2 -translate-y-full translate-x-full sm:hidden"}  />

          <CarouselPrevious className={"hidden sm:inline-flex"} />
          <CarouselNext className={"hidden sm:inline-flex"}  />
        </Carousel>
      </div>
    </section>
  );
});
