import Image from "next/image";
import client_img from "@/public/img/news/client-img.png"
import { ArrowUpRight, CalendarDays, MessagesSquare } from "lucide-react";
const newsData = [
  {
    href: "/blog/front-end-developer",
    imgSrc: "/img/news/Top-10-front-end-developer-in-Bangladesh.png",
    title: "Best 10 Front End Developers in Bangladesh",
    date: "September 6, 2024",
    comments: 0,
    delay: 0.2,
  },
  {
    href: "/blog/wordpress-website-designer",
    imgSrc: "/img/news/Top-10-WordPress-Website-Designers-in-Bangladesh-Unleash-Your-Websites-Potential-in-2024.png",
    title: "Best 10 WordPress Website Designers in Bangladesh",
    date: "September 6, 2024",
    comments: 0,
    delay: 0.4,
  },
  {
    href: "/blog/best-wordpress-web-design-agency-in-bangladesh",
    imgSrc: "/img/news/Top-10-Best-Web-Design-Company-in-Bangladesh.png",
    title: "Best WordPress Web Design Agency in Bangladesh",
    date: "September 6, 2024",
    comments: 0,
    delay: 0.6,
  },
  {
    href: "/blog/best-wordpress-web-design-agency-in-bangladesh",
    imgSrc: "/img/news/Top-10-Best-Web-Design-Company-in-Bangladesh.png",
    title: "Best WordPress Web Design Agency in Bangladesh",
    date: "September 6, 2024",
    comments: 0,
    delay: 0.6,
  },
];

export default function Blog() {
  return (
    <section className="news-section section-padding fix">
      <div className="left-shape">
        <Image src="/img/news/left-shape.png" alt="img" width={100} height={100} />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <div className="sub-title bg-color-2 wow fadeInUp">
            <span>BLOG & NEWS</span>
          </div>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Stay ahead with insights, tutorials,<br /> and top lists curated by professionals.
          </h2>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          {newsData.map((news, i) => (
            <div className="col-xl-3 col-lg-4 col-md-6" key={i}>
              <div className="news-box-items">
                <div
                  className="news-image wow img-custom-anim-top"
                  data-wow-duration="1.5s"
                  data-wow-delay={`${news.delay}s`}
                >
                  <a href={news.href}>
                    <Image src={news.imgSrc} alt={news.title} width={400} height={250} />
                  </a>
                </div>
                <div className="news-content">
                  <ul className="post-cat">
                    <li><MessagesSquare size={16} color="#00C0BF"/>{news.comments} Comment</li>
                    <li><CalendarDays size={16} color="#00C0BF"/>{news.date}</li>
                  </ul>
                  <h5>
                    <a href={news.href}>{news.title}</a>
                  </h5>
                  <div className="news-btn">
                    <a href={news.href} className="link-btn">
                      Read More <ArrowUpRight size={18}/>
                    </a>
                    <Image src={client_img} alt="client"  />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
