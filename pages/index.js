import Head from "next/head";
import { useState } from "react";
import { FaDribbble, FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";

import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Work from "../components/Work";
import VideoModal from "../components/VideoModal";

import { client } from "../lib/client";
import { useRef } from "react";

const Home = ({ featuredProjects }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [embedId, setEmbedId] = useState("");
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
        <Work
          projects={{ featuredProjects }}
          sectionRef={workRef}
          setIsModalOpen={setIsModalOpen}
          setEmbedId={setEmbedId}
        />
        <Contact sectionRef={contactRef} />

        <VideoModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          embedId={embedId}
        />
      </main>

      <footer className="mt-[80px] pb-[20px]">
        <div className="flex flex-col justify-center items-center space-y-2">
          <h4 className="font-fira font-normal text-whiteone text-sm">
            Designed and built by Victor{" "}
            <span className="text-secondary">Whyte</span>
          </h4>
          <div className="flex space-x-4">
            <a href="https://github.com/thevictorwhyte" target="_blank">
              <FaGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/thevictorwhyte/"
              target="_blank"
            >
              <FaLinkedinIn className="icon" />
            </a>
            <a href="https://dribbble.com/thevictorwhyte" target="_blank">
              <FaDribbble className="icon" />
            </a>
            <a href="https://thevictorwhyte.medium.com/" target="_blank">
              <FaMediumM className="icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export const getServerSideProps = async () => {
  const featuredProjectsQuery =
    '*[_type == "featuredProject"] | order(orderNum asc)';
  const featuredProjects = await client.fetch(featuredProjectsQuery);

  return {
    props: { featuredProjects },
  };
};

export default Home;
