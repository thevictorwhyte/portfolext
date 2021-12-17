import FormComponent from "./Form";
import SectionContainer from "./SectionContainer";
import SectionHeader from "./SectionHeader";

function Contact({ sectionRef }) {
  return (
    <SectionContainer amount={0.6} sectionRef={sectionRef}>
      <SectionHeader>Contact</SectionHeader>
      <div className="flex flex-col md:flex-row md:justify-between w-full space-y-[20px] md:space-y-0 md:space-x-[40px]">
        <div className="flex flex-col justify-between w-full md:w-[50%]">
          <p className="font-poppins font-normal md:font-medium text-[14px] md:text-md max-w-[380px] text-whitetwo">
            I would love to hear from you on how I could be of help to your team
            or project. You can also reach me via email:
            victordavidwhyte@gmail.com
          </p>
          <h2 className="hidden md:inline font-poppins font-medium max-w-[300px] text-2xl text-[#CCD6F6]">
            Thank you for checking out my portfolio{" "}
            <span className="text-secondary font-poppins text-[40px] font-bold">
              .
            </span>
          </h2>
        </div>
        <div className="w-full md:w-[50%]">
          <FormComponent />
        </div>
        <h2 className=" md:hidden font-poppins font-medium max-w-[300px] text-2xl text-[#CCD6F6]">
          Thank you for checking out my portfolio{" "}
          <span className="text-secondary font-poppins text-[40px] font-bold">
            .
          </span>
        </h2>
      </div>
    </SectionContainer>
  );
}

export default Contact;
