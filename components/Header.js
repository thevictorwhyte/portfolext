import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import Menu from "./Menu/Menu";
import useOnClickOutside from "../hooks/useOnClickOutside";

const defaultColor = "text-[#8892B0]";
const active = "text-secondary";
function Header({ aboutRef, workRef, contactRef, navRef, sidebarRef }) {
  const [isMenuOpen, toggleMenu] = useCycle(false, true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [homeColor, setHomeColour] = useState(active);
  const [aboutColor, setAboutColour] = useState(defaultColor);
  const [workColor, setWorkColor] = useState(defaultColor);
  const [contactColor, setContactColor] = useState(defaultColor);
  const menuToggleRef = useRef(null);

  const handleScroll = () => {
    setIsScrolling(window.pageYOffset > 50);

    if (
      window.scrollY >= 0 &&
      window.scrollY <
        aboutRef.current.offsetTop - navRef.current.clientHeight - 10
    ) {
      setHomeColour(active);
    } else {
      setHomeColour(defaultColor);
    }

    // about condition
    if (
      window.scrollY >=
        aboutRef.current.offsetTop - navRef.current.clientHeight - 10 &&
      window.scrollY <
        workRef.current.offsetTop - navRef.current.clientHeight - 10
    ) {
      setAboutColour(active);
    } else {
      setAboutColour(defaultColor);
    }

    // work condition
    if (
      window.scrollY >=
        workRef.current.offsetTop - navRef.current.clientHeight - 10 &&
      window.scrollY <
        contactRef.current.offsetTop - navRef.current.clientHeight - 10
    ) {
      setWorkColor(active);
    } else {
      setWorkColor(defaultColor);
    }

    // contact condition
    if (
      window.scrollY >=
      contactRef.current.offsetTop - navRef.current.clientHeight - 10
    ) {
      setContactColor(active);
    } else {
      setContactColor(defaultColor);
    }
  };

  useOnClickOutside([sidebarRef, menuToggleRef], () => toggleMenu(0));

  const scrollToRef = (ref) => {
    toggleMenu(0);
    window.scrollTo(
      0,
      ref.current.offsetTop - navRef.current.clientHeight - 10
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navContainerVariant = {
    hidden: {
      y: 0,
      opacity: 1,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0,
        delay: 0.7,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const logoAndButtonVariant = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  const navItems = {
    hidden: {
      y: -10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const menuContainerVariant = {
    hidden: {
      opacity: 0,
      display: "none",
    },
    visible: {
      opacity: isMenuOpen ? 1 : 0,
      display: isMenuOpen ? "inherit" : "none",
    },
  };

  const menuSideBar = {
    hidden: {
      x: "100vw",
      opacity: 1,
    },
    visible: {
      x: isMenuOpen ? 0 : "100vw",
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <header className="w-full">
      <nav
        ref={navRef}
        className={`flex items-center px-[20px] lg:px-[30px] py-[15px] justify-between bg-opacity-80 bg-primary backdrop-blur-lg top-0 fixed w-full z-[40] ${
          isScrolling && " transition transform duration-200 shadow-custom"
        }`}
      >
        <motion.div
          variants={menuContainerVariant}
          initial="hidden"
          animate="visible"
          className="md:hidden absolute top-0 left-0 w-[100vw] h-[100vh] z-[30] bg-opacity-50 bg-primary backdrop-blur-lg md:backdrop-blur-0"
        >
          <motion.div
            variants={menuSideBar}
            initial="hidden"
            animate="visible"
            ref={sidebarRef}
            className="md:hidden absolute w-[70%] h-[100vh] bg-tertiary top-0 right-0"
          >
            <div className="md:hidden flex flex-col items-center space-y-[40px] mt-[4rem]">
              <motion.div
                className={`navIcon ${homeColor}`}
                variants={navItems}
                onClick={() => {
                  toggleMenu(0);
                  window.scrollTo(0, 0);
                }}
              >
                <span className="text-secondary">01. </span>Home
              </motion.div>
              <motion.div
                onClick={() => scrollToRef(aboutRef)}
                variants={navItems}
                className={`navIcon ${aboutColor}`}
              >
                <span className="text-secondary">02. </span>About
              </motion.div>
              <motion.div
                className={`navIcon ${workColor}`}
                variants={navItems}
                onClick={() => scrollToRef(workRef)}
              >
                <span className="text-secondary">03. </span>Work
              </motion.div>
              <motion.div
                className={`navIcon ${contactColor}`}
                variants={navItems}
                onClick={() => scrollToRef(contactRef)}
              >
                <span className="text-secondary">04. </span>Contact
              </motion.div>

              <button className="primaryButton">Download resume</button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={logoAndButtonVariant}
          initial="hidden"
          animate="visible"
          className="relative h-10 w-10 lg:h-12 lg:w-12 z-[80]"
          onClick={() => window.scrollTo(0, 0)}
        >
          <Image
            src="/assets/logo.svg"
            loading="eager"
            layout="fill"
            objectFit="contain"
            className="cursor-pointer"
          />
        </motion.div>

        <motion.div
          variants={logoAndButtonVariant}
          initial="hidden"
          animate="visible"
          className="md:hidden z-[180]"
          ref={menuToggleRef}
        >
          <Menu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </motion.div>

        <motion.div
          variants={navContainerVariant}
          animate="visible"
          initial="hidden"
          className=" hidden md:flex md:space-x-[46px] lg:space-x-[86px]"
        >
          <motion.div
            className={`navIcon ${homeColor}`}
            variants={navItems}
            onClick={() => window.scrollTo(0, 0)}
          >
            <span className="text-secondary">01. </span>Home
          </motion.div>
          <motion.div
            onClick={() => scrollToRef(aboutRef)}
            variants={navItems}
            className={`navIcon ${aboutColor}`}
          >
            <span className="text-secondary">02. </span>About
          </motion.div>
          <motion.div
            className={`navIcon ${workColor}`}
            variants={navItems}
            onClick={() => scrollToRef(workRef)}
          >
            <span className="text-secondary">03. </span>Work
          </motion.div>
          <motion.div
            className={`navIcon ${contactColor}`}
            variants={navItems}
            onClick={() => scrollToRef(contactRef)}
          >
            <span className="text-secondary">04. </span>Contact
          </motion.div>
        </motion.div>

        <motion.button
          variants={logoAndButtonVariant}
          initial="hidden"
          animate="visible"
          className="hidden md:inline primaryButton"
        >
          Download resume
        </motion.button>
      </nav>
    </header>
  );
}

export default Header;
