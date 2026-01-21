"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ServiceSidebar() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <>
      <div className="col-12 col-lg-4">
        <div className="main-sidebar sticky-style">
          <div className="single-sidebar-widget">
            <div className="wid-title">
              <h4>All Services</h4>
            </div>
            <div className="service-widget-categories">
              <ul>
                <li>
                  <Link
                    href="/our-services/web-development"
                    className={
                      pathname === "/our-services/web-development" && "active"
                    }
                  >
                    Web Design & Development
                    <span>
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-services/graphics-design"
                    className={
                      pathname === "/our-services/graphics-design" && "active"
                    }
                  >
                    Graphics Design
                    <span>
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-services/digital-marketing"
                    className={
                      pathname === "/our-services/digital-marketing" && "active"
                    }
                  >
                    Digital Marketing{" "}
                    <span>
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-services/seo"
                    className={pathname === "/our-services/seo" && "active"}
                  >
                    Search Engine Optimization (SEO)
                    <span>
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-services/video-editing"
                    className={
                      pathname === "/our-services/video-editing" && "active"
                    }
                  >
                    Video Editing
                    <span>
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-services/data-entry"
                    className={
                      pathname === "/our-services/data-entry" && "active"
                    }
                  >
                    Data Entry
                    <span>
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
