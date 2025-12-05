import "../../src/assets/LandingPage.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  const navigate = useNavigate();

  return (
    <div className="ultra-landing" style={{ backgroundColor: "#000" }}>
      <div className="landing-overlay"></div>

      {/* Floating Animated Lights */}
      <div className="landing-glow"></div>

      <div className="landing-content">
        <h1 className="landing-title">
          <span className="red-glow">FITNESS</span> TRACKER
        </h1>

        <p className="landing-tagline">
          THE FUTURE OF FITNESS • IS • WAITING • FOR YOU
        </p>

        <div className="landing-divider"></div>

        <div className="landing-btn-group">
          <button className="btn-neon" onClick={() => navigate("/loginuser")}>
            LOGIN
          </button>
          <button
            className="btn-neon-outline"
            onClick={() => navigate("/register")}
          >
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
