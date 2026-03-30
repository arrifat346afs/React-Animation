import { motion } from "motion/react";
// import { tr } from "motion/react-client";

const pareant = {
  hidden : { opacity: 0 },
  visible : {
    opacity: 1,
    transition: {
      staggerChildren: 1
    }
  }
}
const child = {
  hidden : { opacity: 0, x: -20 },
  visible : { opacity: 1, x: 0, transition: { duration: 0.5 } }
}


export function Feture() {

    const fetureName = ["Feature 1", "Feature 2", "Feature 3"];

  return (
    <div>
      <h2>Feture Component</h2>
      <motion.ul>
        {fetureName.map((name, index) => (
          <motion.li 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            key={index}>
            {name}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}


