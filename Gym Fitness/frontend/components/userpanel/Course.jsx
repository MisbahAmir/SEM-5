// src/components/userpanel/CoursesPage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../src/assets/Footer.css"; // keep your existing footer CSS

const CoursesPage = () => {
  // enrollment state + persistence
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [formData, setFormData] = useState({ name: "", number: "", days: "", timing: "" });
  const [enrollments, setEnrollments] = useState([]);

  // comments state + persistence
  const [comments, setComments] = useState([]);
  const [commentForm, setCommentForm] = useState({ name: "", comment: "" });

  // success animation overlay
  const [showSuccess, setShowSuccess] = useState(false);

  // initial load
  useEffect(() => {
    const stored = localStorage.getItem("courseEnrollments");
    if (stored) setEnrollments(JSON.parse(stored));
    const storedComments = localStorage.getItem("courseComments");
    if (storedComments) setComments(JSON.parse(storedComments));
  }, []);

  // sample gym images - replace URLs with your own assets if you want
  const enhancedCourses = [
  { name: "Strength Training", img: "assets/img/logo/strenght.jpeg" },
  { name: "Cardio Blast", img: "assets/img/logo/cardio.jpg" },
  { name: "Yoga Basics", img: "assets/img/logo/yoga.avif" },
  { name: "HIIT Program", img: "assets/img/logo/hiit.avif" },
  { name: "CrossFit Level 1", img: "assets/img/logo/cross.webp" },
  { name: "Advanced Bodybuilding", img: "assets/img/logo/body.jpg" },
];


  // Open modal to enroll
  const openModal = (courseName) => {
    setSelectedCourse(courseName);
    setShowModal(true);
    setFormData({ name: "", number: "", days: "", timing: "" });
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
  };

  // handle enroll form change
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // submit enroll form -> save to localStorage -> show success animation
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number, days, timing } = formData;
    if (!name.trim() || !number.trim() || !days.trim() || !timing.trim()) {
      alert("Please fill all fields!");
      return;
    }
    const entry = { name: name.trim(), number: number.trim(), days: days.trim(), timing: timing.trim(), course: selectedCourse, createdAt: new Date().toISOString() };
    const updated = [...enrollments, entry];
    setEnrollments(updated);
    localStorage.setItem("courseEnrollments", JSON.stringify(updated));

    // show stylish success panel
    setShowModal(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 1800);
  };

  // comments handling
  const handleCommentChange = (e) => setCommentForm({ ...commentForm, [e.target.name]: e.target.value });

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentForm.name.trim() || !commentForm.comment.trim()) {
      alert("Please fill both fields!");
      return;
    }
    const newC = { name: commentForm.name.trim(), comment: commentForm.comment.trim(), createdAt: new Date().toISOString() };
    const updated = [newC, ...comments]; // newest first
    setComments(updated);
    localStorage.setItem("courseComments", JSON.stringify(updated));
    setCommentForm({ name: "", comment: "" });
  };

  // small helper to format date
  const formatDate = (iso) => {
    try {
      const d = new Date(iso);
      return `${d.toLocaleDateString()} ${d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    } catch { return iso; }
  };

  // page sections preserved from your previous CoursePage - merged with upgraded courses and comment section
  return (
    <>
      {/* Header (unchanged structure) */}
      {/* Header (unchanged structure) */}
<header style={{ position: "relative", zIndex: 9999 }}>
  <div className="header-area header-transparent">
    <div className="main-header header-sticky">
      <div className="container-fluid">
        <div className="menu-wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to="/"><img src="assets/img/logo/logos.png" alt="Logo" width="180" height="180" /></Link>
          </div>

          <div className="main-menu f-right d-none d-lg-block">
            <nav>
              <ul id="navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/course">Courses</Link></li>
                <li><Link to="/price">Pricing</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>

          <div className="header-btns d-none d-lg-block f-right">
            <Link to="/contact" className="btn">Contact me</Link>
          </div>

          <div className="col-12 d-block d-lg-none">
            <div className="mobile_menu"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

{/* Hero Section */}
<main style={{ backgroundColor: "#000", color: "#fff" }}>
  <div className="slider-area2"
    style={{
      position: "relative",
      width: "100%",
      height: "60vh",
      paddingTop: "140px",   // ⭐ Added spacing so header stays clickable
      background: "linear-gradient(135deg, #000 60%, #0d0d0d 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }}
  >

    <div style={{
      position: "absolute",
      inset: 0,
      background: "radial-gradient(circle at 20% 30%, rgba(255,0,0,0.15), transparent 60%), radial-gradient(circle at 80% 70%, rgba(255,0,0,0.12), transparent 60%)",
      animation: "pulseRed 6s infinite alternate",
      pointerEvents: "none"
    }}></div>

    <div style={{
      position: "absolute",
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      border: "2px solid rgba(255,0,0,0.2)",
      boxShadow: "0 0 60px rgba(255,0,0,0.3)",
      animation: "spinSlow 18s linear infinite",
      top: "10%",
      left: "8%",
      filter: "blur(1px)"
    }}></div>

    <div style={{
      position: "absolute",
      width: "330px",
      height: "330px",
      borderRadius: "50%",
      border: "2px solid rgba(255,0,0,0.15)",
      animation: "spinReverse 22s linear infinite",
      bottom: "10%",
      right: "5%",
      filter: "blur(1px)"
    }}></div>

    <br /><br /><br /><br /><br /><br /><br /><br />

    <div className="container" style={{ position: "relative", zIndex: 20 }}>
      <div className="row">
        <br /><br /><br /><br />

        <div className="col-xl-12 d-flex justify-content-center">
          <div className="hero-cap hero-cap2 text-center"
            style={{
              animation: "slideUp 1.3s ease",
              backdropFilter: "blur(4px)",
              padding: "25px 50px",
              borderRadius: "12px"
            }}
          >
            <h2 style={{
              fontSize: "68px",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "4px",
              textTransform: "uppercase",
              textShadow: "0 0 15px rgba(255,0,0,0.3), 0 0 40px rgba(255,0,0,0.2)"
            }}>
              Courses
            </h2>

            <div style={{
              width: "180px",
              height: "5px",
              margin: "15px auto 0",
              background: "linear-gradient(90deg, transparent, #ff1a1a, transparent)",
              borderRadius: "50px",
              animation: "glowLine 2.5s infinite ease-in-out"
            }}></div>

            <p style={{
              marginTop: "22px",
              fontSize: "20px",
              color: "#dcdcdc",
              maxWidth: "700px",
              margin: "22px auto 0",
              opacity: 0.9,
              letterSpacing: "1.2px",
              lineHeight: "1.6"
            }}>
              Explore our premium training programs designed to push limits, build strength,
              and achieve your fitness goals.
            </p>
          </div>
        </div>
      </div>
    </div>

    <style>{`
      @keyframes slideUp { 0% { opacity: 0; transform: translateY(40px); } 100% { opacity: 1; transform: translateY(0); } }
      @keyframes pulseRed { 0% { opacity: 0.7; } 100% { opacity: 1; } }
      @keyframes spinSlow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      @keyframes spinReverse { 0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }
      @keyframes glowLine { 0%,100% { box-shadow:0 0 10px rgba(255,0,0,0.7);} 50% {box-shadow:0 0 25px rgba(255,0,0,1);} }
    `}</style>
  </div>



        {/* ======== UPGRADED COURSES GRID (replaces old grid) ======== */}
        <section className="courses-section" style={{ padding: "80px 0", background: "#0a0a0a" }}>
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-xl-8 text-center">
                                  <h5 style={{ fontSize: "68px", fontWeight: 900, color: "#fff", letterSpacing: "4px", textTransform: "uppercase", textShadow: "0 0 15px rgba(255,0,0,0.3), 0 0 40px rgba(255,0,0,0.2)" }}>Enroll our latest Courses</h5>
                
              </div>
            </div>

            <div className="row g-4">
              {enhancedCourses.map((c, idx) => (
                <div className="col-md-6 col-lg-4" key={idx}>
                  <div className="course-card" style={{ background: "#111", border: "2px solid rgba(255,0,0,0.12)", borderRadius: "16px", overflow: "hidden", position: "relative", boxShadow: "0 10px 30px rgba(0,0,0,0.6)", transition: "transform .35s, box-shadow .35s" }}>
                    {/* image */}
                    <div style={{ height: "180px", backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.35)), url(${c.img})`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "flex-end", padding: "16px" }}>
                      <span style={{ background: "rgba(0,0,0,0.5)", padding: "6px 10px", borderRadius: "10px", fontWeight: 700, color: "#fff", fontSize: "13px", letterSpacing: "0.6px" }}>{c.name}</span>
                    </div>

                    {/* content */}
                    <div style={{ padding: "18px" }}>
                      <h3 style={{ color: "#fff", margin: 0, fontSize: "20px", fontWeight: 800 }}>{c.name}</h3>
                      <p style={{ color: "#cfcfcf", fontSize: "14px", marginTop: "8px", minHeight: "44px" }}>
                        Targeted workouts, structured plans and expert coaching. Build strength, endurance and flexibility.
                      </p>

                      <div style={{ display: "flex", gap: "8px", marginTop: "12px", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                          <div style={{ background: "linear-gradient(90deg,#ff1a1a,#ff5555)", padding: "6px 10px", borderRadius: "10px", color: "#fff", fontWeight: 700, fontSize: "13px" }}>Starts: Mon</div>
                          <div style={{ background: "#161616", padding: "6px 10px", borderRadius: "10px", color: "#ccc", fontSize: "13px" }}>Duration: 8 weeks</div>
                        </div>

                        <button
                          onClick={() => openModal(c.name)}
                          style={{
                            padding: "8px 18px",
                            borderRadius: "999px",
                            border: "none",
                            background: "linear-gradient(90deg,#ff1a1a,#ff5555)",
                            color: "#fff",
                            fontWeight: 800,
                            cursor: "pointer",
                            boxShadow: "0 6px 20px rgba(255,26,26,0.15)",
                            transition: "transform .18s",
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
                          onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                        >
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes flickerText { 0%,100% { opacity:1; text-shadow:0 0 15px rgba(255,0,0,0.4);} 50% {opacity:0.85; text-shadow:0 0 35px rgba(255,0,0,0.8);} }
            @keyframes fadeInText { 0% { opacity:0; transform:translateY(30px);} 100% { opacity:1; transform:translateY(0);} }
            .course-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(0,0,0,0.75); }
          `}</style>
        </section>

        {/* ======== ENROLL MODAL (modern glass style) ======== */}
        {showModal && (
          <div className="modal-overlay" style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2000 }}>
            <div style={{ width: 420, maxWidth: "94%", background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))", borderRadius: 14, padding: 20, border: "1px solid rgba(255,26,26,0.12)", boxShadow: "0 20px 50px rgba(0,0,0,0.8)", position: "relative" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <h3 style={{ margin: 0, color: "#ffb3b3" }}>Enroll — <span style={{ color: "#fff", fontWeight: 800 }}>{selectedCourse}</span></h3>
                <button onClick={closeModal} style={{ background: "transparent", border: "none", color: "#ff7b7b", fontSize: 22, cursor: "pointer" }}>×</button>
              </div>

              <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" style={inputStyle()} required />
                <input name="number" value={formData.number} onChange={handleChange} placeholder="Phone Number" style={inputStyle()} required />
                <input name="days" value={formData.days} onChange={handleChange} placeholder="Days (Mon-Wed-Fri)" style={inputStyle()} required />
                <input name="timing" value={formData.timing} onChange={handleChange} placeholder="Timing (6-7 PM)" style={inputStyle()} required />
                <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
                  <button type="button" onClick={closeModal} style={ghostBtnStyle()}>Cancel</button>
                  <button type="submit" style={submitBtnStyle()}>Confirm Enroll</button>
                </div>
              </form>
            </div>
            <style>{`@keyframes modalPop { from { transform: translateY(20px); opacity:0 } to { transform: translateY(0); opacity:1 } } .modal-overlay > div { animation: modalPop .28s ease both }`}</style>
          </div>
        )}

        {/* ======== SUCCESS MINI POPUP (fancy) ======== */}
        {showSuccess && (
          <div style={{ position: "fixed", right: 20, top: 20, zIndex: 3000 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 16px", borderRadius: 12, background: "linear-gradient(90deg,#0f0f0f,#121212)", border: "1px solid rgba(255,26,26,0.18)", boxShadow: "0 10px 30px rgba(0,0,0,0.7)" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(90deg,#2ecc71,#16a34a)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800 }}>
                ✓
              </div>
              <div style={{ color: "#fff" }}>
                <div style={{ fontWeight: 800 }}>Enrollment Submitted</div>
                <div style={{ fontSize: 12, opacity: 0.8 }}>We have saved your details — admin will contact soon.</div>
              </div>
            </div>
          </div>
        )}

        {/* ======== Comments Section (before Footer) ======== */}
        <section style={{ padding: "48px 0", background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.02)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 18 }}>
              <h3 style={{ color: "#fff", fontSize: 28, margin: 0 }}>What People Are Saying</h3>
              <p style={{ color: "#cfcfcf", maxWidth: 760, margin: "8px auto 0" }}>Share your experience or read recent reviews from our members.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 20, alignItems: "start" }}>
              {/* Comments list */}
              <div>
                {comments.length === 0 ? (
                  <div style={{ color: "#bdbdbd", padding: 20, borderRadius: 12, background: "#0f0f0f" }}>No reviews yet — be the first to share!</div>
                ) : (
                  <div style={{ display: "grid", gap: 12 }}>
                    {comments.map((cm, i) => (
                      <div key={i} style={{ padding: 12, borderRadius: 12, background: "linear-gradient(180deg,#0b0b0b,#0f0f0f)", border: "1px solid rgba(255,255,255,0.02)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div style={{ fontWeight: 800, color: "#ffb3b3" }}>{cm.name}</div>
                          <div style={{ fontSize: 12, color: "#bdbdbd" }}>{formatDate(cm.createdAt)}</div>
                        </div>
                        <div style={{ marginTop: 6, color: "#dcdcdc" }}>{cm.comment}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Comment form */}
              <aside style={{ background: "#111", padding: 16, borderRadius: 12, boxShadow: "0 10px 30px rgba(0,0,0,0.6)" }}>
                <h4 style={{ marginTop: 0, color: "#ffb3b3" }}>Leave a Review</h4>
                <form onSubmit={handleCommentSubmit} style={{ display: "grid", gap: 10 }}>
                  <input name="name" value={commentForm.name} onChange={handleCommentChange} placeholder="Your name" style={inputStyle()} required />
                  <textarea name="comment" value={commentForm.comment} onChange={handleCommentChange} placeholder="Your review..." rows={4} style={{ ...inputStyle(), resize: "vertical" }} required />
                  <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
                    <button type="submit" style={submitBtnStyle()}>Post Review</button>
                  </div>
                </form>
              </aside>
            </div>
          </div>
        </section>

        {/* ======== KEEP the rest of your previous sections UNCHANGED (Team, Training categories, Video area, Services) ======== */}
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

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer (unchanged structure) */}
      <footer className="gym-footer">
        {/* Floating Gym Icons */}
        <div className="floating-icons">
          <span>💪</span>
          <span>🏋️</span>
          <span>🥊</span>
          <span>🏃‍♂️</span>
        </div>

        <div className="footer-container">
          <div className="footer-box">
            <h2 className="footer-title">About Gym Tracker</h2>
            <p className="footer-text">Your ultimate fitness companion — track workouts, measure progress, stay consistent, and transform your body with powerful tools and clean analytics.</p>
          </div>

          <div className="footer-box">
            <h2 className="footer-title">Contact</h2>
            <p className="footer-text">📞 +92 300 254149</p>
            <p className="footer-text">📧 misbahamir508@gmail.com</p>
            <p className="footer-text">📞 +92 315 1376620</p>
            <p className="footer-text">📧 maviaraheem45@gmail.com</p>
          </div>

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

        <div className="footer-bottom-enhanced">
          <p className="footer-text">© {new Date().getFullYear()} <span className="brand">Gym Fitness Tracker</span> — <br /> Designed with Misbah Amir <span className="heart"> ❤️ </span> Mavia Raheem</p>
        </div>
      </footer>

      {/* Scroll Up */}
      <div id="back-top">
        <a title="Go to Top" href="#"><i className="fas fa-level-up-alt"></i></a>
      </div>
    </>
  );

  // small inline style helpers (placed after return to keep JSX clean)
  function inputStyle() {
    return {
      padding: "10px 12px",
      borderRadius: 10,
      border: "1px solid rgba(255,26,26,0.12)",
      background: "#000",
      color: "#fff",
      outline: "none",
      fontSize: 14,
    };
  }
  function submitBtnStyle() {
    return {
      padding: "10px 16px",
      borderRadius: 999,
      border: "none",
      background: "linear-gradient(90deg,#ff1a1a,#ff5555)",
      color: "#fff",
      fontWeight: 800,
      cursor: "pointer",
      boxShadow: "0 10px 30px rgba(255,26,26,0.12)",
    };
  }
  function ghostBtnStyle() {
    return {
      padding: "8px 12px",
      borderRadius: 999,
      border: "1px solid rgba(255,26,26,0.08)",
      background: "transparent",
      color: "#ffb3b3",
      cursor: "pointer",
    };
  }
};

export default CoursesPage;





