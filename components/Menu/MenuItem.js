import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="list-none mb-[20px] flex items-center cursor-pointer m-0 p-0"
    >
      <div
        className="w-[40px] h-[40px] rounded-full flex-[40] mr-[20px]"
        style={style}
      />
      <div className="rounded-[5px] w-[200px] h-[20px] flex-1" style={style} />
    </motion.li>
  );
};
