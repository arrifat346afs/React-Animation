import { motion } from "motion/react";
// import { tr } from "motion/react-client";

const pareant = {
  hidden : { opacity: 0 },
  visible : {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}
const child = {
  hidden : { opacity: 0, y: 20 },
  visible : { opacity: 1, y: 0 }
}


export function Feture() {

    const fetureName = ["Feature 1", "Feature 2", "Feature 3"];

  return (
    <div>
      <h2>Feture Component</h2>
      <motion.ul variants={pareant} initial="hidden" animate="visible">
        {fetureName.map((name, index) => (
          <motion.li 
            key={index}
            variants={child}
          >
            {name}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}


