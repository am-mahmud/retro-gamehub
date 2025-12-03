import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="w-full max-w-md px-8">
        
      
        <div className="text-center mb-8">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block text-6xl"
          >
            🎮
          </motion.div>
        </div>

      
        <div className="border-4 border-black dark:border-cyan-400 p-2 bg-white dark:bg-gray-800">
        
          <motion.div
            animate={{
              width: ["0%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-8 bg-orange-400 border-2 border-black dark:border-cyan-400"
          />
        </div>

     
        <motion.p
          animate={{
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="text-center mt-6 space-mono font-bold text-lg text-black dark:text-white"
        >
          LOADING GAME...
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;