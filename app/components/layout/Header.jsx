import logo from "@/public/img/logo/worshipbd.gif";
import { Menu } from "lucide-react"; // hamburger icon
import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";

export default function Header() {
  const servicesMenu = [
    { name: "Web Design & Developments", href: "/our-services/web-development" },
    { name: "Graphics Design", href: "/our-services/graphics-design" },
    { name: "Digital Marketing", href: "/our-services/digital-marketing" },
    { name: "SEO", href: "/our-services/seo" },
    { name: "Video Editing", href: "/our-services/video-editing" },
    { name: "Data Entry", href: "/our-services/data-entry" },
  ];

  return (
    <header id="header-sticky" className="header-1 style-2">
      <div className="container-fluid">
        <div className="mega-menu-wrapper">
          <div className="header-main">
            {/* Logo */}
            <div className="logo">
              <Link href="/" className="header-logo-3">
                <Image src={logo} width={210} alt="Worshipbd-Logo" />
              </Link>
            </div>

            {/* Main Menu */}
            <div className="mean__menu-wrapper">
              <div className="main-menu">
                <nav id="mobile-menu">
                  <ul>
                    <li className="active menu-thumb">
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about-us">About us</Link>
                    </li>
                    <li>
                      <Link href="/our-services">Services</Link>
                      <ul className="submenu">
                        {servicesMenu.map((item, i) => (
                          <li key={i}>
                            <Link href={item.href}>{item.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <Link href="/case-studies">Case Studies</Link>
                    </li>
                    <li>
                      <Link href="/blogs">Blogs</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Header Right */}
            <div className="header-right d-flex justify-content-end align-items-center">
              <Button link="/" className="main-button">
                Get Started
              </Button>

              <div className="header__hamburger d-xl-none my-auto">
                <div className="sidebar__toggle">
                  <Menu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
