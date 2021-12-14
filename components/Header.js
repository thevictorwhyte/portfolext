import Image from "next/image";
import { useEffect, useState } from "react";

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
    <header className="w-full">
      <nav
        className={`flex items-center px-[30px] py-[15px] justify-between bg-opacity-80 bg-primary backdrop-blur-lg top-0 fixed w-full ${
          isScrolling && " transition transform duration-200 shadow-custom z-50"
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
    </header>
  );
}

export default Header;
