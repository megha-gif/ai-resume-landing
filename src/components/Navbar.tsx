"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menu, setMenuValue] = useState(false);
  const closeMenu = () => setMenuValue(false);

  return (
    // Navbar
    <nav className="backdrop-blur-lg fixed top-0 left-0 z-50 w-full bg-[linear-gradient(to_bottom,#000000_30%,#00AFFF_100%)]">
      {/* Wrapping Div */}
      <div className="max-w-7xl flex items-center justify-between px-2 py-6 mx-auto text-white">
        {/* Logo */}
        <h1 className="text-[#CCCCCC] text-[30px] font-inder">
          <span className="text-[#400971] text-[32px] font-alkatra">Ai</span>
          Resume
        </h1>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center space-x-7 text-[19px]">
          <ul className="flex space-x-5 font-inder">
            <Link href="#">
              <span className="hover:text-[#CCCCCC]">Home</span>
            </Link>
            <Link href="#features">
              <span className="hover:text-[#CCCCCC]">Features</span>
            </Link>
            <Link href="#faq">
              <span className="hover:text-[#CCCCCC]">FAQ</span>
            </Link>
          </ul>
          <Link href="#cta">
            <button className="font-albert-sans text-[18px] pt-1 text-[#540E92] border-1 border-[#540E92] rounded-[6px] px-5 py-0.5 outline-0 outline-[#581295] hover:outline-1 hover:text-[#581295]">
              Get Started
            </button>
          </Link>
        </div>
        {/* Hamburger Mobile Menu Btn*/}
        <button
          onClick={() => {
            setMenuValue(!menu);
          }}
          className="focus:outline-none md:hidden"
        >
          {menu ? (
            <FiX className="w-8 h-8 text-[#540E92]" />
          ) : (
            <FiMenu className="w-8 h-8 text-[#540E92]" />
          )}
        </button>
        {/* Mobile Menu */}
        {menu && (
          <div className=" pb-5 font-inder md:hidden top-full absolute left-0 flex flex-col items-center justify-center w-full mx-auto space-y-5 bg-black">
            <Link href="#">
              <button
                onClick={closeMenu}
                className="text-[19px] text-white p-5 px-[200px] bg-[#540E92] outline-0 outline-[#540E92] hover:bg-[#540E98] hover:outline-3"
              >
                Home
              </button>
            </Link>
            <Link href="#features">
              <button
                onClick={closeMenu}
                className="text-[19px] text-white p-5 px-[190px] bg-[#540E92] outline-0 outline-[#540E92] hover:bg-[#540E98] hover:outline-3"
              >
                Features
              </button>
            </Link>
            <Link href="#faq">
              <button
                onClick={closeMenu}
                className="text-[19px] text-white p-5 bg-[#540E92] px-[210px] outline-0 outline-[#540E92] hover:bg-[#540E98] hover:outline-3"
              >
                FAQ
              </button>
            </Link>
            <Link href="#cta">
              <button
                onClick={closeMenu}
                className=" text-[19px] text-white p-5 bg-[#540E92] px-[180px] max-[40px]:px-[143px] outline-0 outline-[#540E92] hover:bg-[#540E98] hover:outline-3"
              >
                Get Started
              </button>
            </Link>
            <Link href="/Goback">
              <button
                onClick={closeMenu}
                className=" text-[19px] text-white p-5 bg-[#540E92] px-[142px] max-[40px]:px-[143px] outline-0 outline-[#540E92] hover:bg-[#540E98] hover:outline-3"
              >
                Get Your Ai Resume
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
