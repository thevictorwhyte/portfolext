import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

function CaseStudy({ projectImg, desc, title, studyUrl, ongoing = false }) {
  return (
    <div className="rounded-[10px] overflow-hidden shadow-featuredProject">
      <div className="relative w-full h-56 -z-10 -mb-2 opacity-60">
        <Image src={projectImg} layout="fill" objectFit="cover" className="" />
      </div>
      <div className="bg-tertiary rounded-[10px] px-4 py-2">
        <div className="flex flex-col space-y-2">
          <h4 className="text-whiteone font-poppins font-medium text-md">
            {title}

            {ongoing && (
              <sup className="font-fira text-xs font-light pl-1">ongoing</sup>
            )}
          </h4>
          <p className="text-whitetwo font-poppins h-16 text-sm font-normal">
            {desc}
          </p>
          <a
            href={studyUrl}
            target="_blank"
            className="flex w-fit items-center font-poppins text-sm text-[#CF8387] py-2 cursor-pointer group transition transform duration-200"
          >
            <span className="transition transform group-hover:-translate-x-1 text-sm">
              Read case study
            </span>
            <FaArrowRight className="inline ml-2 transition transform group-hover:translate-x-1 group-hover:text-color-secondary text-xs" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
