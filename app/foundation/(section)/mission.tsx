import * as m from "@/paraglide/messages.js"

export default function Mission() {
    return (
        <section className="w-full bg-[#EB7A24] py-16 flex flex-col items-center">
            {/* Mission Title */}
            <div className="mb-8 text-left w-full max-w-screen-lg px-4">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black mb-2 relative z-10">{m.mission()}</h2>
                {/* White Line under Mission */}
                <div className="mt-[-8px] ml-0 w-32 md:w-56">
                    <img src='/images/SVG/mission-header-line.svg' className="w-full h-auto"/>
                </div>
            </div>

            {/* Container for the main content */}
            <div className="bg-white shadow-xl rounded-lg p-4 sm:p-8 max-w-screen-lg w-full mt-4"> 
                {/* Mission Statement */}
                <div className="text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
                        {m.mission_welcome()}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-700 mb-4">
                        {m.mission_statement()}
                    </p>

                    {/* Decorative Line */}
                    <div className="w-1/2 h-1 bg-[#EB7A24] rounded-full mx-auto my-6 "></div>
                </div>

                {/* Four Columns for Icons and Text */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Column 1 */}
                    <div className="text-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 text-[#EB7A24] rounded-full mx-auto mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                            </svg>
                        </div>
                        <h4 className="text-lg sm:text-xl font-semibold text-black mb-2">{m.mission_value1()}</h4>
                        <p className="text-gray-600">
                            {m.mission_value1_description()}
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="text-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 text-[#EB7A24] rounded-full mx-auto mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg>
                        </div>
                            <h4 className="text-lg sm:text-xl font-semibold text-black mb-2">{m.mission_value2()}</h4>
                        <p className="text-gray-600">
                            {m.mission_value2_description()}
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div className="text-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 text-[#EB7A24] rounded-full mx-auto mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>
                        </div>
                            <h4 className="text-lg sm:text-xl font-semibold text-black mb-2">{m.mission_value3()}</h4>
                        <p className="text-gray-600">
                            {m.mission_value3_description()}
                        </p>
                    </div>

                    {/* Column 4 */}
                    <div className="text-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 text-[#EB7A24] rounded-full mx-auto mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" >
                                <path stroke-linecap="round" stroke-linejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                            </svg>
                        </div>
                            <h4 className="text-lg sm:text-xl font-semibold text-black mb-2">{m.mission_value4()}</h4>
                        <p className="text-gray-600">
                            {m.mission_value4_description()}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
