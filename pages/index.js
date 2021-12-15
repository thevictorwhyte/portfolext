import Head from "next/head";
import { FaDribbble, FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Work from "../components/Work";

export default function Home() {
  return (
    <div className="h-screen w-screen max-w-[100%] flex flex-col items-center ">
      <Head>
        <title>Victor Whyte</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          ref="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap"
          ref="stylesheet"
        />
      </Head>
      <Header />
      <main className="max-w-[1440px] flex flex-col space-y-[111px]">
        <Hero />
        <About />
        <Work />
        <Contact />
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
