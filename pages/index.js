import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="h-screen w-screen max-w-[100%]">
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
      <div className="space-y-[150px]">
        <Header />
        <About />
      </div>

      {/* <Work />
      <Contact />
      <Footer /> */}
    </div>
  );
}
