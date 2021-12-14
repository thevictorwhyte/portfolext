function SectionHeader(props) {
  return (
    <div className="flex items-center">
      <h2 className="font-poppins font-semibold text-[#f9f9f9] text-[24px]">
        {props.children}
      </h2>
      <span className="border-b-[1px] w-40 ml-5 border-secondary" />
    </div>
  );
}

export default SectionHeader;