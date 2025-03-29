"use client";
 import { useState } from "react";
 import Image from "next/image";
 import dropdown from "@/images/dropdown-arrow.png";
 
 const faqs = [
   {
     question: "How does the AI Resume Builder work?",
     answer:
       "Simply enter your details, and our AI instantly crafts a professional, ATS-optimized resume based on industry best practices. No writing skills needed!",
   },
   {
     question: "Will my resume pass ATS screening?",
     answer:
       "Yes! 75% of resumes never reach recruiters due to ATS filters. Our AI ensures your resume gets seen, increasing your chances of getting hired.",
   },
   {
     question: "Can I edit my resume after AI generation?",
     answer:
       " Absolutely! Our AI provides a ready-to-use resume, but you can fully customize it before downloading.",
   },
   {
     question: "Is my data safe with this AI tool?",
     answer:
       " 100% secure! We use bank-level encryption to protect your information—your privacy is our priority.",
   },
   {
     question: "How do I get started?",
     answer:
       "Click “Generate My Resume” now and get your first draft FREE—no sign-up required!",
   },
 ];
 
 export default function FaqSection() {
   const [openIndex, setOpenIndex] = useState<number | null>(null);
 
   const toggleFAQ = (index: number) => {
     setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
   };
 
   return (
     // Faq Section
     <div
       id="faq"
       className="w-full relative overflow-clip mb-[0px] min-h-screen  bg-[linear-gradient(to_bottom,#000000_30%,#52057B)] pb-20"
     >
       {/* Wrapping Div */}
       <div className="container text-white flex-col overflow-clip justify-center items-center flex mx-auto mt-20">
         {/* Heading */}
         <h2 className="text-[25px] md:text-[35px] lg:text-[48px] bg-gradient-to-r from-[#CCCCCC] to-[#666666] bg-clip-text text-transparent font-poppins mt-25">
           Frequently Asked Questions
         </h2>
 
         {/* FAQ Questions and Answers */}
         <div className="max-w-3xl mx-auto mt-8 space-y-6 md:mt-30 lg:mt-20">
           {faqs.map((faq, index) => (
             <div
               key={index}
               className="mt-10 bg-gradient-to-r from-[#24063F] to-[#5F10A5] p-6 md:w-[600px] lg:w-[700px] rounded-lg shadow-lg  cursor-pointer"
               onClick={() => toggleFAQ(index)}
             >
               <div className="flex justify-between items-center">
                 <p className="text-xl font-inder bg-[linear-gradient(to_right,#FFFFFF_70%,#999999)] bg-clip-text text-transparent w-full">
                   {faq.question}
                 </p>
                 <Image
                   src={dropdown}
                   alt="dropdown"
                   className={`w-8 h-10 transform transition-transform duration-300 ${
                     openIndex === index ? "rotate-180" : "rotate-0"
                   }
                   `}
                 />
               </div>
               {openIndex === index && (
                 <div className="mt-4">
                   <p className="mt-2 font-inder bg-[linear-gradient(to_right,#CCCCCC_70%,#666666)] bg-clip-text text-transparent ">
                     {faq.answer}
                   </p>
                 </div>
               )}
             </div>
           ))}
         </div>
       </div>
     </div>
   );
 }
