import Image from "next/image";
import BlogCard from "../card/BlogCard";
import left_shape from "@/public/img/news/left-shape.png"
import posts from "@/app/data/posts"

export default function Blog() {
  return (
    <section className="news-section section-padding fix">
      <div className="left-shape">
        <Image src={left_shape} alt="img"/>
      </div>
      <div className="container">
        <div className="section-title text-center">
          <div className="sub-title bg-color-2 wow animate__fadeInUp">
            <span>BLOG & NEWS</span>
          </div>
          <h2 className="wow animate__fadeInUp" data-wow-delay=".3s">
            Stay ahead with insights, tutorials,<br /> and top lists curated by professionals.
          </h2>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          {posts.map((news, i) => (
            <BlogCard news={news} key={i}/>
          ))}
        </div>
      </div>
    </section>
  );
}
