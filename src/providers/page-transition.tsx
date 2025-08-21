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
    initial: { clipPath: "circle(0% at 50% 0%)" },
    animate: { clipPath: "circle(100% at 50% 0%)" },
    exit: {
      clipPath: "circle(100% at 50% 0%)",
    },
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
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
