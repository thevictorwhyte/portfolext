import SectionContainer from "./SectionContainer";
import SectionHeader from "./SectionHeader";
import featuredProjects from "../content/projects/featuredProjects";
import FeaturedProject from "./FeaturedProject";
import otherProjects from "../content/projects/otherProjects";
import OtherProject from "./OtherProject";
import uxCaseStudies from "../content/projects/uxCaseStudies";
import CaseStudy from "./CaseStudy";

function Work() {
  return (
    <SectionContainer>
      <SectionHeader>Work</SectionHeader>
      <h3 className="font-fira text-secondary font-medium text-[20px] my-4">
        Featured Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] xl:gap-[40px]">
        {featuredProjects.map(
          ({ id, techUsed, title, projectImg, desc, sourceUrl, liveUrl }) => (
            <FeaturedProject
              key={id}
              techUsed={techUsed}
              title={title}
              projectImg={projectImg}
              desc={desc}
              sourceUrl={sourceUrl}
              liveUrl={liveUrl}
            />
          )
        )}
      </div>
      <div className="mt-[40px]">
        <h3 className="font-fira text-secondary font-medium text-[20px] my-4">
          Other Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
          {otherProjects.map(
            ({ id, title, desc, ongoing, sourceUrl, liveUrl }) => (
              <OtherProject
                key={id}
                title={title}
                desc={desc}
                ongoing={ongoing}
                sourceUrl={sourceUrl}
                liveUrl={liveUrl}
              />
            )
          )}
        </div>
      </div>
      <div className="mt-[40px] w-full">
        <h3 className="font-fira text-secondary font-medium text-[20px] my-4">
          UX Case Studies
        </h3>

        <div className="flex space-x-[20px] overflow-scroll lg:space-x-0 lg:overflow-hidden w-full lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:gap-[40px] scrollbar-hide">
          {uxCaseStudies.map(({ id, title, desc, projectImg, studyUrl }) => (
            <CaseStudy
              key={id}
              title={title}
              desc={desc}
              projectImg={projectImg}
              studyUrl={studyUrl}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export default Work;
