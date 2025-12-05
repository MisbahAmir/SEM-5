import React, { useEffect } from "react";
import { Link } from "react-router-dom";
 import "../../src/assets/Footer.css";

const Blogpage = () => {
      const sectionStyle = { backgroundColor: "#000", color: "#fff" };


      
useEffect(() => {
  // ===== Preloader =====
  const preloader = document.getElementById("preloader-active");
  const timer = setTimeout(() => {
    if (preloader) preloader.style.display = "none";
  }, 1200);
  return () => clearTimeout(timer);
}, []);

return (
  <>



  
    {/* ================= PRELOADER ================= */}
    <div id="preloader-active">
      <div className="preloader d-flex align-items-center justify-content-center">
        <div className="preloader-inner position-relative">
          <div className="preloader-circle"></div>
          <div className="preloader-img pere-text">
            <img src="assets/img/logo/loder.png" alt="loader" />
          </div>
        </div>
      </div>
    </div>
  


      {/* ================= HEADER ================= */}
      {/* Header */}
            <header style={sectionStyle}>
              <div className="header-area header-transparent">
                <div className="main-header header-sticky">
                  <div className="container-fluid">
                    <div className="menu-wrapper d-flex align-items-center justify-content-between">
                      {/* Logo */}
                      <div className="logo">
                           <li><Link to="/">Home</Link></li>
<img src="assets/img/logo/logos.png" alt="Logo" width="180" height="180" />
                        
                      </div>
                      {/* Main-menu */}
                      <div className="main-menu f-right d-none d-lg-block">
                        <nav>
                          <ul id="navigation">
                            <li>
                           <li><Link to="/">Home</Link></li>
                            </li>
                           <li><Link to="/about">About</Link></li>
                            <li><Link to="/course">Courses</Link></li>
                          <li><Link to="/price">Pricing</Link></li>
                          <li><Link to="/gallery">Gallery</Link></li>
                            
                          </ul>
                        </nav>
                      </div>
                      {/* Header-btn */}
                      <div className="header-btns d-none d-lg-block f-right">
                        <a href="contact.html" className="btn">
                          Contact me
                        </a>
                      </div>
                      {/* Mobile Menu */}
                      <div className="col-12">
                        <div className="mobile_menu d-block d-lg-none"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
      {/* ================= HERO SECTION ================= */}
      <div className="slider-area2" style={sectionStyle}>
        <div className="slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap hero-cap2 pt-70 text-center">
                  <h2>Blog</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BLOG SECTION ================= */}
      <section className="blog_area section-padding" style={sectionStyle}>
        <div className="container" >
          <div className="row">
            {/* LEFT BLOG AREA */}
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="blog_left_sidebar">
                {[1, 2, 3, 4, 5].map((n) => (
                  <article className="blog_item" key={n}>
                    <div className="blog_item_img">
                      <img
                        className="card-img rounded-0"
                        src={`assets/img/blog/single_blog_${n}.png`}
                        alt="blog"
                      />
                      <a href="#" className="blog_item_date">
                        <h3>15</h3>
                        <p>Jan</p>
                      </a>
                    </div>
                    <div className="blog_details">
                      <a className="d-inline-block" href="blog_details.html">
                        <h2 className="blog-head" style={{ color: "#2d2d2d" }}>
                          Google inks pact for new 35-storey office
                        </h2>
                      </a>
                      <p>
                        That dominion stars lights dominion divide years for
                        fourth have don't stars is that he earth it first without
                        heaven in place seed it second morning saying.
                      </p>
                      <ul className="blog-info-link">
                        <li>
                          <a href="#"><i className="fa fa-user"></i> Travel, Lifestyle</a>
                        </li>
                        <li>
                          <a href="#"><i className="fa fa-comments"></i> 03 Comments</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                ))}

                {/* PAGINATION */}
                <nav className="blog-pagination justify-content-center d-flex">
                  <ul className="pagination">
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Previous">
                        <i className="ti-angle-left"></i>
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">1</a>
                    </li>
                    <li className="page-item active">
                      <a href="#" className="page-link">2</a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Next">
                        <i className="ti-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                {/* Search */}
                <aside className="single_sidebar_widget search_widget">
                  <form>
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search Keyword" />
                        <div className="input-group-append">
                          <button className="btns" type="button">
                            <i className="ti-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn">
                      Search
                    </button>
                  </form>
                </aside>

                {/* Category */}
                <aside className="single_sidebar_widget post_category_widget">
                  <h4 className="widget_title">Category</h4>
                  <ul className="list cat-list">
                    {["Restaurant food", "Travel news", "Modern technology", "Product", "Inspiration", "Health Care"].map((c, i) => (
                      <li key={i}>
                        <a href="#" className="d-flex justify-content-between">
                          <p>{c}</p>
                          <p>({Math.floor(Math.random() * 40) + 1})</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </aside>

                {/* Recent Post */}
                <aside className="single_sidebar_widget popular_post_widget">
                  <h3 className="widget_title">Recent Post</h3>
                  {[1, 2, 3, 4].map((n) => (
                    <div className="media post_item" key={n}>
                      <img src={`assets/img/post/post_${n}.png`} alt="post" />
                      <div className="media-body">
                        <a href="blog_details.html">
                          <h3>Post Title {n}</h3>
                        </a>
                        <p>January 12, 2024</p>
                      </div>
                    </div>
                  ))}
                </aside>

                {/* Tag Cloud */}
                <aside className="single_sidebar_widget tag_cloud_widget">
                  <h4 className="widget_title">Tag Clouds</h4>
                  <ul className="list">
                    {["project", "love", "technology", "travel", "restaurant", "design", "life style", "illustration"].map((tag) => (
                      <li key={tag}><a href="#">{tag}</a></li>
                    ))}
                  </ul>
                </aside>

                {/* Instagram Feeds */}
                <aside className="single_sidebar_widget instagram_feeds">
                  <h4 className="widget_title">Instagram Feeds</h4>
                  <ul className="instagram_row flex-wrap">
                    {[5, 6, 7, 8, 9, 10].map((img) => (
                      <li key={img}>
                        <a href="#">
                          <img className="img-fluid" src={`assets/img/post/post_${img}.png`} alt="insta" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </aside>

                {/* Newsletter */}
                <aside className="single_sidebar_widget newsletter_widget">
                  <h4 className="widget_title">Newsletter</h4>
                  <form>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        required
                      />
                    </div>
                    <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn">
                      Subscribe
                    </button>
                  </form>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services-area" style={sectionStyle}>
        <div className="container">
          <div className="row justify-content-between">
            {[
              { icon: "icon1.svg", title: "Location", text: "You’ll look at graphs and charts in Task One, how to approach" },
              { icon: "icon2.svg", title: "Phone", text: "(90) 277 278 2566\n(78) 267 256 2578" },
              { icon: "icon3.svg", title: "Email", text: "jacson767@gmail.com\ncontact56@zacsion.com" },
            ].map((s, i) => (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8" key={i}>
                <div className="single-services mb-40">
                  <div className="features-icon">
                    <img src={`assets/img/icon/${s.icon}`} alt={s.title} />
                  </div>
                  <div className="features-caption">
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Floating Gym Icons */}
            {/* Footer */}
      <footer className="gym-footer">

      {/* Floating Gym Icons */}
      <div className="floating-icons">
        <span>💪</span>
        <span>🏋️</span>
        <span>🥊</span>
        <span>🏃‍♂️</span>
      </div>

      <div className="footer-container">

        {/* Section 1: About */}
        <div className="footer-box">
          <h2 className="footer-title">About Gym Tracker</h2>
          <p className="footer-text">
            Your ultimate fitness companion — track workouts, measure progress,
            stay consistent, and transform your body with powerful tools and
            clean analytics.
          </p>
        </div>

        {/* Section 2: Contact */}
        <div className="footer-box">
          <h2 className="footer-title">Contact</h2>
          <p className="footer-text">📞 +92 300 254149</p>
          <p className="footer-text">📧 misbahamir508@gmail.com</p>
          <p className="footer-text">📞 +92 315 1376620</p>
          <p className="footer-text">📧 maviaraheem45@gmail.com</p>
  
        </div>

        {/* Section 3: Newsletter */}
        <div className="footer-box">
          <h2 className="footer-title">Stay Updated</h2>
          <p className="footer-text">Get weekly fitness tips & new features.</p>

          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
            
          </div>
                    <p className="footer-text">📍 Karachi, Pakistan</p>
        </div>

      </div>

      {/* Bottom Text */}


      <div className="footer-bottom-enhanced">
  <p className="footer-text">
    © {new Date().getFullYear()} <span className="brand">Gym Fitness Tracker</span>  
    <span className="dash"> — </span>  <br></br>
    Designed with Misbah Amir  <span className="heart">  ❤️   </span> Mavia Raheem  
  </p>
</div>

    </footer>

      {/* Scroll Up */}
      <div id="back-top">
        <a title="Go to Top" href="#"><i className="fas fa-level-up-alt"></i></a>
      </div>
    </>
  );
};

export default Blogpage;
