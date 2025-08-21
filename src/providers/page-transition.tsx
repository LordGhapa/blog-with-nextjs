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

  // Animação de círculo AGORA com a propriedade 'exit' inversa
  const circleAnimation: Variants = {
    initial: { clipPath: "circle(0% at 50% 0%)" },
    animate: { clipPath: "circle(120% at 50% 0%)" },
    exit: { clipPath: "circle(0% at 50% 100%)" }, // <-- A MÁGICA ESTÁ AQUI
  };

  const animation = shouldUseCircleAnimation ? circleAnimation : undefined;

  return (
    <AnimatePresence>
      <motion.div
      // key={pathname}
      // variants={animation}
      // initial="initial"

      // animate="animate"
      // exit="exit"
      // transition={{ duration: 2.5, ease: "easeInOut" }}
      >
        <div className="border border-red-500">
          pathname:{pathname} -- previousPathname: {previousPathname}
        </div>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
