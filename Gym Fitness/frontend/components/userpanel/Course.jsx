import React from "react";
import { Link } from "react-router-dom";

const CoursePage = () => {

      const sectionStyle = { backgroundColor: "#000", color: "#fff" };

  return (
    <>
      {/* Header */}
      <header>
        <div className="header-area header-transparent">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="menu-wrapper d-flex align-items-center justify-content-between">
                {/* Logo */}
                <div className="logo">
                  <Link to="/"><img src="/assets/img/logo/logo.png" alt="logo" /></Link>
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
                  <Link to="/contact" className="btn">Contact me</Link>
                </div>

                {/* Mobile Menu */}
                <div className="col-12 d-block d-lg-none">
                  <div className="mobile_menu"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main style={sectionStyle}>
        {/* Hero */}
        <div className="slider-area2">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 pt-70">
                    <h2>Courses</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team / What I Offer */}
        <section className="team-area fix section-padding30">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section-tittle text-center mb-55">
                  <h2>What I Offer</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-cat text-center mb-30">
                  <div className="cat-icon">
                    <img src="/assets/img/gallery/team1.png" alt="Body Building" />
                  </div>
                  <div className="cat-cap">
                    <h5><Link to="/services">Body Building</Link></h5>
                    <p>You’ll look at graphs and charts in Task One, how to approach the task</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-cat text-center mb-30">
                  <div className="cat-icon">
                    <img src="/assets/img/gallery/team2.png" alt="Muscle Gain" />
                  </div>
                  <div className="cat-cap">
                    <h5><Link to="/services">Muscle Gain</Link></h5>
                    <p>You’ll look at graphs and charts in Task One, how to approach the task</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-cat text-center mb-30">
                  <div className="cat-icon">
                    <img src="/assets/img/gallery/team3.png" alt="Weight Loss" />
                  </div>
                  <div className="cat-cap">
                    <h5><Link to="/services">Weight Loss</Link></h5>
                    <p>You’ll look at graphs and charts in Task One, how to approach the task</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Traning categories */}
        <section className="traning-categories black-bg">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="/assets/img/gallery/cat1.png" alt="Personal training" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3>Personal traning</h3>
                        <p>
                          You’ll look at graphs and charts in Task One, how to approach the task and <br />
                          the language needed for a successful answer.
                        </p>
                        <Link to="/course" className="border-btn">View Courses</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="/assets/img/gallery/cat2.png" alt="Group training" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3>Group traning</h3>
                        <p>
                          You’ll look at graphs and charts in Task One, how to approach the task and <br />
                          the language needed for a successful answer.
                        </p>
                        <Link to="/course" className="btn">View Courses</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Area */}
        <div
          className="video-area section-bg2 d-flex align-items-center"
          style={{
            backgroundImage: "url('/assets/img/gallery/video-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="video-wrap position-relative">
              <div className="video-icon">
                {/* If you want the video popup behavior, keep your JS plugin loaded in index.html (magnific-popup etc.) */}
                <a className="popup-video btn-icon" href="https://www.youtube.com/watch?v=up68UAfH0d0" rel="noreferrer" target="_blank">
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Area */}
        <section className="services-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                <div className="single-services mb-40">
                  <div className="features-icon">
                    <img src="/assets/img/icon/icon1.svg" alt="Location" />
                  </div>
                  <div className="features-caption">
                    <h3>Location</h3>
                    <p>You’ll look at graphs and charts in Task One, how to approach</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="single-services mb-40">
                  <div className="features-icon">
                    <img src="/assets/img/icon/icon2.svg" alt="Phone" />
                  </div>
                  <div className="features-caption">
                    <h3>Phone</h3>
                    <p>(90) 277 278 2566</p>
                    <p>(78) 267 256 2578</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="single-services mb-40">
                  <div className="features-icon">
                    <img src="/assets/img/icon/icon3.svg" alt="Email" />
                  </div>
                  <div className="features-caption">
                    <h3>Email</h3>
                    <p>jacson767@gmail.com</p>
                    <p>contact56@zacsion.com</p>
                  </div>
                </div>
              </div>
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
                    <div className="footer-logo wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                      <Link to="/"><img src="/assets/img/logo/logo2_footer.png" alt="footer logo" /></Link>
                    </div>

                    <div className="header-area main-header2 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".4s">
                      <div className="main-header main-header2">
                        <div className="menu-wrapper menu-wrapper2">
                          <div className="main-menu main-menu2 text-center">
                            <nav>
                              <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/course">Courses</Link></li>
                                <li><Link to="/price">Pricing</Link></li>
                                <li><Link to="/gallery">Gallery</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="footer-social mt-30 wow fadeInUp" data-wow-duration="3s" data-wow-delay=".8s">
                      <a href="#" aria-label="twitter"><i className="fab fa-twitter"></i></a>
                      <a href="https://bit.ly/sai4ull" aria-label="facebook" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                      <a href="#" aria-label="pinterest"><i className="fab fa-pinterest-p"></i></a>
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
                      Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                      <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
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
        <a title="Go to Top" href="#"><i className="fas fa-level-up-alt"></i></a>
      </div>
    </>
  );
};

export default CoursePage;
