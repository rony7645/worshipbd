import client_img from "@/public/img/news/client-img.png"
import { ArrowUpRight, CalendarDays, MessagesSquare } from "lucide-react";
import Image from "next/image";

export default function BlogCard({news}) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="news-box-items">
        <div
          className="news-image wow img-custom-anim-top"
          data-wow-duration="1.5s"
          data-wow-delay={`${news.delay}s`}
        >
          <a href={news.href}>
            <Image
              src={news.imgSrc}
              alt={news.title}
              width={400}
              height={250}
            />
          </a>
        </div>
        <div className="news-content">
          <ul className="post-cat">
            <li>
              <MessagesSquare size={16} color="#00C0BF" />
              {news.comments} Comment
            </li>
            <li>
              <CalendarDays size={16} color="#00C0BF" />
              {news.date}
            </li>
          </ul>
          <h5>
            <a href={news.href}>{news.title}</a>
          </h5>
          <div className="news-btn">
            <a href={news.href} className="link-btn">
              Read More <ArrowUpRight size={18} />
            </a>
            <Image src={client_img} alt="client" />
          </div>
        </div>
      </div>
    </div>
  );
}
