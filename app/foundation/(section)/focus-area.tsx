"use client";

import React, { useEffect, useRef, useState } from "react";
import * as m from "@/paraglide/messages.js"
import Highlighter from "./(components)/highlighter";

export default function FocusArea() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [animate, setAnimate] = useState(false); 

  // Intersection Observer to detect when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true); 
          setAnimate(true); // Trigger animations when the section is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Detect screen width to conditionally render background
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Use `md` breakpoint (768px) for mobile check
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-8 md:py-16 flex flex-col items-center relative overflow-hidden"
      // Remove the background image if on mobile view (less than 768px)
      style={{ backgroundImage: isMobile ? "none" : "url('/images/Focus.png')" }}
    >
      {/* Background Blur Mask */}
      <div
        className={`absolute inset-0 pointer-events-none transition-all duration-1000 ${
          inView ? "scale-100 backdrop-blur-[8px]" : "scale-150 backdrop-blur-[0px]"
        }`}
        style={{
          maskImage: "radial-gradient(circle, transparent 30%, black 100%)",
          WebkitMaskImage: "radial-gradient(circle, transparent 30%, black 70%)",
        }}
      ></div>

      {/* Focus area Title */}
      <div className="px-4 md:px-8 max-w-screen-lg w-full mt-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-6xl text-center font-bold text-black mb-2 relative z-10 font-angelas pt-10 md:pt-20">
          {m.focus_areas()}
        </h2>

        {/* Grid Layout with SVG in the center */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center text-center font-handprinting text-2xl sm:text-3xl md:text-5xl pt-8 md:pt-16 pb-8 md:pb-16">
          {/* First Column */}
          <div>
            <p className="text-gray-800">
              {m.initiatives_that_make_a()} <span> </span>
              <Highlighter 
                text={m.meaningful_difference()} 
                color="blue"
                animate={animate}              
              />
              <span> </span>
              {m.in_small_communities_we_want_to_ensure_students_from()}
              <Highlighter 
                text={m.all_backgrounds()} 
                color="blue"  
                animate={animate}
              />
              <span> </span>
              {m.have_opportunities_to_lead()}
            </p>
          </div>

          {/* SVG in the Center */}
          <div className="flex justify-center md:rotate-0 rotate-90">
            <img src="/images/SVG/fe-separator.svg" className="w-16 md:w-24 h-auto" />
          </div>

          {/* Second Column */}
          <div>
            <p className="text-gray-800">
            {m.initaitives_with_a()} <span> </span>
              <Highlighter 
                  text={m.broad_reach()} 
                  color="green"  
                  animate={animate}
                />
              {" "}
              <span>{m.that_help_students_from()}</span> 
              {" "}
              <Highlighter 
                text={m.various_regions()} 
                color="green"  
                animate={animate}
              />
              {" "}
              {m.connect_collaborate_develop_skills_global_scale()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
