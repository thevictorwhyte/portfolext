import Image from "next/image";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { FaArrowRight } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import SectionContainer from "./SectionContainer";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function About({ sectionRef }) {
  let [categories] = useState({
    Engineering: {
      text: (
        <div className="font-poppins font-normal text-whitetwo text-sm xl:text-md leading-[170%]">
          <p>
            Hello! My name is Victor Whyte and I am a fullstack engineer with a
            deep understanding of UI/UX design. My interest started back in 2016
            when I commenced my Electrical/Electronics Engineering degree
            program. Although I graduated with a first class honours, I have
            since chosen to focus on software engineering and building
            functional applications for web and mobile.
          </p>
          <br />
          <p>
            In developing Javascript applications, I am equipped with a wide
            range of tools for the front and back end. Because of a solid
            understanding of foundational concepts, I am also able to quickly
            pick up on new tools to help productivity.
          </p>
        </div>
      ),
      buttonUrl: "https://github.com/thevictorwhyte",
      buttonText: "View Github",
    },
    Design: {
      text: (
        <p className="font-poppins font-normal text-sm xl:text-md leading-[170%]">
          It's human instinct to always judge a book by its cover. This was the
          reason I decided to broaden my knowledge on design principles and
          techniques to give me an edge in the tech industry. <br />
          <br />
          Thanks to the Grow with Google foundation, I was able to pursue a
          <span className="text-secondary">
            {" "}
            Google UX design certification
          </span>
          . I continue to apply the knowledge gained during the period of the
          program, e.g. wire framing and user research, into my development and
          design process.
        </p>
      ),
      buttonUrl: "https://dribbble.com/thevictorwhyte",
      buttonText: "View Dribbble",
    },
    Skills: {
      text: (
        <div className="font-poppins font-normal text-whitetwo text-md xl:text-md leading-[170%] flex justify-between">
          <div>
            <span className="font-fira text-secondary">Front-end</span>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>ReactJs</li>
              <li>React Native</li>
            </ul>
          </div>

          <div>
            <span className="font-fira text-secondary">Back-end</span>
            <ul>
              <li>Node</li>
              <li>Express</li>
              <li>Firebase</li>
              <li>GraphQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div>
            <span className="font-fira text-secondary">Design</span>
            <ul>
              <li>Figma</li>
              <li>Wire framing</li>
              <li>Interaction design</li>
              <li>Motion design</li>
              <li>Product design</li>
            </ul>
          </div>
        </div>
      ),
      buttonUrl: "https://www.linkedin.com/in/thevictorwhyte/",
      buttonText: "View LinkedIn",
    },
  });
  return (
    <SectionContainer amount={0.6} sectionRef={sectionRef}>
      <SectionHeader>About me</SectionHeader>

      <div className="flex flex-col md:flex-row md:items-start space-y-[40px] md:space-y-0">
        <div className="w-full md:max-w-sm  lg:max-w-lg xl:max-w-xl">
          <Tab.Group>
            <Tab.List className="flex px-0 py-2 space-x-4 bg-transparent rounded-xl">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full font-fira py-2.5 text-[12px] md:text-sm leading-5 font-medium text-secondary rounded-lg",
                      "focus:outline-none transition duration-200",
                      selected
                        ? "bg-tertiary shadow text-secondary"
                        : "text-[#8892B0] hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-4">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "bg-transparent rounded-xl p-0 text-sm text-[#8892B0]",
                    "focus:outline-none"
                  )}
                >
                  <div>
                    {posts.text}
                    <a
                      href={posts.buttonUrl}
                      target="_blank"
                      className="flex w-fit ml-auto items-center font-poppins text-sm text-[#CF8387] px-4 py-2 cursor-pointer group transition transform duration-200"
                    >
                      <span className="transition transform">
                        {posts.buttonText}
                      </span>
                      <FaArrowRight className="inline ml-2 transition transform group-hover:translate-x-1 group-hover:text-color-secondary text-sm" />
                    </a>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className="mx-auto lg:mx-0 lg:ml-auto ">
          <div className="relative h-64 w-64 rounded-full xl:h-[400px] xl:w-[400px] mt-[20px] md:mt-0">
            <Image
              src="/assets/my_image.png"
              layout="fill"
              loading="eager"
              objectFit="contain"
              className=""
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default About;
