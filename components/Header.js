import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useCycle } from "framer-motion";
import Menu from "./Menu/Menu";

const defaultColor = "text-[#8892B0]";
const active = "text-secondary";
function Header({ aboutRef, workRef, contactRef, navRef }) {
  const [isMenuOpen, toggleMenu] = useCycle(false, true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [homeColor, setHomeColour] = useState(active);
  const [aboutColor, setAboutColour] = useState(defaultColor);
  const [workColor, setWorkColor] = useState(defaultColor);
  const [contactColor, setContactColor] = useState(defaultColor);

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

  const scrollToRef = (ref) => {
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
    },
    visible: {
      opacity: isMenuOpen ? 1 : 0,
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
          className="md:hidden absolute top-0 left-0 w-[100vw] h-[100vh] z-[30] bg-opacity-50 bg-primary backdrop-blur-lg"
        >
          <motion.div
            variants={menuSideBar}
            initial="hidden"
            animate="visible"
            className="absolute w-[70%] h-[100vh] bg-tertiary top-0 right-0"
          >
            <div className="flex flex-col items-center space-y-[40px] mt-[4rem]">
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
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={logoAndButtonVariant}
          initial="hidden"
          animate="visible"
          className="relative h-10 w-10 lg:h-12 lg:w-12 z-[80]"
        >
          <Image
            src="/assets/logo.svg"
            layout="fill"
            objectFit="contain"
            className="cursor-pointer"
          />
        </motion.div>

        <div className="md:hidden z-[180]">
          <Menu toggleMenu={toggleMenu} />
        </div>

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
        {/* <a
          href="https://google.com"
          target="_blank"
          class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-secondary text-secondary"
        >
          <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-secondary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span class=" font-fira text-sm relative text-secondary transition duration-300 group-hover:text-white ease">
            Download resume
          </span>
        </a> */}
      </nav>
      {/* <div className="md:hidden fixed w-[100vw] h-[100vh] z-[50] bg-opacity-50 bg-primary backdrop-blur-lg">
        <div className="w-[70%] h-[100%] bg-tertiary absolute top-0 right-0"></div>
      </div> */}
    </header>
  );
}

export default Header;
