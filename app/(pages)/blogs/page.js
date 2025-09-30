import BlogCard from "@/app/components/card/BlogCard";
import Breadcrumb from "@/app/components/layout/Breadcrumb";
import posts from "@/app/data/posts";

export const metadata = {
  title: "Blogs",
};

export default function BlogsPage() {
  return (
    <>
      <Breadcrumb title={metadata.title} />
      <section className="news-section section-padding fix">
        <div className="container">
          <div className="row">
            {posts.map((news, i) => (
              <BlogCard news={news} key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
