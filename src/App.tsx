import { motion } from "motion/react";

function App() {
  return (
    <>
      <motion.h1 initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{duration: 0.8, ease: "easeInOut"}}
      >
        Welcome to React with TypeScript!
      </motion.h1>
    </>
  );
}

export default App;
