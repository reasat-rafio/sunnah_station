import axios from "axios";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { InitialLayout } from "../Components/Layouts/InitialLayout";
import { Decorator_blob_7, Decorator_blob_8 } from "../utils/svgs/Decorator";
import { DownArrowSm } from "../utils/svgs/Svg";
import gfm from "remark-gfm";

const FAQ = ({ data }) => {
   const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

   const toggleQuestion = (questionIndex) => {
      if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
      else setActiveQuestionIndex(questionIndex);
   };

   return (
      <InitialLayout>
         <div className="w-full">
            <div className="container mx-auto px-2">
               <div className="pt-16 md:pt-32 relative">
                  <div className="max-w-screen-xl mx-auto py-20 lg:py-24">
                     <div className="flex flex-col items-center font-text">
                        {/* Heading */}
                        <div>
                           <h5 className="mb-4 text-center font-bold text-primary-500 font-title  text-xl sm:text-2xl text-lightBlue">
                              FAQS
                           </h5>
                           )
                           <h2 className="w-full text-3xl sm:text-4xl font-black tracking-wide text-center font-title">
                              Have questions about Sunnahstation.com? Our FAQ
                              will help you with initial and frequently asked
                              questions.
                           </h2>
                        </div>
                        {/* FAQ SECTION */}
                        <div className="mt-12 max-w-4xl relative">
                           {data.map((faq, index) => (
                              <div
                                 key={index}
                                 onClick={() => {
                                    toggleQuestion(index);
                                 }}
                                 className="group cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300"
                              >
                                 <div className="flex justify-between items-center">
                                    <span className="text-lg lg:text-xl font-semibold">
                                       {faq.question}
                                    </span>
                                    <motion.span
                                       className="ml-2 transition duration-300"
                                       variants={{
                                          collapsed: { rotate: 0 },
                                          open: { rotate: -180 },
                                       }}
                                       initial="collapsed"
                                       animate={
                                          activeQuestionIndex === index
                                             ? "open"
                                             : "collapsed"
                                       }
                                       transition={{
                                          duration: 0.02,
                                          ease: [0.04, 0.62, 0.23, 0.98],
                                       }}
                                    >
                                       <span className="w-6 h-6">
                                          {" "}
                                          <DownArrowSm />
                                       </span>
                                    </motion.span>
                                 </div>
                                 <motion.div
                                    className="pointer-events-none text-sm sm:text-base leading-relaxed"
                                    variants={{
                                       open: {
                                          opacity: 1,
                                          height: "auto",
                                          marginTop: "16px",
                                       },
                                       collapsed: {
                                          opacity: 0,
                                          height: 0,
                                          marginTop: "0px",
                                       },
                                    }}
                                    initial="collapsed"
                                    animate={
                                       activeQuestionIndex === index
                                          ? "open"
                                          : "collapsed"
                                    }
                                    transition={{
                                       duration: 0.3,
                                       ease: [0.04, 0.62, 0.23, 0.98],
                                    }}
                                 >
                                    <ReactMarkdown
                                       className=" max-w-none"
                                       plugins={[gfm]}
                                       children={faq.answer}
                                       escapeHtml={false}
                                    />
                                 </motion.div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </InitialLayout>
   );
};
export default FAQ;

export const getStaticProps: GetStaticProps = async (ctx) => {
   const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/faqs`);
   return {
      props: {
         data,
      },
   };
};
