"use client";

import { useEffect } from "react";
import "animate.css";

export default function WowWrapper({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              const delay = el.getAttribute("data-wow-delay") || "0s";
              el.style.animationDelay = delay;
              // Only add base animation class
              el.classList.add("animate__animated");
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.2 }
      );

      document.querySelectorAll(".wow").forEach((el) => observer.observe(el));
    }
  }, []);

  return <>{children}</>;
}
