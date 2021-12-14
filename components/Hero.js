import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaDribbble, FaMediumM } from "react-icons/fa";

function Hero() {
  return (
    <div className="relative h-screen max-h-[1024px]">
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
    </div>
  );
}

export default Hero;
