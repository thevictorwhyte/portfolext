function SectionContainer(props) {
  return (
    <section className="px-[20px] lg:px-[100px] w-[100%]">
      {props.children}
    </section>
  );
}

export default SectionContainer;
