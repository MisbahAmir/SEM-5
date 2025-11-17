


import React from "react";
import { Link } from "react-router-dom";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "480px",
  borderRadius: "10px",
};

const center = {
  lat: 24.8607, // Karachi Latitude
  lng: 67.0011, // Karachi Longitude
};

const Contactpage = () => {
  const sectionStyle = { backgroundColor: "#000", color: "#fff" };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header>
        <div className="header-area header-transparent">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="menu-wrapper d-flex align-items-center justify-content-between">
                <div className="logo">
                  <a href="/">
                    <img src="assets/img/logo/logo.png" alt="Logo" />
                  </a>
                </div>

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

                <div className="header-btns d-none d-lg-block f-right">
                  <a href="/contact" className="btn">Contact Me</a>
                </div>

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
                  <h2>Contact Me</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <section className="contact-section py-5">
        <div className="container">

          {/* GOOGLE MAP */}
          <div className="mb-5 pb-4">
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>

          <div className="row">
            {/* CONTACT FORM */}
            <div className="col-lg-8 mb-4">
              <form className="form-contact contact_form" action="#" method="post">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="name"
                        placeholder="Enter your name"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="email"
                        placeholder="Enter email address"
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="message"
                        placeholder="Enter Message"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="form-group mt-3">
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
              </form>
            </div>

            {/* CONTACT INFO */}
            <div className="col-lg-4">
              <div className="media contact-info mb-4">
                <span className="contact-info__icon"><i className="ti-home"></i></span>
                <div className="media-body">
                  <h3>Pakistan, Lahore</h3>
                  <p>123 Street, Lahore</p>
                </div>
              </div>

              <div className="media contact-info mb-4">
                <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                <div className="media-body">
                  <h3>+92 300 1234567</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>

              <div className="media contact-info">
                <span className="contact-info__icon"><i className="ti-email"></i></span>
                <div className="media-body">
                  <h3>info@example.com</h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


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
                                <li>
                                  <a href="index.html">Home</a>
                                </li>
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

export default Contactpage;
