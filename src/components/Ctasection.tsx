"use client";

import Image from "next/image";
import bot from "@/images/bot-1.png";
import arrow from "@/images/arrow-right.png";
import Link from "next/link";

export default function CTASection() {
  return (
    // Cta Section
    <div
      id="cta"
      className="relative overflow-hidden mb-[0px] min-h-screen w-full bg-[linear-gradient(to_bottom,#000000_30%,#52057B)] pb-20"
    >
      {/* Wrapping Div */}
      <div className="container text-white flex-col overflow-clip justify-center items-center flex mx-auto mt-35 md:mt-50 lg:flex-row lg:mt-10">
        {/*Text Content */}
        <div className="relative flex-col flex items-center w-full lg-w-1/2">
          <div className="text-[30px] font-poppins text-white text-left px-4 md:text-[55px] lg:text-[48px] lg:pl-[40px]">
            <h1 className="block">Land Your Dream Job</h1>
            <h1 className="block">with AI-Powered</h1>
            <h1 className="block">Resumes</h1>
            <div className="text-[13px] text-[#CCCCCC] text-left font-poppins mt-3 md:text-[20px] md:mt-5 lg:text-[15px]">
              <p className="block">
                Stand out from the competition with an AI-crafted resume that
                gets noticed by recruiters.
              </p>
            </div>
          </div>
          <Link href="/Goback">
            <button className="bg-gradient-to-r from-[#24063F] to-[#5F10A5] hover:scale-105 text-white font-light py-3 px-6 md:px-16 md:py-4 rounded-lg shadow-md transition-all mt-20 font-poppins md:mt-30">
              Get Your AI Resume Now
            </button>
          </Link>
          <Link href="#faq" className="mt-3 flex hover:scale-103">
            <span className="bg-gradient-to-r from-[#CEB7E3] to-[#71657D] bg-clip-text text-transparent md:text-[15px]">
              Learn More
            </span>
            <span>
              <Image src={arrow} alt="Arrow" />
            </span>
          </Link>
        </div>
        {/* Image Content*/}
        <Image
          src={bot}
          alt="AI Robot"
          className="h-[300px] w-[250px] w-mt-20 ml-30 md:mt-40 md:ml-80 lg:ml-0 md:h-[500px] md:w-[450px] lg:h-auto lg:auto"
        />
      </div>
    </div>
  );
}
