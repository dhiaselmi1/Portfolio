import { motion } from "framer-motion";

export function HandwritingAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full h-screen flex items-center justify-center bg-white dark:bg-gray-950"
    >
      <motion.img
        src="/assets/favicon.png"
        alt="MDS Logo"
        initial={{ 
          opacity: 0, 
          scale: 0.5,
          rotate: -10
        }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          rotate: 0
        }}
        transition={{
          duration: 1.2,
          ease: [0.34, 1.56, 0.64, 1], // Bounce effect
          opacity: { duration: 0.8 },
        }}
        className="w-64 h-64 md:w-96 md:h-96 object-contain"
      />
    </motion.div>
  );
}
