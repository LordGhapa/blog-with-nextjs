"use client";

import { usePathname } from "@/i18n/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";

import { type ReactNode, useEffect, useRef } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const previousPathnameRef = useRef(pathname);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      document.documentElement.classList.add("page-loaded");
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    previousPathnameRef.current = pathname;
  }, [pathname]);

  const previousPathname = previousPathnameRef.current;

  const isLeavingHomeToPost =
    previousPathname === "/" && pathname.startsWith("/post/");
  const isLeavingPostToHome =
    previousPathname.startsWith("/post/") && pathname === "/";

  const shouldUseCircleAnimation = !isLeavingHomeToPost && !isLeavingPostToHome;

  const circleAnimation: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const animation = shouldUseCircleAnimation ? circleAnimation : undefined;

  return (
    <AnimatePresence key={pathname}>
      <motion.div
        key={pathname}
        variants={animation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
