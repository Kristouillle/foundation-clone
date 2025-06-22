import * as m from "@/paraglide/messages.js"

export default function ApplyNow() {
    return (
        <section className="w-full  py-16 flex flex-col items-center">
            <div className="w-3/5 md:w-1/3 text-center">
                <h1 className="text-5xl font-bold">{m.get_started_today()}</h1>
                <p className="pt-8">{m.ready_to_empower_with_support()}</p>
            </div>

            {/* Apply Now Button */}
          <div className="py-12">
            <a href="https://forms.gle/3iqrePh2r7Zv7tKo6" target="_blank"><button className="bg-orange-600 text-2xl text-white font-semibold py-4 px-6 rounded-lg hover:bg-orange-700 transition-colors">
              {m.apply_now()}
            </button></a>
          </div>

          <div className="w-3/5 md:w-1/3 text-center text-[#8B8B8B] py-12">
                <h1 className="text-xl">{m.the_tailed_foundation()}</h1>
                <p className="pt-8">{m.empowering_tech_future_one_student_at_a_time()}</p>
            </div>
        </section>
    )
}