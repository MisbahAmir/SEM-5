import React from "react";
import { Link } from "react-router-dom";
 import "../../src/assets/Footer.css";

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
<img src="assets/img/logo/logos.png" alt="Logo" width="180" height="180" />
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
        <a title="Go to Top" href="#">
          <i className="fas fa-level-up-alt"></i>
        </a>
      </div>
    </>
  );
};

export default PricePage;
