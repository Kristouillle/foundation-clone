// "use client";
//
// import {subscribeForm} from "../../../lib/email";
// import {Modal} from "flowbite-react";
// import {useRef, useState} from "react";
//
// export default function SubscribeForm({ dict }) {
//     const [modal, setModal] = useState(false);
//
//     const formRef = useRef();
//     return (
//
//         <section className={"lg:pb-16"}>
//             <div className="flex flex-col py-8 px-auto mx-auto max-w-screen-sm lg:py-16 p-6">
//                 <h2
//                     id={"contact"}
//                     className="mb-4 text-2xl tracking-tight font-bold text-gray-900 dark:text-white"
//                 >
//                     {dict.common.join}
//                 </h2>
//
//                 <form
//
//                     ref={formRef}
//                     action={async (data) => {
//                         let error = false;
//                         document.getElementById("subscribe-email-error").classList.add("hidden");
//                         document.getElementById("subscribe-list-error").classList.add("hidden");
//                         if (!data.get("email")) {
//                             document.getElementById("subscribe-email-error").classList.remove("hidden");
//                             error = true;
//                         }
//                         if (!data.get("employer-checkbox") && !data.get("student-checkbox")) {
//                             document.getElementById("subscribe-list-error").classList.remove("hidden");
//                             error = true;
//                         }
//                         if (error) {
//                             return;
//                         }
//                         document.getElementById("subscribe-email-error").classList.add("hidden");
//                         document.getElementById("subscribe-list-error").classList.add("hidden");
//                         await subscribeForm(data);
//                         setModal(true);
//                         formRef.current.reset();
//                     }}
//                 >
//                     <div className="mb-6">
//                         <label
//                             htmlFor="email"
//                             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                         >
//                             Email address
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                             placeholder="john.doe@company.com"
//                         />
//                         <div id={"subscribe-email-error"} className={"text-sm italic text-red-700 hidden"}>*Missing Email Address</div>
//                     </div>
//                     <div className="flex items-center mb-4">
//                         <input
//                             id="employer-checkbox"
//                             name="employer-checkbox"
//                             type="checkbox"
//                             value="employer"
//                             className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                         />
//                         <label
//                             className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                         >
//                             {dict.earlyAccess.employer}
//                         </label>
//                     </div>
//                     <div className={"flex flex-col mb-4"}>
//                     <div className="flex items-center ">
//                         <input
//                             id="student-checkbox"
//                             name="student-checkbox"
//                             type="checkbox"
//                             value="student"
//                             className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                         />
//                         <label
//                             className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                         >
//                             {dict.earlyAccess.student}
//                         </label>
//
//                     </div>
//                         <div id={"subscribe-list-error"} className={"text-sm italic text-red-700 hidden"}>*Select at least one category</div>
//                     </div>
//                     <button
//                         type="submit"
//                         className="flex px-6 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     >
//                         {dict.common.getstarted}
//                         <svg
//                             className="w-5 h-5 ml-2 -mr-1 text-white dark:text-gray-900"
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 fillRule="evenodd"
//                                 d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                                 clipRule="evenodd"
//                             ></path>
//                         </svg>
//                     </button>
//                 </form>
//                 <Modal
//                     visible={modal.toString()}
//                     show={modal}
//                     onClose={() => setModal(false)}
//                     position={"center"}
//                     dismissible
//                 >
//                     <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
//                         <button
//                             type="button"
//                             className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
//                             onClick={() => setModal(false)}
//                         >
//                             <svg
//                                 aria-hidden="true"
//                                 className="w-5 h-5"
//                                 fill="currentColor"
//                                 viewBox="0 0 20 20"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     fillRule="evenodd"
//                                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                                     clipRule="evenodd"
//                                 ></path>
//                             </svg>
//                             <span className="sr-only">Close modal</span>
//                         </button>
//                         <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
//                             <svg
//                                 aria-hidden="true"
//                                 className="w-8 h-8 text-green-500 dark:text-green-400"
//                                 fill="currentColor"
//                                 viewBox="0 0 20 20"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     fillRule="evenodd"
//                                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                                     clipRule="evenodd"
//                                 ></path>
//                             </svg>
//                             <span className="sr-only">Success</span>
//                         </div>
//                         <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
//                             {dict.subscribe.success}
//                         </p>
//                         <button
//                             onClick={() => setModal(false)}
//                             type="button"
//                             className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900"
//                         >
//                             {dict.subscribe.successbutton}
//                         </button>
//                     </div>
//                 </Modal>
//             </div>
//         </section>
//     )
// }
