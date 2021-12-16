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
        <p className="font-poppins font-normal text-sm xl:text-md leading-[170%]">
          Other than finishing university with a first calss honours in
          Electrical/Electronics Engineering, I also posses a plethora of
          software engineering techniques and skills to deliver solutions
          efficiently. <br />
          <br />
          In developing Javascript applications, I am equipped with a wide range
          of tolls in both the front and back end ecosytem. Because of a solid
          understanding of foundational concepts, I am also able to quickly pick
          up on new tools to help productivity.
        </p>
      ),
      buttonUrl: "https://github.com/thevictorwhyte",
      buttonText: "View Github",
    },
    Design: {
      text: (
        <p className="font-poppins font-normal text-sm xl:text-md leading-[170%]">
          It's human instinct to always judge a book by its cover. That is why a
          product is only as good as how it looks and feels to a user. This was
          the rason I decided to broaden my knowledge on design principles and
          techniques to give me an edge in the tech industry. <br />
          <br />
          Thanks to the grow with Google foundation, I was able to pursue their
          Google UX design certification program. I continue to apply the
          knowlege gained like wire framing and user research into my
          development and design process.
        </p>
      ),
      buttonUrl: "https://github.com/thevictorwhyte",
      buttonText: "View Dribbble",
    },
    Skills: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis at mi massa nunc rhoncus egestas sapien. Enim dui blandit nullam suscipit. Pharetra, arcu, pharetra, diam at tellus. Suspendisse At facilisi lorem aliquet sed. Vitae dictumst dui dui sed venenatis vel. Nullam mauris in porttitor consectetur lacus, maecenas quam. Leo, at a dui euismod. At quis purus pellentesque at massa ac.",
      buttonUrl: "https://github.com/thevictorwhyte",
      buttonText: "View LinkedIn",
    },
  });
  return (
    <SectionContainer sectionRef={sectionRef}>
      <SectionHeader>About me</SectionHeader>

      <div className="flex flex-col md:flex-row md:items-center space-y-[40px] md:space-y-0">
        <div className="w-full md:max-w-sm  lg:max-w-lg xl:max-w-xl">
          <Tab.Group>
            <Tab.List className="flex px-2 py-2 space-x-4 bg-tertiary rounded-xl">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full font-fira py-2.5 text-[12px] md:text-sm leading-5 font-medium text-secondary rounded-lg",
                      "focus:outline-none transition duration-200",
                      selected
                        ? "bg-primary shadow text-secondary"
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
                    "bg-tertiary rounded-xl p-3 text-sm text-[#8892B0]",
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
          <div className="relative h-64 w-64 xl:h-[400px] xl:w-[400px] mt-[20px] md:mt-0">
            <Image
              src="/assets/my_image.png"
              layout="fill"
              objectFit="contain"
              className="opacity-[60%] hover:opacity-100 transition duration-200"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default About;
