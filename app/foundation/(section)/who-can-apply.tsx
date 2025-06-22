import * as m from "@/paraglide/messages.js"

export default function WhoCanApply() {
    return (
        <section className="w-full py-16 flex flex-col items-center">
            {/* WCA Title */}
            <div className="mb-8 text-right w-full max-w-screen-lg px-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-black mb-2 relative z-10">{m.who_can_apply()}</h2>
                <div className="mt-[-16px] flex justify-end">
                    <img src='/images/SVG/wca-header-line.svg'/>
                </div>
            </div>

            {/* Container for the main content */}
            <div className="p-4 sm:p-8 max-w-screen-lg w-full mt-4"> 
                {/* Cards Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16 md:gap-24">
                    {/* Card 1 : Student-led */}
                    <div className="bg-contain bg-center h-72 sm:h-80 w-full p-6 shadow-lg text-center" 
                         style={{ 
                             backgroundImage: "url('/images/school-blackboard.png')", 
                             backgroundSize: 'cover', 
                             backgroundPosition: 'center' 
                         }}>
                        <h3 className="text-5xl sm:text-2xl font-bold text-white mt-2 mb-2 font-angelas">{m.student_led_organizations()}</h3>
                        <p className="text-4xl sm:text-2xl text-gray-200 font-angelas">{m.student_led_organizations_details()}</p>
                    </div>

                    {/* Card 2 : Community  */}
                    <div className="bg-gradient-to-b from-[#DBCE39] to-[#FFF684] h-64 sm:h-72 -rotate-6 shadow-xl p-6 relative  translate-y-0 sm:translate-y-12">
                        <div className="bg-white opacity-40 w-[50px] h-[50px] absolute top-[-25px] left-1/2 transform -translate-x-1/2"></div>
                        <h3 className="text-lg sm:text-xl font-bold mb-2">{m.community_organizations()}</h3>
                        <p className="text-gray-700">{m.community_organizations_details()}</p>
                    </div>

                    {/* Card 3 : Initiatives */}
                    <div className="bg-contain bg-center bg-no-repeat w-auto h-72 sm:h-80 rounded-xl p-6 transform sm:rotate-0 rotate-6 flex flex-col justify-center items-center" 
                         style={{ 
                             backgroundImage: "url('/images/clipboard.png')", 
                             backgroundSize: 'contain', 
                             backgroundPosition: 'center' 
                         }}>
                        <h3 className="text-lg sm:text-xl font-bold mt-20 md:mb-2 text-center md:px-4">{m.initiatives()}</h3>
                        <p className="text-gray-700 text-center max-w-[85%] px-24 sm:px-2 lg:px-4">
                            {m.initiatives_details()}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
