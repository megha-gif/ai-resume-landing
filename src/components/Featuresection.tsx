import Image from "next/image";
 import chip from "@/images/chip-icon.png";
 import aifile from "@/images/aifile-icon.png";
 import filecheck from "@/images/filecheck-icon.png";
 
 const Featuresection = () => {
   return (
     // Features Section
     <div
       id="features"
       className="relative overflow-hidden min-h-screen mb-[0px] w-full bg-gradient-to-b from-black to-[#52057B] pb-20"
     >
       {/* Wrapping Div */}
       <div className="container flex text-[#CCCCCC] flex-col overflow-clip justify-center items-center mx-auto">
         {/* Heading */}
         <h1 className="text-white font-poppins text-center text-[35px] sm:text-[38px] md:text-[55px] lg:text-[55px] mt-[100px]">
           Why Choose an{" "}
           <span className="text-[#540E92] font-alkatra">
             Ai-Powered Resume?
           </span>
         </h1>
         {/* Cards */}
         <div className="mt-15 lg:mt-40 font-poppins sm:gap-10 lg:grid-cols-3 lg:grid lg:gap-6 lg:place-items-center lg:px-4 flex flex-col items-center justify-center gap-7 px-20 pb-20 md:flex-wrap md:flex-row">
           <div className="relative  lg:top-20 lg:left-10 lg:z-10 bg-black opacity-95 border-5 border-[#040404] rounded-[15px] w-[388px] h-[288px] flex flex-col items-center text-center  hover:scale-105 hover:border-[#8A2BE2] transition-all duration-300">
             <p className="font-poppins text-[28px] text-[#CCCCCC] mt-15 text-center">
               Ai Resume Optimization
             </p>
             <p className="font-poppins text-[13px] text-[#CCCCCC] mt-5 px-13">
               Enchance your resume with AI-powered for better
               readability,formatting and keyword optimization.
             </p>
             <Image src={chip} alt="icon" className="ml-70 " />
           </div>
           <div className="relative lg:bottom-20 bg-black opacity-95 border-5 border-[#040404] rounded-[15px] w-[388px] h-[288px] hover:scale-105 hover:border-[#8A2BE2] transition-all duration-300 flex flex-col items-center text-center">
             <p className="font-poppins text-[28px] text-[#CCCCCC] mt-12 text-center">
               AI Resume Builder
             </p>
             <p className="font-poppins text-[13px] text-[#CCCCCC] mt-5 px-12">
               Create a professional resume effortlessly with AI-powered
               templates and real time suggestions.
             </p>
             <Image src={aifile} alt="icon" className="ml-70 lg:ml-30" />
           </div>
           <div className="relative lg:top-20 lg:right-10 lg:z-10 bg-black opacity-95 border-5 border-[#040404] rounded-[15px] w-[388px] h-[288px] hover:scale-105 hover:border-[#8A2BE2] transition-all duration-300 flex flex-col items-center text-center">
             <p className="font-poppins text-[28px] text-[#CCCCCC] mt-15 text-center">
               ATS Score Checker
             </p>
             <p className="font-poppins text-[13px] text-[#CCCCCC] mt-5 px-12">
               Analyze your resume’s ATS compatibility and get instant feedback
               to improve your chances of getting noticed.
             </p>
             <Image src={filecheck} alt="icon" className="ml-70" />
           </div>
         </div>
       </div>
     </div>
   );
 };
 
 export default Featuresection;
