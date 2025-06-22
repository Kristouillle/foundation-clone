"use client";

import ApplicationCard from './(components)/ApplicationCard';
import * as m from "../../../paraglide/messages.js"

export default function ApplicationProcess() {
    return (
        <section className="relative w-full bg-[#EB7A24] py-16 flex flex-col items-center">
            {/* Title and underline */}
            <div className="mb-8 text-right w-full max-w-screen-lg px-4">
                <h2 className="text-4xl font-bold text-black mb-2 relative z-10">{m.application_process()}</h2>
                <div className="mt-[-16px] ml-[-30px] flex justify-end">
                    <img src='/images/SVG/ap-header-line.svg'/>
                </div>
            </div>

            {/* Background Line SVG */}
            <div className="absolute t-0 inset-0 z-1 flex justify-center invisible xl:visible">
                <img src='/images/SVG/ap-background-line.svg'/>
            </div>

            {/* Cards Wrapper */}
            <div className="relative z-10 flex flex-col md:flex-row justify-center flex-wrap px-4 md:px-16">
                {/* Card 1 */}
                <div className="relative mt-8  w-full md:w-auto md:mx-4">
                    {/* SVG behind Card 1 */}
                    <div className="absolute top-0 -left-12" >
                        <img src='/images/SVG/ap-step1-circle.svg'/>
                    </div>
                    <ApplicationCard 
                        number="01"
                        title={m.ap_step1()}
                        content={
                            <>
                                {m.ap_step1_description()} <span> </span>
                                <a href="https://forms.gle/3iqrePh2r7Zv7tKo6" target="_blank" className="text-[#EB7A24] underline decoration-wavy ">
                                    {m.this_link()}
                                </a><span> </span>
                                {m.to_fill_out_application_form()}
                            </>
                        }
                    />

                </div>

                {/* Card 2 */}
                <div className="relative mt-4 md:mt-96 w-full md:w-auto md:mt-4 md:mx-4">
                    <ApplicationCard 
                        number="02" 
                        title={m.ap_step2()}
                        content={m.ap_step2_description()}
                    />
                </div>

                {/* Card 3 */}
                <div className="relative mt-4 md:mt-24 mb-auto w-full md:w-auto md:mx-4">
                    <ApplicationCard 
                        number="03" 
                        title={m.ap_step3()} 
                        content={m.ap_step3_description()} 
                        svgTopRight={<img src='/images/SVG/ap-step3-highlight-tr.svg'/>}
                        svgBottomLeft={<img src='/images/SVG/ap-step3-highlight-bl.svg'/>}
                        svgBottomRight={<img src='/images/SVG/ap-step3-highlight-br.svg'/>}
                    />
                </div>

                
                {/* Card 4 */}
                <div className="relative mt-4 md:mt-[470px] w-full md:w-auto md:mx-4">
                    <div className="absolute right-[-6vw] top-80">
                        <img src='/images/SVG/ap-looping-arrow.svg'/>
                    </div>
                    <ApplicationCard 
                        number="04" 
                        title={m.ap_step4()}
                        content={m.ap_step4_description()}
                    />
                </div>
            </div>
        </section>
    );
}
