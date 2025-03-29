
import Image from "next/image";
import chip from "@/images/chip-icon.png";
import aifile from "@/images/aifile-icon.png";
import filecheck from "@/images/filecheck-icon.png";

const Featuresection = () => {
  return (
    // Features Section
    <div
      id="features"
      className="w-full min-h-screen bg-gradient-to-b from-black to-[#52057B] flex flex-col"
    >
      {/* Wrapping Div */}
      <div className="container flex flex-col justify-center items-center mx-auto flex-grow py-20">
        {/* Heading */}
        <h1 className="text-white font-poppins text-center text-[35px] sm:text-[38px] md:text-[55px] lg:text-[55px]">
          Why Choose an{" "}
          <span className="text-[#540E92] font-alkatra">
            Ai-Powered Resume?
          </span>
        </h1>

        {/* Cards */}
        <div className="font-poppins grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 px-4 w-full max-w-6xl">
          {/* Card 1 */}
          <div className="bg-black bg-opacity-95 border-2 border-[#040404] rounded-[15px] w-full h-[288px] flex flex-col items-center text-center hover:scale-105 hover:border-[#8A2BE2] transition-all duration-300">
            <div className="mt-12">
              <p className="text-[28px] text-[#CCCCCC]">
                Ai Resume Optimization
              </p>
              <p className="text-[13px] text-[#CCCCCC] mt-5 px-4">
                Enhance your resume with AI-powered for better readability, formatting and keyword optimization.
              </p>
              <Image src={chip} alt="icon" className="mt-6 mx-auto" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-black bg-opacity-95 border-2 border-[#040404] rounded-[15px] w-full h-[288px] flex flex-col items-center text-center hover:scale-105 hover:border-[#8A2BE2] transition-all duration-300">
            <div className="mt-12">
              <p className="text-[28px] text-[#CCCCCC]">
                AI Resume Builder
              </p>
              <p className="text-[13px] text-[#CCCCCC] mt-5 px-4">
                Create a professional resume effortlessly with AI-powered templates and real time suggestions.
              </p>
              <Image src={aifile} alt="icon" className="mt-6 mx-auto" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-black bg-opacity-95 border-2 border-[#040404] rounded-[15px] w-full h-[288px] flex flex-col items-center text-center hover:scale-105 hover:border-[#8A2BE2] transition-all duration-300">
            <div className="mt-12">
              <p className="text-[28px] text-[#CCCCCC]">
                ATS Score Checker
              </p>
              <p className="text-[13px] text-[#CCCCCC] mt-5 px-4">
                Analyze your resume's ATS compatibility and get instant feedback to improve your chances of getting noticed.
              </p>
              <Image src={filecheck} alt="icon" className="mt-6 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featuresection;
