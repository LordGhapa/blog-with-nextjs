"use client";
import { useEffect, unstable_ViewTransition as ViewTransition } from "react";
export default function ViewTransitionsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Adiciona a classe 'page-loaded' ao <html> após a primeira renderização.
    const timeoutId = setTimeout(() => {
      document.documentElement.classList.add("page-loaded");
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <ViewTransition name={`site`} default="site-transition">
      {children}
    </ViewTransition>
  );
}
