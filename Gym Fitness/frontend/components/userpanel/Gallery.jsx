import React from "react";
import { Link } from "react-router-dom";
 import "../../src/assets/Footer.css";

const GalleryPage = () => {

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
                  <Link to="/">
<img src="assets/img/logo/logos.png" alt="Logo" width="180" height="180" />
                  </Link>
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
                                      
                                       <li
                                       >
                                        
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
        {/* Hero Section */}
        <div className="slider-area2">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 pt-70">
                    <h2>Gallery</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="gallery-area">
          <div className="container-fluid">
            <div className="row">
              {[
                "gallery1.png",
                "gallery2.png",
                "gallery3.png",
                "gallery4.png",
                "gallery5.png",
                "gallery6.png",
              ].map((img, index) => (
                <div
                  className={`${
                    index < 3
                      ? "col-xl-4 col-lg-6 col-md-6 col-sm-6"
                      : index < 5
                      ? "col-xl-3 col-lg-6 col-md-6 col-sm-6"
                      : "col-xl-6 col-lg-6 col-md-6 col-sm-6"
                  }`}
                  key={index}
                >
                  <div className="box snake mb-30">
                    <div
                      className="gallery-img big-img"
                      style={{
                        backgroundImage: `url(/assets/img/gallery/${img})`,
                      }}
                    ></div>
                    <div className="overlay">
                      <div className="overlay-content">
                        <h3>Muscle gaining</h3>
                        <Link to="/gallery">
                          <i className="ti-plus"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
                    <img src="/assets/img/icon/icon1.svg" alt="icon" />
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
                    <img src="/assets/img/icon/icon2.svg" alt="icon" />
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
                    <img src="/assets/img/icon/icon3.svg" alt="icon" />
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

export default GalleryPage;
