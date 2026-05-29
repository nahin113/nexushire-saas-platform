"use client";
import { motion } from "motion/react"; // continuous package build name or "framer-motion"

const TypewriterHeader = ({ text }) => {
  // Split text into individual characters
  const letters = Array.from(text);

  // Variant containers to control parent and children orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Controls typing speed per letter (lower = faster)
        delayChildren: 0.2 * i,
      },
    }),
  };

  const childVariants = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 0,
      y: 10, // Slight upward slide as it types
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6 max-w-3xl leading-[1.15] flex flex-wrap"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          // Preserve spaces cleanly in HTML layout arrays
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default TypewriterHeader;
