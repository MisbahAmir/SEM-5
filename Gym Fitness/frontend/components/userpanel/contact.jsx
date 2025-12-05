import React, { useState } from "react";
//import axios from "axios";
import axios from "axios";
import { Link } from "react-router-dom";

import "../../src/assets/Footer.css";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "480px",
  borderRadius: "10px",
};

const center = {
  lat: 24.8607,
  lng: 67.0011,
};

const Contactpage = () => {
  const sectionStyle = { backgroundColor: "#000", color: "#fff" };

  // ---------------------- CONTACT FORM STATE ----------------------
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", form);

      alert("Message Sent Successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Something went wrong!");
    }
  };

  // ----------------------------------------------------------------

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
                    <img
                      src="assets/img/logo/logos.png"
                      alt="Logo"
                      width="180"
                      height="180"
                    />
                  </a>
                </div>

                <div className="main-menu f-right d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/course">Courses</Link>
                      </li>
                      <li>
                        <Link to="/price">Pricing</Link>
                      </li>
                      <li>
                        <Link to="/gallery">Gallery</Link>
                      </li>
                      
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="header-btns d-none d-lg-block f-right">
                  <a href="/contact" className="btn">
                    Contact Me
                  </a>
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
               <div className="hero-cap hero-cap2 pt-70 text-center contact-hero-heading">
  <h2>Let's Talk Fitness</h2>
  <p className="contact-tagline">Let’s Connect & Build Your Perfect Fitness Journey</p>
  <div className="barbell-divider"></div>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ================= CONTACT SECTION ================= */}
      <section className="contact-section py-5">
        <h1 className="gym-heading-main">
  Build Strength. Burn Fat. Become Unstoppable.
</h1>

        <div className="container">
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
          
<h1 className="gym-heading-sub">
  Let’s Get in Touch — Your Fitness Journey Starts Here.
</h1>

          <div className="row">
            {/* ================= CONTACT FORM (CONNECTED TO BACKEND) ================= */}
            <div className="col-lg-8 mb-4">
              <form
                className="form-contact contact_form"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="name"
                        placeholder="Enter your name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        required
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
                        value={form.email}
                        onChange={handleChange}
                        required
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
                        value={form.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="form-group mt-3">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* ================= CONTACT INFO ================= */}
            <div className="col-lg-4">
              <div className="media contact-info mb-4">
                <span className="contact-info__icon">
                  <i className="ti-home"></i>
                </span>
                <div className="media-body">
                  <h3>Pakistan, Lahore</h3>
                  <p>123 Street, Lahore</p>
                </div>
              </div>

              <div className="media contact-info mb-4">
                <span className="contact-info__icon">
                  <i className="ti-tablet"></i>
                </span>
                <div className="media-body">
                  <h3>+92 300 1234567</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>

              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-email"></i>
                </span>
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


      <div id="back-top">
        <a title="Go to Top" href="#">
          <i className="fas fa-level-up-alt"></i>
        </a>
      </div>
    </>
  );
};

export default Contactpage;
