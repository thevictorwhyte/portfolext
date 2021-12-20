import { useRef } from "react";
import { motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";

const Menu = ({ toggleMenu, isMenuOpen }) => {
  const containerRef = useRef(null);

  const handleToggle = () => {
    toggleMenu();
  };

  return (
    <motion.nav
      initial={false}
      animate={isMenuOpen ? "open" : "closed"}
      ref={containerRef}
    >
      <MenuToggle toggle={handleToggle} />
    </motion.nav>
  );
};

export default Menu;
