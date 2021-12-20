import Head from "next/head";
import { useState } from "react";
import { FaDribbble, FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Work from "../components/Work";
import VideoModal from "../components/VideoModal";

import { useRef } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const sidebarRef = useRef(null);
  return (
    <div className="">
      <Head>
        <title>Victor Whyte</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        navRef={navRef}
        aboutRef={aboutRef}
        workRef={workRef}
        contactRef={contactRef}
        sidebarRef={sidebarRef}
      />
      <main
        className={`w-full xl:max-w-[1440px] flex flex-col mx-auto space-y-[111px]`}
      >
        <Hero />
        <About sectionRef={aboutRef} />
        <Work sectionRef={workRef} setIsModalOpen={setIsModalOpen} />
        <Contact sectionRef={contactRef} />
        {/* <ModalContext.Provider>
          <VideoModal />
        </ModalContext.Provider> */}
        <VideoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </main>

      <footer className="mt-[80px] pb-[20px]">
        <div className="flex flex-col justify-center items-center space-y-2">
          <h4 className="font-fira font-normal text-whiteone text-sm">
            Designed and built by Victor{" "}
            <span className="text-secondary">Whyte</span>
          </h4>
          <div className="flex space-x-4">
            <FaGithub className="icon" />
            <FaLinkedinIn className="icon" />
            <FaDribbble className="icon" />
            <FaMediumM className="icon" />
          </div>
        </div>
      </footer>
    </div>
  );
}
