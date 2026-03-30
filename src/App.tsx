import { motion } from "motion/react";

function App() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        Welcome to React with TypeScript!
      </motion.h1>
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.9, y: 1 }}
        transition={{ type: "spring" }}
      >
        Button
      </motion.button>
    </>
  );
}

export default App;
