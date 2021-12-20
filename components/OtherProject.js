import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function OtherProject({ title, sourceUrl, liveUrl, desc, ongoing }) {
  const otherProjectsVariant = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.2,
      },
    },
  };
  return (
    <motion.div
      variants={otherProjectsVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: "some" }}
      className="flex flex-col justify-between h-40 group"
    >
      <h4 className="text-whiteone text-[18px] font-poppins font-medium group-hover:text-secondary transition duration-200">
        {title}

        {ongoing && (
          <sup className="font-fira text-xs font-light pl-1">ongoing</sup>
        )}
      </h4>
      <p className="text-whitetwo font-poppins h-16 text-[14px] xs:text-[12px] md:text-[14px] xl:text-[16px] font-normal">
        {desc}
      </p>
      <a
        href={sourceUrl}
        target="_blank"
        className="flex w-fit items-center font-poppins text-sm text-[#CF8387] py-2 cursor-pointer group transition transform duration-200"
      >
        <span className="transition transform">View github</span>
        <FaArrowRight className="inline ml-2 transition transform group-hover:translate-x-1 group-hover:text-color-secondary text-sm" />
      </a>
    </motion.div>
  );
}

export default OtherProject;
