
import { Link } from "react-router-dom";

import React, { useEffect } from "react";

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
      <header>
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
                      <span data-animation="fadeInLeft" data-delay="0.1s">Hi This is Zacson</span>
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
                      <div className="topic-content">
                        <h3>Personal training</h3>
                        <p>You’ll look at graphs and charts in Task One, how to approach the task and <br/> the language needed for a successful answer.</p>
                        <a href="courses.html" className="border-btn">View Courses</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="assets/img/gallery/cat2.png" alt="Group Training"/>
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3>Group training</h3>
                        <p>You’ll look at graphs and charts in Task One, how to approach the task and <br/> the language needed for a successful answer.</p>
                        <a href="courses.html" className="btn">View Courses</a>
                      </div>
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

        {/* Pricing Area */}
        <section className="pricing-area section-padding40 fix">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section-tittle text-center mb-55 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".1s">
                  <h2>Pricing</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {[...Array(3)].map((_, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 col-sm-6">
                  <div className="properties mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay={`.${2*idx}s`}>
                    <div className="properties__card">
                      <div className="about-icon">
                        <img src="assets/img/icon/price.svg" alt=""/>
                      </div>
                      <div className="properties__caption">
                        <span className="month">6 month</span>
                        <p className="mb-25">$30/m  <span>(Single class)</span></p>
                        {["Free riding", "Unlimited equipments", "Personal trainer", "Weight losing classes", "Month to mouth"].map((feat, i) => (
                          <div key={i} className={`single-features ${i===4?'mb-20':''}`}>
                            <div className="features-icon">
                              <img src="assets/img/icon/check.svg" alt=""/>
                            </div>
                            <div className="features-caption">
                              <p>{feat}</p>
                            </div>
                          </div>
                        ))}
                        <a href="#" className="border-btn border-btn2">Join Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
      <footer>
        <div className="footer-area black-bg">
          <div className="container">
            <div className="footer-top footer-padding">
              <div className="row">
                <div className="col-xl-12">
                  <div className="single-footer-caption mb-50 text-center">
                    <div className="footer-logo wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                      <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt="Footer Logo"/></a>
                    </div>
                    <div className="header-area main-header2 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".4s">
                      <div className="main-header main-header2">
                        <div className="menu-wrapper menu-wrapper2">
                          <div className="main-menu main-menu2 text-center">
                            <nav>
                              <ul>
                           <li><Link to="/">Home</Link></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="courses.html">Courses</a></li>
                                <li><a href="pricing.html">Pricing</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="contact.html">Contact</a></li>
                              </ul>
                            </nav>
                          </div>   
                        </div>
                      </div>
                    </div>
                    <div className="footer-social mt-30 wow fadeInUp" data-wow-duration="3s" data-wow-delay=".8s">
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="https://bit.ly/sai4ull"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-pinterest-p"></i></a>
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
                      Copyright &copy;{new Date().getFullYear()} All rights reserved | Template by <a href="https://colorlib.com" target="_blank" rel="noreferrer">Colorlib</a>
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
        <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
      </div>

    </div>
  );
};

export default IndexPage;
