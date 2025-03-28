import linkedin from "@/images/linkedin-icon.png";
import twitter from "@/images/twitter-icon.png";
import github from "@/images/github-icon.png";
import Link from "next/link";
import Image from "next/image";

export default function Footersection() {
  return (
    <footer className="bg-black text-white py-8 ">
      <div className="container mx-auto px-6 text-center">
        {/* Branding */}
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:text-left">
            <h1 className="text-[#CCCCCC] text-[25px] font-inder">
              <span className="text-[#400971] text-[26px] font-alkatra">
                Ai
              </span>
              Resume
            </h1>
            <Link href="/Goback">
              <span className="text-[#CCCCCC] hover:text-[#C0C0C0]">
                Try AI Resume Builder for FREE!
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="mt-4">
            <ul className="flex justify-center space-x-6 text-gray-400">
              <Link href="#">
                <span className="hover:text-[#C0C0C0]">Home</span>
              </Link>
              <Link href="#features">
                <span className="hover:text-[#C0C0C0]">Features</span>
              </Link>
              <Link href="#cta">
                <span className="hover:text-[#C0C0C0]">Get Started</span>
              </Link>
              <Link href="#faq">
                <span className="hover:text-white">FAQ</span>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="border-b-1 text-gray-400 hidden md:block md:mt-3"></div>
        {/* Social Icons */}
        <div className="mt-6 flex justify-center space-x-6">
          <Link href="/" className="text-gray-400 hover:text-white">
            <Image src={linkedin} alt="Linkedin" width={25} height={25} />
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white">
            <Image src={twitter} alt="Twitter" width={25} height={25} />
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white">
            <Image src={github} alt="Github" width={35} height={35} />
          </Link>
        </div>
        {/* Copyright */}
        <div className="mt-6 text-gray-400 text-sm">
          &copy; 2025 AI Resume Builder | Made with ❤
        </div>
      </div>
    </footer>
  );
}
