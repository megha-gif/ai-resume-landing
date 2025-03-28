"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const Goback = () => {
  const router = useRouter();
  return (
    // Goback Page
    <div
      id="goback"
      className="relative overflow-hidden mb-[0px] w-full h-auto bg-gradient-to-b from-black to-[#52057B] pb-20 "
    >
      {/* Wrapping Div */}
      <div className="container text-white flex-col overflow-clip justify-center items-center flex mx-auto mt-22 px-5 pb-34 md:mt-50 md:p-20 lg:pb-21 lg:mt-20">
        {/* Content */}
        <h1 className="text-[40px] bg-gradient-to-r from-[#bfa8d5] to-[#7d6199] bg-clip-text text-transparent">
          Get Started
        </h1>
        <p className="text-[15.5px] text-[#CCCCCC] font-poppins text-center mt-5">
          Welcome!This is the start of the journey.Contact us or explore more.
        </p>
        <Link href="/">
          <button
            onClick={() => router.back()}
            className="bg-gradient-to-r from-[#24063F] to-[#5F10A5] hover:scale-105 text-white font-light py-3 px-6 md:px-16 md:py-4 rounded-lg shadow-md transition-all mt-15 font-poppins"
          >
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Goback;
