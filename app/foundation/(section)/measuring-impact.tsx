"use client";

import ApplicationCard from './(components)/ApplicationCard';
import * as m from "@/paraglide/messages.js"

export default function MeasuringImpact() {
    return (
        <section className="relative w-full bg-[#EB7A24] pb-16 flex flex-col items-center">
            {/* Title and underline */}
            <div className="text-left w-full max-w-screen-lg pb-8 px-4">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black relative z-10">{m.measuring_impact()}</h2>
                <div className="mt-[-8px] ml-4 w-32 md:w-56 ">
                    <img src='/images/SVG/me-header-line.svg' className="w-full h-auto"/>
                </div>
            </div>

            {/* Background Line SVG */}
            <div className="absolute inset-0 z-1 justify-center hidden xl:flex -translate-x-[1.7em] -translate-y-[1px]">
                <img src='/images/SVG/me-background-line.svg' className="w-full h-auto"/>
            </div>

            {/* Cards Wrapper */}
            <div className="relative z-10 flex flex-col md:flex-row justify-center items-center xl:px-16 space-y-8 md:space-y-0 md:space-x-8 xl:space-x-48">
                {/* Card 7 */}
                <div className="relative mt-4 md:mt-64 order-3 xl:order-1 flex-shrink-0 w-full md:w-80 flex justify-center">
                    <div className="absolute left-[-3em] md:left-[-6em] top-16 md:top-32">
                        <img src='/images/SVG/me-step7-smile.svg' className="w-12 md:w-20 h-auto"/>
                    </div>
                    <ApplicationCard
                        number="07"
                        title={m.ap_step7()}
                        content={m.ap_step7_description()}
                    />
                </div>

                {/* Card 6 */}
                <div className="relative mt-4 md:mt-36 order-2 flex-shrink-0 w-full md:w-80">
                    <ApplicationCard
                        number="06"
                        title={m.ap_step6()}
                        content={m.ap_step6_description()}
                        svgTopLeft={<img src='/images/SVG/me-step6-star-tl.svg'/>}
                        svgTopRight={<img src='/images/SVG/me-step6-star-tr.svg'/>}
                        svgBottomLeft={<img src='/images/SVG/me-step6-star-bl.svg'/>}
                    />
                </div>

                {/* Card 5 */}
                <div className="relative mt-4 md:mt-64 order-1 xl:order-3 md:pb-48 flex-shrink-0 w-full md:w-80 flex justify-center">
                    <ApplicationCard
                        number="05"
                        title={m.ap_step5()}
                        content={m.ap_step5_description()}
                        
                    />
                </div>
            </div>

        </section>
    );
}
