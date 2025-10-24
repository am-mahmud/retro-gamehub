import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const bounceTransition = {
    y: {
      duration: 0.8,  // slower bounce
      yoyo: Infinity,
      ease: "easeOut",
    },
    backgroundColor: {
      duration: 2,
      yoyo: Infinity,
      ease: "linear",
    },
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FFF8E1]">
      <div className="flex space-x-3">
        {[1, 2, 3].map((dot) => (
          <motion.div
            key={dot}
            className="w-5 h-5 rounded-full bg-yellow-400"
            transition={bounceTransition}
            animate={{
              y: ["0%", "-50%", "0%"],
              backgroundColor: ["#FFC107", "#FFD54F", "#FFC107"],
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
