import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaPlayCircle } from "react-icons/fa";

function FeaturedProject({
  projectImg,
  title,
  desc,
  techUsed,
  sourceUrl,
  liveUrl,
}) {
  return (
    <div className="flex flex-col max-w-[586px] max-h-[678px] p-0 shadow-featuredProject">
      <div className="relative w-full h-[333px] top-0 left-0 rounded-[10px] overflow-hidden">
        <Image src={projectImg} layout="fill" objectFit="cover" />
        <FaPlayCircle className="absolute top-1/2 left-1/2 h-16 w-16 translate-x-[-50%] translate-y-[-50%] text-primary opacity-[80%]" />
      </div>
      <div className="flex flex-col h-64 bg-[#05203C] px-4 py-6 lg:px-[30px] lg:py-[24px] rounded-[10px] overflow-hidden -mt-6 z-10">
        <div className="flex flex-col space-y-[20px] lg:space-y-[20px]">
          <h4 className="text-whiteone text-[16px] xl:text-[18px] font-poppins font-semibold">
            {title}
          </h4>
          <p className="text-whitetwo font-poppins text-[13px] lg:text-[14px] xl:text-[16px] font-medium">
            {desc}
          </p>
          <span className="font-fira text-secondary font-medium text-xs lg:text-[13px] xl:text-[16px] mt-4 lg:mt-0">
            {techUsed.split(" ").join(" / ")}
          </span>
        </div>
        <div className="flex justify-between mt-auto">
          <div className="flex items-center text-whiteone font-fira space-x-2">
            <FaGithub className="" />
            <span className="text-sm">Source</span>
          </div>
          <div className="flex items-center text-whiteone font-fira space-x-2">
            <FaExternalLinkAlt className="" />
            <span className="text-sm">Live</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
