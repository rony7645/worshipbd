"use client"

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function ServiceSidebar() {

    const pathname = usePathname()

    console.log(pathname);
    

    return(
        <>
            <div className="col-12 col-lg-4">
                <div className="main-sidebar sticky-style">
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h4>All Services</h4>
                    </div>
                    <div className="service-widget-categories">
                      <ul>
                        <li className={pathname === "/our-services/web-development" && "active"}>
                          <Link href="/our-services/web-development">
                            Web Design & Development
                          </Link>
                          <span>
                            <ArrowRight size={16} />
                          </span>
                        </li>
                        <li className={pathname === "/our-services/graphics-design" && "active"}>
                          <Link href="/our-services/graphics-design">
                            Graphics Design
                          </Link>
                          <span>
                            <ArrowRight size={16} />
                          </span>
                        </li>
                        <li className={pathname === "/our-services/digital-marketing" && "active"}>
                          <Link href="/our-services/digital-marketing">
                            Digital Marketing
                          </Link>
                          <span>
                            <ArrowRight size={16} />
                          </span>
                        </li>
                        <li className={pathname === "/our-services/seo" && "active"}>
                          <Link href="/our-services/seo">
                            Search Engine Optimization (SEO)
                          </Link>
                          <span>
                            <ArrowRight size={16} />
                          </span>
                        </li>
                        <li className={pathname === "/our-services/video-editing" && "active"}>
                          <Link href="/our-services/video-editing">
                            Video Editing
                          </Link>
                          <span>
                            <ArrowRight size={16} />
                          </span>
                        </li>
                        <li className={pathname === "/our-services/data-entry" && "active"}>
                          <Link href="/our-services/data-entry">Data Entry</Link>
                          <span>
                            <ArrowRight size={16} />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
        </>
    )
}