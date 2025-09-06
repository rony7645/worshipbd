import Image from "next/image";
import Link from "next/link";
import breadcrumbShape1 from "@/public/img/breadcrumb-shape.png";
import breadcrumbShape2 from "@/public/img/breadcrumb-shape-2.png";
import breadcrumbBg from "@/public/img/breadcrumb.jpg";
import { ChevronRight } from "lucide-react";



export default function Breadcrumb({title}) {

  return (
    <section>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: `url(${breadcrumbBg.src})` }}
      >
        <div className="left-shape">
          <Image src={breadcrumbShape1} alt="shape" />
        </div>
        <div className="right-shape">
          <Image src={breadcrumbShape2} alt="shape" />
        </div>
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <h1
                className="wow animate__animated animate__fadeInUp"
                data-wow-delay=".3s"
              >
                {title}
              </h1>
            </div>
            <ul
              className="breadcrumb-items wow animate__animated animate__fadeInUp"
              data-wow-delay=".5s"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <ChevronRight />
              </li>
              <li>{title}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
