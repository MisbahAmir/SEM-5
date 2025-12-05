// // src/pages/Register.jsx
// import React, { useState } from "react";
// import { registerUser } from "../services/auth";

// const Register = () => {
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await registerUser(form);
//     if (res.error) setMessage(res.error);
//     else setMessage(res.message);
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="card shadow p-4" style={{ width: "400px", borderRadius: "15px" }}>
//         <h2 className="text-center mb-4">Register</h2>
//         {message && <div className="alert alert-info">{message}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <input
//               type="text"
//               name="name"
//               className="form-control"
//               placeholder="Full Name"
//               value={form.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="email"
//               name="email"
//               className="form-control"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="password"
//               name="password"
//               className="form-control"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button className="btn btn-danger w-100" type="submit">
//             Register
//           </button>
//         </form>
//         <p className="text-center mt-3">
//           Already have an account? <a href="/login">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

// src/pages/Register.jsx
import React, { useState, useEffect } from "react";
import { registerUser } from "../services/auth";

const icons = ["💪", "🏋️", "🥊", "🏃‍♂️", "🏃‍♀️", "🧘", "🏋️‍♂️"];
const confettiColors = ["#00ff00", "#0ff", "#ff0", "#ff3d3d", "#ff69b4", "#ffa500"];

const generateIconStyle = () => {
  const size = Math.random() * 30 + 20;
  const left = Math.random() * 100;
  const duration = Math.random() * 10 + 7;
  const delay = Math.random() * 5;
  const rotation = Math.random() * 360;
  const color = `hsl(${Math.random() * 360}, 100%, 70%)`;
  return { size, left, duration, delay, rotation, color };
};

const generateConfetti = () => {
  const size = Math.random() * 10 + 5;
  const left = Math.random() * 100;
  const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
  const duration = Math.random() * 3 + 2;
  const delay = Math.random() * 1;
  return { size, left, color, duration, delay };
};

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [confetti, setConfetti] = useState([]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerUser(form);
    if (res.error) {
      setMessage(res.error);
      setSuccess(false);
    } else {
      setMessage(res.message);
      setSuccess(true);

      // generate confetti particles
      const particles = Array.from({ length: 30 }).map(generateConfetti);
      setConfetti(particles);

      setTimeout(() => {
        setMessage("");
        setSuccess(false);
        setConfetti([]);
      }, 5000);
    }
  };

  return (
    <div style={{
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(120deg, #0d0d0d, #1a1a1a)",
      fontFamily: "'Poppins', sans-serif",
      overflow: "hidden"
    }}>
      {/* Floating Gym Icons */}
      {Array.from({ length: 20 }).map((_, idx) => {
        const { size, left, duration, delay, rotation, color } = generateIconStyle();
        const icon = icons[Math.floor(Math.random() * icons.length)];
        return (
          <span key={idx} style={{
            position: "absolute",
            top: "-50px",
            left: `${left}%`,
            fontSize: `${size}px`,
            opacity: 0.8,
            color: color,
            transform: `rotate(${rotation}deg)`,
            textShadow: `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`,
            animation: `floatDown ${duration}s linear ${delay}s infinite`
          }}>{icon}</span>
        );
      })}

      {/* Register Card */}
      <div style={{
        position: "relative",
        width: "400px",
        background: "#111",
        borderRadius: "20px",
        padding: "50px 35px",
        boxShadow: "0 20px 60px rgba(255,61,61,0.8)",
        zIndex: 2
      }}>
        <h2 style={{
          textAlign: "center",
          color: "#ff3d3d",
          fontWeight: "800",
          marginBottom: "40px",
          letterSpacing: "1px",
          textShadow: "0 2px 10px rgba(255,61,61,0.7)"
        }}>Register</h2>

        {/* Success/Error Message */}
        {message && (
          <div style={{
            position: "relative",
            background: success ? "#47cd8eff" : "#222",
            color: success ? "#d4edda" : "#ff3d3d",
            padding: "12px",
            borderRadius: "10px",
            textAlign: "center",
            marginBottom: "25px",
            boxShadow: success ? "0 0 25px #0f5132, 0 0 50px #a9e9cbff" : "0 0 20px rgba(255,0,0,0.5)",
            animation: success ? "floatUp 3s ease forwards" : "fadeMessage 0.8s forwards"
          }}>
            {message}

            {/* Confetti particles */}
            {success && confetti.map((c, i) => (
              <span key={i} style={{
                position: "absolute",
                top: 0,
                left: `${c.left}%`,
                width: `${c.size}px`,
                height: `${c.size}px`,
                backgroundColor: c.color,
                borderRadius: "50%",
                opacity: 0.9,
                animation: `confettiFall ${c.duration}s ease ${c.delay}s forwards`
              }}></span>
            ))}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {["name", "email", "password"].map((field, idx) => (
            <div key={idx} style={{ position: "relative", marginBottom: "25px" }}>
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                value={form[field]}
                onChange={handleChange}
                required
                placeholder={field === "name" ? "Full Name" : field === "email" ? "Email" : "Password"}
                style={{
                  width: "100%",
                  padding: "15px 20px",
                  borderRadius: "12px",
                  border: "2px solid #333",
                  outline: "none",
                  background: "#1a1a1a",
                  color: "#fff",
                  fontSize: "15px",
                  transition: "all 0.3s",
                  boxShadow: "0 0 10px rgba(255,61,61,0.4)"
                }}
                onFocus={e => e.target.style.boxShadow = "0 0 20px #ff3d3d, 0 0 30px #ff3d3d"}
                onBlur={e => e.target.style.boxShadow = "0 0 10px rgba(255,61,61,0.4)"}
              />
            </div>
          ))}

          <button type="submit" style={{
            width: "100%",
            padding: "16px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(90deg, #ff3d3d, #b70000, #ff3d3d)",
            color: "#fff",
            fontWeight: "700",
            fontSize: "16px",
            cursor: "pointer",
            transition: "all 0.3s",
            boxShadow: "0 5px 25px rgba(255,61,61,0.9)",
            backgroundSize: "200% 200%",
            animation: "buttonGlow 3s ease infinite"
          }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            Register
          </button>
        </form>

        <p style={{
          textAlign: "center",
          color: "#aaa",
          marginTop: "30px",
          fontSize: "14px"
        }}>
          Already have an account? <a href="/loginuser" style={{ color: "#ff3d3d", fontWeight: "500" }}>Login</a>
        </p>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes floatDown {
            0% { transform: translateY(-50px) rotate(0deg); opacity: 0.5; }
            50% { opacity: 1; }
            100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
          }

          @keyframes buttonGlow {
            0% { background-position: 0% 50%; box-shadow: 0 5px 20px rgba(255,61,61,0.7);}
            50% { background-position: 100% 50%; box-shadow: 0 5px 25px rgba(255,61,61,1);}
            100% { background-position: 0% 50%; box-shadow: 0 5px 20px rgba(255,61,61,0.7);}
          }

          @keyframes fadeMessage {
            0% { opacity: 0; transform: translateY(-10px); }
            50% { opacity: 1; transform: translateY(0); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes floatUp {
            0% { transform: translateY(0px); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translateY(-100px); opacity: 0; }
          }

          @keyframes confettiFall {
            0% { transform: translateY(0px) rotate(0deg); opacity: 1; }
            100% { transform: translateY(-150px) rotate(360deg); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default Register;






// // src/pages/Register.jsx
// import React, { useState } from "react";
// import { registerUser } from "../services/auth";

// const Register = () => {
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await registerUser(form);
//     if (res.error) setMessage(res.error);
//     else setMessage(res.message);
//   };

//   return (
//     <div style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//       background: "#0d0d0d",
//       fontFamily: "'Poppins', sans-serif"
//     }}>
//       <div style={{
//         width: "400px",
//         background: "#1a1a1a",
//         borderRadius: "20px",
//         padding: "50px 30px",
//         boxShadow: "0 10px 40px rgba(255,0,0,0.6)",
//         color: "#fff",
//       }}>
//         <h2 style={{
//           textAlign: "center",
//           color: "#ff3d3d",
//           fontWeight: "800",
//           marginBottom: "35px",
//           letterSpacing: "1px"
//         }}>Register</h2>

//         {message && (
//           <div style={{
//             background: "#2a2a2a",
//             color: "#ff3d3d",
//             padding: "12px",
//             borderRadius: "10px",
//             textAlign: "center",
//             marginBottom: "25px",
//             boxShadow: "0 0 10px rgba(255,0,0,0.5)"
//           }}>
//             {message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
//           {["name", "email", "password"].map((field, idx) => (
//             <div key={idx} style={{ position: "relative", marginBottom: "25px" }}>
//               <input
//                 type={field === "password" ? "password" : "text"}
//                 name={field}
//                 value={form[field]}
//                 onChange={handleChange}
//                 required
//                 placeholder={field === "name" ? "Full Name" : field === "email" ? "Email" : "Password"}
//                 style={{
//                   width: "100%",
//                   padding: "15px 20px",
//                   borderRadius: "12px",
//                   border: "2px solid #333",
//                   outline: "none",
//                   background: "#1a1a1a",
//                   color: "#fff",
//                   fontSize: "15px",
//                   transition: "all 0.3s",
//                 }}
//                 onFocus={e => e.target.style.border = "2px solid #ff3d3d"}
//                 onBlur={e => e.target.style.border = "2px solid #333"}
//               />
//             </div>
//           ))}

//           <button type="submit" style={{
//             width: "100%",
//             padding: "15px",
//             borderRadius: "12px",
//             border: "none",
//             background: "linear-gradient(90deg, #ff3d3d, #b70000)",
//             color: "#fff",
//             fontWeight: "700",
//             fontSize: "16px",
//             cursor: "pointer",
//             transition: "all 0.3s",
//             boxShadow: "0 5px 15px rgba(255,61,61,0.6)"
//           }}
//             onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
//             onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
//           >
//             Register
//           </button>
//         </form>

//         <p style={{
//           textAlign: "center",
//           color: "#aaa",
//           marginTop: "30px",
//           fontSize: "14px"
//         }}>
//           Already have an account? <a href="/login" style={{ color: "#ff3d3d", fontWeight: "500" }}>Login</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

