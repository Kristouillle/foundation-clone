"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HeroTitleProps {
  preTitle: string;
  title: string;
  postTitle: string;
  preTitleLine2: string;
  audiences: string[];
}

export function HeroTitle({
  preTitle,
  title,
  postTitle,
  preTitleLine2,
  audiences,
}: HeroTitleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let next = currentIndex + 1;
      if (next === audiences.length) {
        next = 0;
      }
      setCurrentIndex(next);
    }, 3000);
  }, [currentIndex]);

  return (
    <div className="mr-auto place-self-center lg:col-span-7">
      <div className={"flex"}>
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center">
          {preTitle}{" "}
          <span
            className={
              "bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
            }
          >
            {title}
          </span>{" "}
          {postTitle}
        </h1>
      </div>
      <div className={"flex justify-center"}>
        <span className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center">
          {preTitleLine2}&nbsp;
        </span>
        <AnimatePresence mode={"popLayout"}>
          {audiences.map((audience, index) => {
            console.log(currentIndex, index);
            if (currentIndex === index)
              return (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                  exit={{ opacity: 0, y: -50 }}
                  key={index}
                  className={"min-w-[26rem]"}
                >
                  <span className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center">
                    {audiences[index]}
                  </span>
                </motion.div>
              );
          })}
        </AnimatePresence>
      </div>
      <span>Connecting </span>
    </div>
  );
}
