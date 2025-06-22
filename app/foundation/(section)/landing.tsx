import * as m from "@/paraglide/messages.js"

export default function Landing() {
    return (
      <header className="w-full min-h-[100vh] h-auto flex flex-col md:flex-row bg-[#FFF1D0] relative overflow-hidden">
        {/* First Column  */}
        <div className="w-full md:w-1/2 max-w-screen-lg px-4 lg:px-12 py-6 flex flex-col justify-center items-start z-10 space-y-4">
          {/* Name */}
          <div className="flex items-center">
            <span className="text-4xl font-semibold text-black">{m.the_tailed_foundation()}</span>
          </div>
  
          {/* Tagline */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-black">
              {m.empowering_the_next_generation_of_tech_leaders()}
            </h1>
            <p className="mt-2 text-3xl text-black">{m.one_student_at_a_time()}</p>
          </div>
  
          {/* Apply Now Button */}
          <div>
            <a href="https://forms.gle/3iqrePh2r7Zv7tKo6" target="_blank"><button className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors">
            {m.apply_now()}
            </button></a>
          </div>
        </div>
  
  
        {/* Second Column  */}
        <div className="w-full md:w-1/2 h-64 md:h-full flex justify-center items-end relative translate-y-[1px]">
          <img src="./images/SVG/tail.svg" className="w-full h-auto max-h-60 md:max-h-full object-contain" />
        </div>
      </header>
    );
  }
  