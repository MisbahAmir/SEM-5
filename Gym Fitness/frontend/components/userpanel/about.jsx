import { Link } from "react-router-dom";
import React from "react";

const Aboutpage = () => {
    const sectionStyle = { backgroundColor: "#000", color: "#fff" };
  return (
    <>
      {/* Header */}
      <header style={sectionStyle}>
        <div className="header-area header-transparent">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="menu-wrapper d-flex align-items-center justify-content-between">
                {/* Logo */}
                <div className="logo">
                  <a href="index.html">
                    <img src="assets/img/logo/logo.png" alt="" />
                  </a>
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
                      <li>
                     <li><Link to="/blog">Blog</Link></li>
                        <ul className="submenu">
                          <li>
                     <li><Link to="/blog">Blog</Link></li>
                          </li>
                          <li>
                            <a href="blog_details.html">Blog Details</a>
                          </li>
                          <li>
                            <a href="elements.html">Elements</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                     <li><Link to="/contact">Contact</Link></li>
                      </li>
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

      {/* Main Content */}
      <main style={sectionStyle}>
        {/* Hero Section */}
        <div className="slider-area2">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 pt-70">
                    <h2>About Me</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <section className="team-area pt-80">
          <div className="container">
            <div className="row">
              {[
                {
                  img: "assets/img/gallery/team1.png",
                  title: "Body Building",
                  delay: ".2s",
                  desc: "You’ll look at graphs and charts in Task One, how to approach the task",
                },
                {
                  img: "assets/img/gallery/team2.png",
                  title: "Muscle Gain",
                  delay: ".4s",
                  desc: "You’ll look at graphs and charts in Task One, how to approach the task",
                },
                {
                  img: "assets/img/gallery/team3.png",
                  title: "Weight Loss",
                  delay: ".6s",
                  desc: "You’ll look at graphs and charts in Task One, how to approach the task",
                },
              ].map((item, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div
                    className="single-cat text-center mb-30 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay={item.delay}
                  >
                    <div className="cat-icon">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="services.html">{item.title}</a>
                      </h5>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-area2 fix pb-padding pt-50 pb-80">
          <div className="support-wrapper align-items-center">
            <div
              className="right-content2 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".2s"
            >
              <div className="right-img">
                <img src="assets/img/gallery/about.png" alt="" />
              </div>
            </div>
            <div className="left-content2">
              <div
                className="section-tittle2 mb-20 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="front-text">
                  <h2>About Me</h2>
                  <p>
                    You’ll look at graphs and charts in Task One, how to
                    approach the task and the language needed for a successful
                    answer. You’ll examine Task Two questions and learn how to
                    plan, write and check academic essays.
                  </p>
                  <p className="mb-40">
                    Task One, how to approach the task and the language needed
                    for a successful answer. You’ll examine Task Two questions
                    and learn how to plan, write and check academic essays.
                  </p>
                  <a href="courses.html" className="border-btn">
                    My Courses
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="home-blog-area pt-10 pb-50">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-9 col-sm-10">
                <div
                  className="section-tittle text-center mb-100 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay=".2s"
                >
                  <h2>From Blog</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {[
                {
                  img: "assets/img/gallery/blog1.png",
                  delay: ".2s",
                  category: "Gym & Fitness",
                  title: "Your Antibiotic One Day To 10 Day Options",
                },
                {
                  img: "assets/img/gallery/blog2.png",
                  delay: ".4s",
                  category: "Gym & Fitness",
                  title: "Your Antibiotic One Day To 10 Day Options",
                },
              ].map((blog, index) => (
                <div className="col-xl-6 col-lg-6 col-md-6" key={index}>
                  <div
                    className="home-blog-single mb-30 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay={blog.delay}
                  >
                    <div className="blog-img-cap">
                      <div className="blog-img">
                        <img src={blog.img} alt="" />
                      </div>
                      <div className="blog-cap">
                        <span>{blog.category}</span>
                        <h3>
                          <a href="blog_details.html">{blog.title}</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Area */}
        {/* <div
          className="video-area section-bg2 d-flex align-items-center"
          data-background="assets/img/gallery/video-bg.png"
        >
          <div className="container">
            <div className="video-wrap position-relative">
              <div className="video-icon">
                <a
                  className="popup-video btn-icon"
                  href="https://www.youtube.com/watch?v=up68UAfH0d0"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>


        </div> */}


        <div
  className="video-area d-flex align-items-center"
  style={{
    backgroundImage: "url('assets/img/gallery/video-bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "700px", // apni requirement ke hisab se height
  }}
>
  <div className="container">
    <div className="video-wrap position-relative text-center">
      <a
        className="popup-video btn-icon"
        href="https://www.youtube.com/watch?v=up68UAfH0d0"
        style={{ color: "#fff", fontSize: "50px" }}
      >
        <i className="fas fa-play"></i>
      </a>
    </div>
  </div>
</div>


        {/* Services Area */}
        <section className="services-area">
          <div className="container">
            <div className="row justify-content-between">
              {[
                {
                  img: "assets/img/icon/icon1.svg",
                  title: "Location",
                  desc: "You’ll look at graphs and charts in Task One, how to approach",
                  delay: ".1s",
                },
                {
                  img: "assets/img/icon/icon2.svg",
                  title: "Phone",
                  desc: "(90) 277 278 2566\n(78) 267 256 2578",
                  delay: ".2s",
                },
                {
                  img: "assets/img/icon/icon3.svg",
                  title: "Email",
                  desc: "jacson767@gmail.com\ncontact56@zacsion.com",
                  delay: ".4s",
                },
              ].map((service, index) => (
                <div
                  className={
                    index === 0
                      ? "col-xl-4 col-lg-4 col-md-6 col-sm-8"
                      : "col-xl-3 col-lg-4 col-md-6 col-sm-8"
                  }
                  key={index}
                >
                  <div
                    className="single-services mb-40 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay={service.delay}
                  >
                    <div className="features-icon">
                      <img src={service.img} alt="" />
                    </div>
                    <div className="features-caption">
                      <h3>{service.title}</h3>
                      {service.desc.split("\n").map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-area black-bg">
          <div className="container">
            <div className="footer-top footer-padding">
              <div className="row">
                <div className="col-xl-12">
                  <div className="single-footer-caption mb-50 text-center">
                    <div
                      className="footer-logo wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".2s"
                    >
                      <a href="index.html">
                        <img src="assets/img/logo/logo2_footer.png" alt="" />
                      </a>
                    </div>

                    <div
                      className="header-area main-header2 wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay=".4s"
                    >
                      <div className="main-header main-header2">
                        <div className="menu-wrapper menu-wrapper2">
                          <div className="main-menu main-menu2 text-center">
                            <nav>
                              <ul>
                           <li><Link to="/user">Home</Link></li>
                                <li>
                                  <a href="about.html">About</a>
                                </li>
                                <li>
                                  <a href="courses.html">Courses</a>
                                </li>
                                <li>
                                  <a href="pricing.html">Pricing</a>
                                </li>
                                <li>
                                  <a href="gallery.html">Gallery</a>
                                </li>
                                <li>
                                  <a href="contact.html">Contact</a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="footer-social mt-30 wow fadeInUp"
                      data-wow-duration="3s"
                      data-wow-delay=".8s"
                    >
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://bit.ly/sai4ull">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="row d-flex align-items-center">
                <div className="col-lg-12">
                  <div className="footer-copy-right text-center">
                    <p>
                      Copyright &copy; {new Date().getFullYear()} All rights
                      reserved | This template is made with{" "}
                      <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                      <a
                        href="https://colorlib.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Colorlib
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll Up */}
      <div id="back-top">
        <a title="Go to Top" href="#">
          <i className="fas fa-level-up-alt"></i>
        </a>
      </div>
    </>
  );
};

export default Aboutpage;


