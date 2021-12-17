import { motion } from "framer-motion";

function SectionContainer(props) {
  const sectionVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.4,
      },
    },
  };
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: props.amount }}
      ref={props.sectionRef}
      className="px-[20px] lg:px-[100px]"
    >
      {props.children}
    </motion.section>
  );
}

export default SectionContainer;
