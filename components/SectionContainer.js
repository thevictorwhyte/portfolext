function SectionContainer(props) {
  return (
    <section ref={props.sectionRef} className="px-[20px] lg:px-[100px]">
      {props.children}
    </section>
  );
}

export default SectionContainer;
