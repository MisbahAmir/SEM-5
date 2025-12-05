
import { Link } from "react-router-dom";

import React, { useEffect } from "react";
 import "../../src/assets/Footer.css";
import "../../src/assets/ModernSection.css";

const IndexPage = () => {

  useEffect(() => {
    // Dynamically load all scripts
    const scripts = [
      "./assets/js/vendor/modernizr-3.5.0.min.js",
      "./assets/js/vendor/jquery-1.12.4.min.js",
      "./assets/js/popper.min.js",
      "./assets/js/bootstrap.min.js",
      "./assets/js/jquery.slicknav.min.js",
      "./assets/js/owl.carousel.min.js",
      "./assets/js/slick.min.js",
      "./assets/js/wow.min.js",
      "./assets/js/animated.headline.js",
      "./assets/js/jquery.magnific-popup.js",
      "./assets/js/gijgo.min.js",
      "./assets/js/jquery.nice-select.min.js",
      "./assets/js/jquery.sticky.js",
      "./assets/js/jquery.counterup.min.js",
      "./assets/js/waypoints.min.js",
      "./assets/js/jquery.countdown.min.js",
      "./assets/js/hover-direction-snake.min.js",
      "./assets/js/contact.js",
      "./assets/js/jquery.form.js",
      "./assets/js/jquery.validate.min.js",
      "./assets/js/mail-script.js",
      "./assets/js/jquery.ajaxchimp.min.js",
      "./assets/js/plugins.js",
      "./assets/js/main.js"
    ];

    scripts.forEach(src => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
    });
  }, []);

  return (
    <div className="black-bg">

      {/* Preloader */}
      

      {/* Header */}
      {/* <header>
        <div className="header-area header-transparent">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="menu-wrapper d-flex align-items-center justify-content-between">
                <div className="logo">
                  <a href="index.html"><img src="assets/img/logo/logo.png" alt="Logo" /></a>
                </div>
                <div className="main-menu f-right d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/course">Courses</Link></li>
                    <li><Link to="/price">Pricing</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li>
                      <Link to="/blog">Blog</Link>
                        <ul className="submenu">
                          <li><a href="blog.html">Blog</a></li>
                          <li><a href="blog_details.html">Blog Details</a></li>
                          <li><a href="elements.html">Elements</a></li>
                        </ul>
                      </li>
                    <li><Link to="/contact">Contact</Link></li>
                    </ul>
                  </nav>
                </div>
                <div className="header-btns d-none d-lg-block f-right">
                  <a href="contact.html" className="btn">Contact me</a>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}




    <header>
      <div className="header-area header-transparent">
        <div className="main-header header-sticky">
          <div className="container-fluid">
            <div className="menu-wrapper d-flex align-items-center justify-content-between">
              
              {/* Logo */}
              <div className="logo">
                <Link to="/">
<img src="assets/img/logo/logos.png" alt="Logo" width="120" height="120" />

                </Link>
              </div>

              {/* Main Menu */}
              <div className="main-menu f-right d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li><Link to="/index">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/course">Courses</Link></li>
                    <li><Link to="/price">Pricing</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li>
                      <Link to="/blog">Blog</Link>
                      
                    </li>
                    <li><Link to="/contact">Contact</Link></li>

                    {/* Admin Panel Link */}
                    {/* {user?.role === "admin" && (
                      <li>
                        <Link to="/admin-users" className="text-red-400 font-bold">
                          Admin Panel
                        </Link>
                      </li>
                    )} */}
                  </ul>
                </nav>
              </div>

              {/* Header Buttons */}
              <div className="header-btns d-none d-lg-block f-right">
                <Link to="/contact" className="btn">Contact me</Link>
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



      {/* Main */}
      <main>

        {/* Slider Area */}
        <div className="slider-area position-relative">
          <div className="slider-active">
            <div className="single-slider slider-height d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-9 col-lg-9 col-md-10">
                    <div className="hero__caption">
                      <span data-animation="fadeInLeft" data-delay="0.1s">Hi buddiess</span>
                      <h1 data-animation="fadeInLeft" data-delay="0.4s">Gym Trainer</h1>
                      <a href="courses.html" className="border-btn hero-btn" data-animation="fadeInLeft" data-delay="0.8s">My Courses</a>
                    </div>
                  </div>
                </div>
              </div>          
            </div>
          </div>
        </div>

        {/* Training Categories */}
        <section className="traning-categories black-bg">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="assets/img/gallery/cat1.png" alt="Personal Training"/>
                    <div className="topic-content-box">
                      {/* <div className="topic-content">
                        <h3>Personal training</h3>
                        <p>You’ll look at graphs and charts in Task One, how to approach the task and <br/> the language needed for a successful answer.</p>
                        <a href="courses.html" className="border-btn">View Courses</a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="assets/img/gallery/cat2.png" alt="Group Training"/>
                    <div className="topic-content-box">
                      {/* <div className="topic-content">
                        <h3>Group training</h3>
                        <p>You’ll look at graphs and charts in Task One, how to approach the task and <br/> the language needed for a successful answer.</p>
                        <a href="courses.html" className="btn">View Courses</a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team / Services */}
        <section className="team-area fix">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section-tittle text-center mb-55 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                  <h2>What I Offer</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                  <div className="cat-icon">
                    <img src="assets/img/gallery/team1.png" alt=""/>
                  </div>
                  <div className="cat-cap">
                    <h5><a href="services.html">Body Building</a></h5>
                    <p>You’ll look at graphs and charts in Task One, how to approach the task </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                  <div className="cat-icon">
                    <img src="assets/img/gallery/team2.png" alt=""/>
                  </div>
                  <div className="cat-cap">
                    <h5><a href="services.html">Muscle Gain</a></h5>
                    <p>You’ll look at graphs and charts in Task One, how to approach the task </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                  <div className="cat-icon">
                    <img src="assets/img/gallery/team3.png" alt=""/>
                  </div>
                  <div className="cat-cap">
                    <h5><a href="services.html">Weight Loss</a></h5>
                    <p>You’ll look at graphs and charts in Task One, how to approach the task </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Area */}
        <div className="gallery-area section-padding30">
          <div className="container-fluid">
            <div className="row">
              {["gallery1","gallery2","gallery3","gallery4","gallery5","gallery6"].map((img, idx) => (
                <div key={idx} className={`col-xl-${idx===5?'6':'3'} col-lg-6 col-md-6 col-sm-6`}>
                  <div className="box snake mb-30">
                    <div className="gallery-img big-img" style={{backgroundImage:`url(assets/img/gallery/${img}.png)`}}></div>
                    <div className="overlay">
                      <div className="overlay-content">
                        <h3>Muscle gaining</h3>
                        <a href="gallery.html"><i className="ti-plus"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== ULTRA MODERN FUTURISTIC FITNESS SECTION ===== */}
<section className="ultra-section">
  <div className="container">

    {/* Heading */}
    <div className="ultra-header text-center">
      <h2>
        Elevate Your <span>Fitness Experience</span>
      </h2>
      <p>Train smarter. Track deeper. Perform like never before.</p>
    </div>

    <div className="row mt-5 justify-content-center">

      {/* CARD 1 */}
      <div className="col-lg-4 col-md-6">
        <div className="ultra-card">
          <div className="glow-circle"></div>
          <div className="ultra-icon">
            <i className="fas fa-running"></i>
          </div>
          <h3>Motion Tracking</h3>
          <p>AI detects posture, speed & timing to improve every session.</p>
          <button className="ultra-btn">Explore</button>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="col-lg-4 col-md-6">
        <div className="ultra-card">
          <div className="glow-circle"></div>
          <div className="ultra-icon">
            <i className="fas fa-fire"></i>
          </div>
          <h3>Calorie Analyzer</h3>
          <p>Real-time burn tracking with precision metabolic calculation.</p>
          <button className="ultra-btn">Start</button>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="col-lg-4 col-md-6">
        <div className="ultra-card">
          <div className="glow-circle"></div>
          <div className="ultra-icon">
            <i className="fas fa-brain"></i>
          </div>
          <h3>AI Workout Coach</h3>
          <p>Personalized routines with automatic difficulty adjustments.</p>
          <button className="ultra-btn">Learn More</button>
        </div>
      </div>

    </div>
  </div>
</section>




        {/* About Area */}
        <section className="about-area2 fix pb-padding pt-50 pb-80">
          <div className="support-wrapper align-items-center">
            <div className="right-content2">
              <div className="right-img wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                <img src="assets/img/gallery/about.png" alt="About"/>
              </div>
            </div>
            <div className="left-content2">
              <div className="section-tittle2 mb-20 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                <div className="front-text">
                  <h2>About Me</h2>
                  <p>You’ll look at graphs and charts in Task One, how to approach the task and the language needed 
                    for a successful answer. You’ll examine Task Two questions and learn how to plan, write and 
                  check academic essays.</p>
                  <p className="mb-40">Task One, how to approach the task and the language needed for a successful answer. You’ll 
                  examine Task Two questions and learn how to plan, write and check academic essays.</p>
                  <a href="courses.html" className="border-btn">My Courses</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Area */}
        <section className="home-blog-area pt-10 pb-50">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-9 col-sm-10">
                <div className="section-tittle text-center mb-100 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                  <h2>From Blog</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {[1,2].map((b, idx)=>(
                <div key={idx} className="col-xl-6 col-lg-6 col-md-6">
                  <div className="home-blog-single mb-30 wow fadeInUp" data-wow-duration={`${b}s`} data-wow-delay={`.${2*idx}s`}>
                    <div className="blog-img-cap">
                      <div className="blog-img">
                        <img src={`assets/img/gallery/blog${b}.png`} alt="Blog"/>
                      </div>
                      <div className="blog-cap">
                        <span>Gym & Fitness</span>
                        <h3><a href="blog_details.html">Your Antibiotic One Day To 10 Day Options</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Area */}
        <div className="video-area section-bg2 d-flex align-items-center" style={{backgroundImage: "url(assets/img/gallery/video-bg.png)"}}>
          <div className="container">
            <div className="video-wrap position-relative">
              <div className="video-icon">
                <a className="popup-video btn-icon" href="https://www.youtube.com/watch?v=up68UAfH0d0"><i className="fas fa-play"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <section className="services-area">
          <div className="container">
            <div className="row justify-content-between">
              {[
                {title:"Location", desc:"You’ll look at graphs and charts in Task One, how to approach", icon:"icon1.svg"},
                {title:"Phone", desc:"(90) 277 278 2566\n(78) 267 256 2578", icon:"icon2.svg"},
                {title:"Email", desc:"jacson767@gmail.com\ncontact56@zacsion.com", icon:"icon3.svg"}
              ].map((s,i)=>(
                <div key={i} className={`col-xl-4 col-lg-4 col-md-6 col-sm-8`}>
                  <div className="single-services mb-40 wow fadeInUp" data-wow-duration="1s" data-wow-delay={`.${i+1}s`}>
                    <div className="features-icon">
                      <img src={`assets/img/icon/${s.icon}`} alt=""/>
                    </div>
                    <div className="features-caption">
                      <h3>{s.title}</h3>
                      {s.desc.split("\n").map((d, idx)=><p key={idx}>{d}</p>)}
                    </div>
                  </div>
                </div>
              ))}
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
        <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
      </div>

    </div>
  );
};

export default IndexPage;
