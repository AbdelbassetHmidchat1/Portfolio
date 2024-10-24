"use client";

import React from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { usePathname } from "next/navigation";

function PageTransition({ children }) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      {/* <div key={pathname}></div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 0.4, ease: easeInOut },
        }}
        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
      /> */}
      <div key={pathname}>{children}</div>
    </AnimatePresence>
  );
}

export default PageTransition;
