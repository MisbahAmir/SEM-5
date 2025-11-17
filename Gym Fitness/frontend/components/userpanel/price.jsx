import React from "react";
import { Link } from "react-router-dom";

const PricePage = () => {
      const sectionStyle = { backgroundColor: "#000", color: "#fff" };
  return (
    <>
      {/* Preloader */}
      {/* <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle"></div>
            <div className="preloader-img pere-text">
              <img src="/assets/img/logo/loder.png" alt="loader" />
            </div>
          </div>
        </div>
      </div> */}

      {/* Header */}
      <header>
        <div className="header-area header-transparent">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="menu-wrapper d-flex align-items-center justify-content-between">
                {/* Logo */}
                <div className="logo">
                  <Link to="/">
                    <img src="/assets/img/logo/logo.png" alt="logo" />
                  </Link>
                </div>

                {/* Main-menu */}
                <div className="main-menu f-right d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/course">Courses</Link></li>
                      <li><Link to="/price">Pricing</Link></li>
                      <li><Link to="/gallery">Gallery</Link></li>
                      <li>
                        <span>Blog</span>
                        <ul className="submenu">
                          <li><Link to="/blog">Blog</Link></li>
                          <li><Link to="/blog-details">Blog Details</Link></li>
                          <li><Link to="/elements">Elements</Link></li>
                        </ul>
                      </li>
                      <li><Link to="/contact">Contact</Link></li>
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
        {/* Hero Section */}
        <div className="slider-area2">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 pt-70">
                    <h2>Pricing</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <section className="pricing-area section-padding30 fix">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section-tittle text-center mb-55">
                  <h2>Pricing</h2>
                </div>
              </div>
            </div>

            <div className="row">
              {[1, 2, 3].map((card) => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={card}>
                  <div className="properties mb-30">
                    <div className="properties__card">
                      <div className="about-icon">
                        <img src="/assets/img/icon/price.svg" alt="price icon" />
                      </div>
                      <div className="properties__caption">
                        <span className="month">6 month</span>
                        <p className="mb-25">
                          $30/m <span>(Single class)</span>
                        </p>

                        {[
                          "Free riding",
                          "Unlimited equipments",
                          "Personal trainer",
                          "Weight losing classes",
                          "Month to mouth",
                        ].map((feature, i) => (
                          <div
                            className={`single-features ${i === 4 ? "mb-20" : ""}`}
                            key={i}
                          >
                            <div className="features-icon">
                              <img src="/assets/img/icon/check.svg" alt="check" />
                            </div>
                            <div className="features-caption">
                              <p>{feature}</p>
                            </div>
                          </div>
                        ))}

                        <a href="#" className="border-btn border-btn2">
                          Join Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / Services Section */}
        <section className="services-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                <div className="single-services mb-40">
                  <div className="features-icon">
                    <img src="/assets/img/icon/icon1.svg" alt="location" />
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
                    <img src="/assets/img/icon/icon2.svg" alt="phone" />
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
                    <img src="/assets/img/icon/icon3.svg" alt="email" />
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
                    <div
                      className="footer-logo wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".2s"
                    >
                      <Link to="/">
                        <img
                          src="/assets/img/logo/logo2_footer.png"
                          alt="footer logo"
                        />
                      </Link>
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

                    <div
                      className="footer-social mt-30 wow fadeInUp"
                      data-wow-duration="3s"
                      data-wow-delay=".8s"
                    >
                      <a href="#" aria-label="twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://bit.ly/sai4ull" aria-label="facebook" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" aria-label="pinterest">
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

export default PricePage;
