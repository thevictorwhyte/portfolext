import SectionContainer from "./SectionContainer";
import SectionHeader from "./SectionHeader";
import featuredProjects from "../content/projects/featuredProjects";
import FeaturedProject from "./FeaturedProject";

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
      </div>
    </SectionContainer>
  );
}

export default Work;
