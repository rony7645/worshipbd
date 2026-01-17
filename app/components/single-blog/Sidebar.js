export default function SingleBlogSidebar() {
  return (
    <>
      <div className="main-sidebar sticky-style">
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h4>Tag</h4>
          </div>

          <div className="news-widget-categories">
            <div className="tagcloud">
              <a href="#">Security</a>
              <a href="#">Business</a>
              <a href="#">Digital</a>
              <a href="#">Technology</a>
              <a href="#">Change</a>
              <a href="#">Video</a>
              <a href="#">UI/UX Design</a>
              <a href="#">Startup</a>
              <a href="#">Services</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
