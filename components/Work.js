import SectionContainer from "./SectionContainer";
import SectionHeader from "./SectionHeader";
import FeaturedProject from "./FeaturedProject";
import OtherProject from "./OtherProject";
import CaseStudy from "./CaseStudy";

import { urlFor } from "../lib/client";

function Work({ sectionRef, projects }) {
  const { featuredProjects, otherProjects, uxCaseStudies } = projects;
  return (
    <SectionContainer amount={0.2} sectionRef={sectionRef}>
      <SectionHeader>Work</SectionHeader>
      <h3 className="font-fira text-secondary font-medium text-sm lg:text-[20px] my-4">
        Featured Projects
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] xl:gap-[40px]">
        {featuredProjects.map(
          ({
            _id,
            techUsed,
            title,
            image,
            desc,
            sourceUrl,
            liveUrl,
            embedId
          }) => (
            <FeaturedProject
              key={_id}
              techUsed={techUsed}
              title={title}
              projectImg={urlFor(image).url()}
              desc={desc}
              sourceUrl={sourceUrl}
              liveUrl={liveUrl}
              embedId={embedId}
            />
          )
        )}
      </div>

      <div className="mt-[60px]">
        <h3 className="font-fira text-secondary font-medium text-[20px] my-4">
          Other Projects
        </h3>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-[40px] xs:gap-[20px] xl:gap-[40px]">
          {otherProjects.map(({ _id, title, desc, ongoing, sourceUrl }) => (
            <OtherProject
              key={_id}
              title={title}
              desc={desc}
              ongoing={ongoing}
              sourceUrl={sourceUrl}
            />
          ))}
        </div>
      </div>

      <div className="mt-[60px] w-full">
        <h3 className="font-fira text-secondary font-medium text-[20px] my-4">
          UX Case Studies
        </h3>

        <div className="flex space-x-[20px] overflow-scroll lg:space-x-0 lg:overflow-visible w-full lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:gap-[40px] scrollbar-hide">
          {uxCaseStudies.map(({ _id, title, desc, image, studyUrl }) => (
            <CaseStudy
              key={_id}
              title={title}
              desc={desc}
              projectImg={urlFor(image).url()}
              studyUrl={studyUrl}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export default Work;
