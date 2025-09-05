"use client"
import { ChevronRight } from "lucide-react";
import Link from "next/link";
export default function Button({children="Click Here", link="#", className }) {
  return (
    <div className={`${className}`}>
      <div className="main-button wow fadeInUp d-inline-block" data-wow-delay=".3s">
        <Link href={link}>
          {" "}
          <span className="theme-btn">{children}</span>
          <span className="arrow-btn">
            <ChevronRight />
          </span>
        </Link>
      </div>
    </div>
  );
}
