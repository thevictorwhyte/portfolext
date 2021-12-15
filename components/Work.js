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
      <div>
        <h3 className="font-fira text-secondary font-medium text-[20px] my-4">
          Featured Projects
        </h3>
        <div className="grid grid-cols-2 gap-[40px]">
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
          <div className="grid grid-cols-3 gap-[40px]">
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

          <div className="mt-[40px]">
            <h3 className="font-fira text-secondary font-medium text-[20px] my-4">
              UX Case Studies
            </h3>

            <div className="grid grid-cols-4 gap-[40px]">
              {uxCaseStudies.map(
                ({ id, title, desc, projectImg, studyUrl }) => (
                  <CaseStudy
                    key={id}
                    title={title}
                    desc={desc}
                    projectImg={projectImg}
                    studyUrl={studyUrl}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Work;
