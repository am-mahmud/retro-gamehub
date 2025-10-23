import React from 'react';
import { motion } from 'framer-motion';

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full min-h-screen p-6 bg-gray-100 text-gray-900"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
