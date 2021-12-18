import { motion } from "framer-motion";
export const MenuItem = ({ home = false, text }) => {
  return (
    <motion.div
      className={`navIcon ${homeColor}`}
      variants={navItems}
      onClick={() => window.scrollTo(0, 0)}
    >
      <span className="text-secondary"> 01. </span>Home
    </motion.div>
  );
};
