import Image from "next/image";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { FaArrowRight } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import SectionContainer from "./SectionContainer";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function About() {
  let [categories] = useState({
    Engineering: {
      text: (
        <p className="font-poppins text-sm font-medium leading-[170%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis at mi
          massa nunc rhoncus egestas sapien. Enim dui blandit nullam suscipit.
          Pharetra, arcu, pharetra, diam at tellus. <br />
          <br />
          Suspendisse At facilisi lorem aliquet sed. Vitae dictumst dui dui sed
          venenatis vel. Nullam mauris in porttitor consectetur lacus, maecenas
          quam. Leo, at a dui euismod. At quis purus pellentesque at massa ac.
        </p>
      ),
      buttonUrl: "https://github.com/thevictorwhyte",
      buttonText: "View Github",
    },
    Design: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis at mi massa nunc rhoncus egestas sapien. Enim dui blandit nullam suscipit. Pharetra, arcu, pharetra, diam at tellus. Suspendisse At facilisi lorem aliquet sed. Vitae dictumst dui dui sed venenatis vel. Nullam mauris in porttitor consectetur lacus, maecenas quam. Leo, at a dui euismod. At quis purus pellentesque at massa ac.",
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
    <SectionContainer>
      <SectionHeader>About me</SectionHeader>

      <div className="flex items-center">
        <div className="w-full max-w-md">
          <Tab.Group>
            <Tab.List className="flex px-4 py-2 space-x-4 bg-tertiary rounded-xl">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full font-fira py-2.5 text-sm leading-5 font-medium text-secondary rounded-lg",
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
                    "bg-tertiary rounded-xl p-3 text-[#8892B0]",
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
                      <span className="transition transform group-hover:-translate-x-1">
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
        <div className="ml-auto">
          <div className="relative h-[400px] w-[400px]">
            <Image
              src="/assets/my_image.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default About;
