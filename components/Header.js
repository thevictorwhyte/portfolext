import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaDribbble, FaMediumM } from "react-icons/fa";

function Header() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    setIsScrolling(window.pageYOffset > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
        className={`flex items-center px-[30px] py-[15px] justify-between bg-opacity-80 bg-primary backdrop-blur-lg top-0 fixed w-full ${
          isScrolling && " transition transform duration-200 shadow-custom"
        }`}
      >
        <div className="relative h-12 w-12">
          <Image
            src="/assets/logo.svg"
            layout="fill"
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        <div className="flex space-x-[86px]">
          <div className="font-fira font-medium text-secondary text-[15px]">
            Home
          </div>
          <div className="font-fira font-medium text-[#8892B0] text-[15px]">
            About
          </div>
          <div className="font-fira font-medium text-[#8892B0] text-[15px]">
            Work
          </div>
          <div className="font-fira font-medium text-[#8892B0] text-[15px]">
            Contact
          </div>
        </div>

        <button className="text-secondary text-[13px] font-fira border border-secondary p-[10px] rounded-[5px]">
          Download resume
        </button>
      </nav>
      <div className="px-[100px] mt-[120px]">
        <span className="font-fira text-secondary text-[20px]">
          Hi, my name is
        </span>
        <h1 className="font-poppins font-bold text-[80px] text-[#CCD6F6]">
          Victor Whyte{" "}
          <span className="text-secondary font-poppins text-[80px] font-bold">
            .
          </span>
        </h1>
        <h1 className="font-poppins font-bold text-[72px] text-[#8892B0]">
          I build for web and mobile{" "}
        </h1>
        {/* <span className="font-poppins font-medium text-[#8892B0] text-[24px] mt-4">
          Fullstack Developer{" "}
          <span className="font-poppins text-secondary text-[24px]">/</span> UI
          & UX Designer
        </span> */}
        <p className="text-[#8892B0] text-[#20px] font-poppins mt-6 max-w-lg">
          I’m a <span className="text-secondary">design minded</span> full stack
          developer with a focus on creating usable and aesthetically pleasing
          products.
        </p>
        <div className="flex space-x-4 mt-10">
          <FaGithub className="icon" />
          <FaLinkedinIn className="icon" />
          <FaDribbble className="icon" />
          <FaMediumM className="icon" />
        </div>
      </div>

      <div className="absolute top-[90%] left-2/4 animate-bounce">
        <Image
          src="/assets/arrow.svg"
          width={30}
          height={30}
          objectFit="contain"
        />
      </div>
    </header>
  );
}

export default Header;
