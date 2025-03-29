import Link from "next/link";
 
 const Herosection = () => {
   return (
     // Hero Section
     <div id="#cta" className="bg-black relative overflow-hidden">
       {/* Wrapping Div */}
       <div className="container text-white flex  overflow-clip flex-col justify-center items-center mx-auto">
         {/* Glowing Ring */}
         <div className="absolute top-[150px] md:top-8  rounded-full glowing-ring opacity-40  h-[280px] w-[400px] md:h-[350px] md:w-[500px] lg:h-[400px] lg:w-[510px]  border-[32px] border-[#8a2be2]"></div>
         {/* Content */}
         <div className="relative flex flex-col justify-center items-center pb-59 sm:mb-30 md:pb-0">
           <div className="text-4xl sm:text-[44px] md:text-[48px] lg:text-[55px] font-poppins mt-[190px] md:mt-[40px] text-center top-[210px] ">
             <h1>Build Your AI-Powered</h1>
             <h1 className="mt-3">Resume in Minutes</h1>
           </div>
           <div className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-thin font-poppins mt-8 text-[#CCCCCC] text-center">
             <p>Create a Stunning resume with Ai-driven suggestions</p>
             <p className="mt-[1px]">and Modern Templates</p>
           </div>
           <Link href="#cta">
             <button className="bg-[#480980] hover:scale-105 text-white py-3 px-13 rounded-lg mt-20 font-poppins">
               Get Started
             </button>
           </Link>
         </div>
       </div>
       {/* Linear Gradient at bottom */}
       <div className="h-[100px] mb-[0px] w-full bg-[linear-gradient(to bottom, transparent, #52057B)] relative"></div>
     </div>
   );
 };
 
 export default Herosection;
