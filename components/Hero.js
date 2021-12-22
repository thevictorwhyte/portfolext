import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaDribbble, FaMediumM } from "react-icons/fa";

function Hero() {
  const containerVariant = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.4,
      },
    },
  };
  return (
    <motion.div
      variants={containerVariant}
      animate="visible"
      initial="hidden"
      className="relative h-screen 2xl:max-h-[1024px] 2xl:max-w-[1440px]"
    >
      <div className="absolute pl-[20px] lg:px-[100px] top-1/4">
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
        <p className="text-[#8892B0] text-[16px] lg:text-[18px] font-poppins mt-6 w-[80vw] md:w-[60vw] lg:w-fit lg:max-w-xl">
          I’m a <span className="text-secondary">design minded</span> full stack
          engineer with a focus on creating usable and aesthetically pleasing
          products.
        </p>
        <div className="flex space-x-4 mt-10">
          <a href="https://github.com/thevictorwhyte" target="_blank">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/thevictorwhyte/" target="_blank">
            <FaLinkedinIn className="icon" />
          </a>
          <a href="https://dribbble.com/thevictorwhyte" target="_blank">
            <FaDribbble className="icon" />
          </a>
          <a href="https://thevictorwhyte.medium.com/" target="_blank">
            <FaMediumM className="icon" />
          </a>
        </div>
      </div>

      <div className="absolute top-[95%] lg:top-[90%] left-2/4 animate-bounce w-6 h-6 lg:w-7 lg:h-7 ">
        <Image src="/assets/arrow.svg" layout="fill" objectFit="contain" />
      </div>
    </motion.div>
  );
}

export default Hero;
