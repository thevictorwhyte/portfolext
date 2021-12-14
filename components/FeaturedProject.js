import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
      <div className="relative w-full h-[333px] top-0">
        <Image src={projectImg} layout="fill" objectFit="contain" />
        {/* play icon */}
      </div>
      <div className="flex flex-col h-[369px] bg-[#05203C] px-[40px] py-[24px] rounded-[10px] -mt-6 z-10">
        <div className="flex flex-col space-y-[20px]">
          <h4 className="text-whiteone text-[18px] font-poppins font-semibold">
            {title}
          </h4>
          <p className="text-whitetwo font-poppins text-[16px] font-medium">
            {desc}
          </p>
          <span className="font-fira text-secondary font-medium">
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
