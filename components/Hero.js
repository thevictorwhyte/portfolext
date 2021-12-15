import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaDribbble, FaMediumM } from "react-icons/fa";

function Hero() {
  return (
    <div className="relative h-screen 2xl:max-h-[1024px]">
      <div className="pl-[20px] lg:px-[100px]  mt-[120px]">
        <span className="font-fira text-secondary text-[1.25rem]">
          Hi, my name is
        </span>
        <h1 className="font-poppins font-bold text-[2.8rem] md:text-[3.5rem] xl:text-[5rem]  text-[#CCD6F6]">
          Victor Whyte{" "}
          <span className="text-secondary font-poppins font-bold">.</span>
        </h1>
        <h1 className="font-poppins font-bold text-[2rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[4.5rem]  text-[#8892B0]">
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

      <div className="absolute top-[95%] lg:top-[90%] left-2/4 animate-bounce w-6 h-6 lg:w-8 lg:h-8 ">
        <Image src="/assets/arrow.svg" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}

export default Hero;
