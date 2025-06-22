
import ContactForm from "@/components/form/contact";
import AppointmentForm from "@/components/form/appointment";

export default async function Page({ params: { lang } }) {
    // const dict = await getDictionary(lang); // en
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto lg:max-w-screen-xl">
                <h2
                    id={"contact"}
                    className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
                >
                    {/*{dict.contact.title}*/}
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    {/*{dict.contact.subtitle}*/}
                </p>
                <div
                    className={
                        "mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16"
                    }
                >
                    <div className="flex flex-col">
                        <ContactForm />
                    </div>
                    <div className="flex flex-col">
                        <AppointmentForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
