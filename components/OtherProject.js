import { FaArrowRight } from "react-icons/fa";

function OtherProject({ title, sourceUrl, liveUrl, desc, ongoing }) {
  return (
    <div className="flex flex-col space-y-2">
      <h4 className="text-whiteone text-[18px] font-poppins font-medium">
        {title}

        {ongoing && (
          <sup className="font-fira text-xs font-light pl-1">ongoing</sup>
        )}
      </h4>
      <p className="text-whitetwo font-poppins h-16 text-[16px] font-normal">
        {desc}
      </p>
      <a
        href={sourceUrl}
        target="_blank"
        className="flex w-fit items-center font-poppins text-sm text-[#CF8387] py-2 cursor-pointer group transition transform duration-200"
      >
        <span className="transition transform group-hover:-translate-x-1">
          View demo
        </span>
        <FaArrowRight className="inline ml-2 transition transform group-hover:translate-x-1 group-hover:text-color-secondary text-sm" />
      </a>
    </div>
  );
}

export default OtherProject;
