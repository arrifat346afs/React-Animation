import { motion } from "motion/react";
import  { Feture } from "./components/Feture";
import ModeToggle from "./components/mode-toggle";

function App() {
  return (
    <>
    <div className="flex flex-col items-center justify-center w-full h-screen gap-5">
      <ModeToggle />
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        
      >
        Welcome to React with TypeScript!
      </motion.h1>
      <motion.button
        className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-lg px-4 py-2 font-medium"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.9, y: 1 }}
        transition={{ type: "spring" }}
      >
        Button
      </motion.button>
      <Feture /></div>
    </>
  );
}

export default App;
