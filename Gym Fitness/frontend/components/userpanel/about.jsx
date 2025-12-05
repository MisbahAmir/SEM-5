import { Link } from "react-router-dom";

 import "../../src/assets/Footer.css";
 import React, { useState } from "react";


const Aboutpage = () => {
    const sectionStyle = { backgroundColor: "#000", color: "#fff" };
    const [activeItem, setActiveItem] = useState(null);

  return (
    <>
      {/* Header */}
      <header style={sectionStyle}>
        <div className="header-area header-transparent">
          <div className="main-header ">
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
                      <li>
                     
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
<br></br>
<br></br>
<div
  className="slider-area2"
  style={{
    position: "relative",
    width: "100%",
    height: "65vh",
    background: "linear-gradient(135deg, #000 60%, #0d0d0d 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  }}
>
  {/* Floating Red Particles */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at 20% 30%, rgba(255,0,0,0.15), transparent 60%), radial-gradient(circle at 80% 70%, rgba(255,0,0,0.12), transparent 60%)",
      animation: "pulseRed 6s infinite alternate",
      pointerEvents: "none",
    }}
  ></div>

  {/* Neon Circular Glow Rings */}
  <div
    style={{
      position: "absolute",
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      border: "2px solid rgba(255,0,0,0.2)",
      boxShadow: "0 0 60px rgba(255,0,0,0.3)",
      animation: "spinSlow 18s linear infinite",
      top: "15%",
      left: "10%",
      filter: "blur(1px)",
    }}
  ></div>
  <div
    style={{
      position: "absolute",
      width: "330px",
      height: "330px",
      borderRadius: "50%",
      border: "2px solid rgba(255,0,0,0.15)",
      animation: "spinReverse 22s linear infinite",
      bottom: "10%",
      right: "8%",
      filter: "blur(1px)",
    }}
  ></div>

  {/* Holographic Bottom Glow */}
  <div
    style={{
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "200px",
      background:
        "linear-gradient(to top, rgba(255,0,0,0.25), rgba(255,0,0,0) 70%)",
      filter: "blur(15px)",
      pointerEvents: "none",
    }}
  ></div>

  {/* Inner Hero Content */}
  <div className="container" style={{ position: "relative", zIndex: 10 }}>
    <div className="row">
      <div className="col-xl-12 d-flex justify-content-center">
        <div
          className="hero-cap hero-cap2 text-center"
          style={{
            animation: "slideUp 1.3s ease",
            backdropFilter: "blur(4px)",
            padding: "20px 50px",
            borderRadius: "10px",
          }}
        >
          <h2
            style={{
              fontSize: "78px",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "5px",
              textTransform: "uppercase",
              textShadow:
                "0 0 15px rgba(255,0,0,0.3), 0 0 40px rgba(255,0,0,0.2)",
            }}
          >
            About Me
          </h2>

          {/* Neon Underline */}
          <div
            style={{
              width: "160px",
              height: "5px",
              margin: "15px auto 0",
              background:
                "linear-gradient(90deg, transparent, #ff1a1a, transparent)",
              borderRadius: "50px",
              animation: "glowLine 2.5s infinite ease-in-out",
            }}
          ></div>

          <p
            style={{
              marginTop: "22px",
              fontSize: "20px",
              color: "#dcdcdc",
              maxWidth: "650px",
              margin: "22px auto 0",
              opacity: 0.9,
              letterSpacing: "1.2px",
              lineHeight: "1.6",
            }}
          >
            Pushing limits. Building strength. Igniting discipline.  
            <br />Your transformation starts here.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* INLINE ANIMATION KEYFRAMES */}
  <style>
    {`
      @keyframes slideUp {
        0% { opacity: 0; transform: translateY(40px); }
        100% { opacity: 1; transform: translateY(0); }
      }

      @keyframes pulseRed {
        0% { opacity: 0.7; }
        100% { opacity: 1; }
      }

      @keyframes spinSlow {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      @keyframes spinReverse {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(-360deg); }
      }

      @keyframes glowLine {
        0%, 100% {
          box-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
        }
        50% {
          box-shadow: 0 0 25px rgba(255, 0, 0, 1);
        }
      }
    `}
  </style>
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

       {/* Modern About Section with Balanced Layout */}
{/* Enhanced Modern About Section */}
<section
  className="about-area2 fix pb-padding pt-50 pb-80"
  style={{
    background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
    color: "#fff",
    position: "relative",
    overflow: "hidden",
    padding: "100px 0",
    fontFamily: "'Roboto', sans-serif",
  }}
>
  <div
    className="container"
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      gap: "40px",
      alignItems: "flex-start",
      position: "relative",
    }}
  >
    {/* Left Side Large Image */}
    <div
      style={{
        flex: "1 1 420px",
        position: "relative",
        zIndex: 1,
      }}
    >
     <img
  src="assets/img/gallery/about.png"
  alt="About Me"
  style={{
    width: "100%",
    maxWidth: "400px",
    height: "450px",       // <<< HEIGHT INCREASE
    objectFit: "cover",    // <<< HEIGHT PROPER FILL KARDEGA
    borderRadius: "20px",
    boxShadow: "0 30px 60px rgba(255,0,0,0.5)",
    transition: "transform 0.5s",
    display: "block",
    margin: "0 auto",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
/>

      {/* Floating Red Glow */}
      <div
        style={{
          position: "absolute",
          top: "-30px",
          right: "-30px",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,0,0,0.35), transparent)",
          zIndex: 0,
        }}
      ></div>
    </div>

    {/* Right Side Cards (overlapping the image slightly) */}
    <div
      style={{
        flex: "1 1 600px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        position: "relative",
        zIndex: 2,
        marginTop: "50px",
      }}
    >
      {/* Card 1 */}
      <div
        style={{
          background: "rgba(26,26,26,0.95)",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 20px 50px rgba(255,0,0,0.4)",
          transition: "transform 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        <h3 style={{ color: "red", marginBottom: "15px" }}>Who I Am</h3>
        <p style={{ color: "#ccc", lineHeight: "1.8", fontSize: "1.1rem" }}>
          Certified Gym Trainer with 5+ years of experience helping clients achieve
          their fitness goals. Passionate about functional training, strength, and nutrition.
        </p>
      </div>


      {/* Card 3 */}
      <div
        style={{
          background: "rgba(26,26,26,0.95)",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 20px 50px rgba(255,0,0,0.4)",
          transition: "transform 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        <h3 style={{ color: "red", marginBottom: "15px" }}>Why Choose Me</h3>
        <p style={{ color: "#ccc", lineHeight: "1.8", fontSize: "1.1rem" }}>
          Personalized programs, real-time progress tracking, and proven results
          helping clients transform their lifestyle efficiently.
        </p>
      </div>

      {/* Call-to-action */}
      <a
        href="courses.html"
        style={{
          display: "inline-block",
          marginTop: "15px",
          padding: "14px 40px",
          border: "2px solid red",
          borderRadius: "50px",
          color: "#fff",
          fontWeight: "600",
          textTransform: "uppercase",
          transition: "all 0.3s",
          width: "fit-content",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "red";
          e.currentTarget.style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "#fff";
        }}
      >
        My Courses
      </a>
    </div>

    {/* Optional Background Floating Red Glow */}
    <div
      style={{
        position: "absolute",
        top: "20%",
        left: "-100px",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(255,0,0,0.15), transparent)",
        borderRadius: "50%",
        zIndex: 0,
      }}
    ></div>
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





<div className="power-card" onClick={() => setActiveItem(item)}>






<section className="ultra-power-section" style={{ padding: "90px 0", background: "#0a0a0a" }}>
 <style>
{`
  /* ===== TITLE ===== */
  .power-title {
    font-size: 42px;
    font-weight: 900;
    color: #fff;
    letter-spacing: 1px;
    text-shadow: 0 0 20px red;
  }
  .power-title span {
    color: red;
    text-shadow: 0 0 25px red;
  }
  .power-sub { 
    color:#c9c9c9; 
    font-size:16px; 
    margin-top:10px;
  }

  /* ===== POWER CARD ===== */
  .power-card {
    background: rgba(20,20,20,0.75);
    backdrop-filter: blur(8px);
    border-radius: 22px;
    padding: 45px 35px;
    text-align: center;
    border: 1px solid rgba(255,0,0,0.4);
    transition: 0.45s ease;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transform-style: preserve-3d;
  }

  .power-card::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 22px;
    padding: 2px;
    background: linear-gradient(130deg, rgba(255,0,0,0.8), transparent, rgba(255,0,0,0.8));
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    animation: rotateGlow 4s linear infinite;
  }

  @keyframes rotateGlow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .power-card:hover {
    transform: translateY(-12px) scale(1.05) rotateX(8deg);
    box-shadow: 0 25px 70px rgba(255,0,0,0.5);
  }

  .power-card img {
    width: 90px;
    filter: brightness(0) invert(1) drop-shadow(0 0 20px red);
    transition: 0.3s;
  }

  .power-card:hover img {
    filter: brightness(0) invert(1) drop-shadow(0 0 35px red);
    transform: scale(1.12);
  }

  .power-card h3 { 
    margin-top:18px; 
    font-weight:900; 
    font-size:24px; 
    color:#fff; 
    letter-spacing: 1px;
    text-shadow: 0 0 15px rgba(255,0,0,0.6);
  }
  .power-card p { 
    color:#d4d4d4; 
    font-size:15px; 
    margin-top:10px;
  }

  .power-badge {
    position: absolute;
    top: 18px;
    right: 18px;
    background: linear-gradient(90deg, red, darkred);
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 5px 14px;
    border-radius: 50px;
    letter-spacing: 1px;
    box-shadow: 0 0 15px red;
  }

  /* ===== POPUP ===== */
  .popup-overlay {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.85);
    backdrop-filter: blur(8px);
    display: flex; 
    justify-content: center; 
    align-items: center;
    z-index: 9999;
    animation: fadeIn 0.5s ease;
    padding: 15px;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .popup-box {
    background: rgba(15, 15, 15, 0.85);
    backdrop-filter: blur(12px);
    padding: 35px 30px;
    width: 100%;
    max-width: 650px;
    border-radius: 22px;
    border: 1px solid rgba(255,0,0,0.4);
    box-shadow: 0 0 50px rgba(255,0,0,0.6);
    animation: popupAppear 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    max-height: 90vh;
    overflow-y: auto;
  }

  @keyframes popupAppear {
    0% { transform: scale(0.7); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  .popup-box h2 { 
    color:#fff; 
    font-weight:900; 
    margin-bottom:15px;
    text-shadow: 0 0 18px red;
    text-align:center;
  }

  .popup-box h3 {
    color: #ff5555;
    margin-top:20px;
    margin-bottom:10px;
    font-weight:800;
    font-size:18px;
  }

  .popup-box p { 
    color:#e2e2e2; 
    white-space: pre-line; 
    line-height:1.7; 
    font-size: 15px;
  }

  .close-btn {
    background: linear-gradient(90deg, red, darkred);
    color:white; border:none;
    padding:12px 26px; 
    border-radius:12px;
    margin-top:25px; 
    cursor:pointer; 
    font-weight:900;
    letter-spacing:1px;
    box-shadow: 0 0 20px red;
    transition: 0.3s;
    display:block;
    margin-left:auto;
    margin-right:auto;
  }

  .close-btn:hover {
    transform: scale(1.08);
    box-shadow: 0 0 35px red;
  }

  /* ===== RESPONSIVE ===== */
  @media(max-width: 1199px) {
    .power-card { padding: 35px 25px; }
    .power-card h3 { font-size:22px; }
    .power-card p { font-size:14px; }
  }
  @media(max-width: 767px) {
    .power-card { padding: 25px 20px; }
    .power-card h3 { font-size:20px; }
    .power-card p { font-size:13px; }
    .popup-box { padding: 25px 20px; }
    .popup-box h2 { font-size:22px; }
  }

  /* ===== SCROLLBAR STYLE FOR POPUP ===== */
  .popup-box::-webkit-scrollbar {
    width: 6px;
  }
  .popup-box::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 6px;
  }
`}
</style>



  <div className="container text-center mb-5">
    <h2 className="power-title">
      OUR <span>PREMIUM FITNESS</span> FEATURES
    </h2>
    <p className="power-sub">Advanced training, elite technology & science-based programs.</p>
  </div>

  <div className="container">
    <div className="row justify-content-center">

      {[
        {
          img: "assets/img/icon/dumbbell.png",
          title: "Elite Machines",
          desc: "Train on imported, competition-grade gym equipment.",
          badge: "PRO",
          details: `
• Imported USA machines
• Full body equipment
• Athlete-grade quality
• Zero injury setup
• Smooth calibrated motion
          `
        },
        {
          img: "assets/img/icon/trainer.png",
          title: "Top Trainers",
          desc: "Certified fitness experts guiding you daily.",
          badge: "CERTIFIED",
          details: `
• International certified trainers
• Progress tracking
• Injury prevention
• Strength coaching
• Fat-loss specialists
          `
        },
        {
          img: "assets/img/icon/heart.png",
          title: "Science Based Plans",
          desc: "Workout + nutrition optimized for body transformation.",
          badge: "NEW",
          details: `
• Custom calorie plan
• Body-type based training
• Transformation science
• Supplement guidance
• Weekly adjustment plan
          `
        },
        {
          img: "assets/img/icon/fire.png",
          title: "HIIT & Power Classes",
          desc: "High-intensity training that rapidly burns calories.",
          badge: "HOT",
          details: `
• 30-minute HIIT
• Fast calorie burn
• Power circuits
• Trainer-led sessions
• Guaranteed fat loss
          `
        },
        {
          img: "assets/img/icon/stretch.png",
          title: "Flexibility & Strength",
          desc: "Improve mobility, strength & endurance safely.",
          badge: "ADVANCED",
          details: `
• Mobility routine
• Deep flexibility drills
• Strength progression
• Posture improvement
• Athlete endurance training
          `
        },
      ].map((item, index) => (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-9 mb-4" key={index}>
          
          {/* ONLY THIS LINE ADDED */}
          <div className="power-card" onClick={() => setActiveItem(item)}>
            <span className="power-badge">{item.badge}</span>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>

        </div>
      ))}

    </div>
  </div>
</section>

{/* ===== POPUP SHOW ===== */}
{activeItem && (
  <div className="popup-overlay" onClick={() => setActiveItem(null)}>
    <div className="popup-box" onClick={(e) => e.stopPropagation()}>
      <h2>{activeItem.title}</h2>
      <h3>Overview:</h3>
      <p>{activeItem.desc}</p>

      <h3>Features:</h3>
      <p>{activeItem.details}</p>

      <h3>Benefits:</h3>
      <p>• Improved performance<br/>• Faster results<br/>• Safe & effective training</p>

      <button className="close-btn" onClick={() => setActiveItem(null)}>Close</button>
    </div>
  </div>
)}


</div>



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

export default Aboutpage;


