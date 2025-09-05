import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({service}) {
  return (
    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={service.delay}>
      <div className="service-box-items mt-0">
        <div className="icon">
          <Image
            width={50}
            height={50}
            src={service.icon}
            alt="img"
          />
        </div>
        <div className="content">
          <h4>
            <Link href={service.link}>{service.name}</Link>
          </h4>
          <p>{service.desc}</p>
          <Link href={service.link} className="link-btn">
            Read More <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
