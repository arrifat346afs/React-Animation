import { motion } from "motion/react";





export function Feture() {

    const fetureName = ["Feature 1", "Feature 2", "Feature 3"];

  return (
    <div>
      <h2>Feture Component</h2>
      <ul>
        {fetureName.map((name, index) => (
          <motion.li 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          key={index}>
            {name}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}


