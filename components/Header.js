import Image from "next/image";
import { useEffect, useState } from "react";

function Header({ aboutRef, workRef, contactRef, navRef }) {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    setIsScrolling(window.pageYOffset > 50);
  };

  const scrollToRef = (ref) => {
    window.scrollTo(
      0,
      ref.current.offsetTop - navRef.current.clientHeight - 10
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full">
      <nav
        ref={navRef}
        className={`flex items-center px-[20px] lg:px-[30px] py-[15px] justify-between bg-opacity-80 bg-primary backdrop-blur-lg top-0 fixed w-full z-50 ${
          isScrolling && " transition transform duration-200 shadow-custom"
        }`}
      >
        <div className="relative h-10 w-10 lg:h-12 lg:w-12">
          <Image
            src="/assets/logo.svg"
            layout="fill"
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        <div className=" hidden lg:flex space-x-[86px]">
          <div
            className="font-fira font-medium text-secondary text-[15px] cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            Home
          </div>
          <div
            onClick={() => scrollToRef(aboutRef)}
            className="font-fira font-medium text-[#8892B0] text-[15px] cursor-pointer"
          >
            About
          </div>
          <div
            className="font-fira font-medium text-[#8892B0] text-[15px] cursor-pointer"
            onClick={() => scrollToRef(workRef)}
          >
            Work
          </div>
          <div
            className="font-fira font-medium text-[#8892B0] text-[15px] cursor-pointer"
            onClick={() => scrollToRef(contactRef)}
          >
            Contact
          </div>
        </div>

        <button className="hidden lg:inline text-secondary text-[13px] font-fira border border-secondary p-[10px] rounded-[5px]">
          Download resume
        </button>
        {/* <a
          href="https://google.com"
          target="_blank"
          class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-secondary text-secondary"
        >
          <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-secondary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span class=" font-fira text-sm relative text-secondary transition duration-300 group-hover:text-white ease">
            Download resume
          </span>
        </a> */}
      </nav>
    </header>
  );
}

export default Header;
