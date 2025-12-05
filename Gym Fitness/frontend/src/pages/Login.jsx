// // src/pages/Login.jsx
// import React, { useState } from "react";
// import { loginUser } from "../services/auth";

// const Login = () => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await loginUser(form);

//     if (res.error) return setMessage(res.error);

//     setMessage(res.message);

//     localStorage.setItem("token", res.token);
//     localStorage.setItem("role", res.role);

//     // ROLE-BASED REDIRECT
// if (res.role === "admin") {
//   window.location.href = "/Admin"; // ✅ match route in App.jsx
// } else {
//   window.location.href = "/"; // ✅ match user dashboard
// }

//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="card shadow p-4" style={{ width: "400px", borderRadius: "15px" }}>
//         <h2 className="text-center mb-4">Login</h2>
//         {message && <div className="alert alert-info">{message}</div>}

//         <form onSubmit={handleSubmit}>
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
//             Login
//           </button>
//         </form>

//         <p className="text-center mt-3">
//           Don't have an account? <a href="/register">Register</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);

      if (!res.data.token) {
        return setMessage(res.data.error || res.data.message || "Login failed");
      }

      // Save token & role
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      setMessage(res.data.message);

      // Role-based redirect
      if (res.data.role === "admin") {
        window.location.href = "/Admin"; // exact match with App.jsx
      } else {
        window.location.href = "/index"; // user route
      }

    } catch (err) {
      setMessage("Server Error");
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        height: "100vh",
        display: "flex",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        body, html { margin:0; padding:0; }

        .left-panel {
          flex: 1;
          background: url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1000&q=80') center/cover no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 2rem;
          font-weight: 700;
          text-shadow: 2px 2px 15px rgba(0,0,0,0.7);
          position: relative;
          overflow: hidden;
        }

        .left-panel::after {
          content: '';
          position: absolute;
          top:0; left:0; right:0; bottom:0;
          z-index: 1;
        }

        .hero-text {
          position: relative;
          z-index: 2;
          text-align: center;
          animation: neonText 3s ease-in-out infinite alternate;
        }

        @keyframes neonText {
          0% { color: #ff416c; text-shadow: 0 0 5px #ff416c, 0 0 10px #ff4b2b; }
          50% { color: #ff4b2b; text-shadow: 0 0 15px #ff416c, 0 0 30px #ff4b2b; }
          100% { color: #ff416c; text-shadow: 0 0 25px #ff416c, 0 0 50px #ff4b2b; }
        }

        .right-panel {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #0f0f0f;
          position: relative;
        }

        .login-card {
          background: #111;
          padding: 50px;
          border-radius: 20px;
          width: 400px;
          box-shadow: 0 0 40px #ff4b2b, 0 0 60px #ff416c;
          border: 2px solid #ff416c;
          position: relative;
          z-index: 1;
        }

        .login-card h2 { color: #fff; text-align: center; margin-bottom: 30px; font-weight: 700; }

        .login-card input {
          width: 100%; padding: 14px 20px; margin-bottom: 20px;
          border-radius: 12px; border: none; outline: none;
          background: #1c1c1c; color: #fff; font-size: 16px;
          transition: 0.3s;
        }

        .login-card input::placeholder { color: #aaa; }
        .login-card input:focus { background: #222; box-shadow: 0 0 10px #ff4b2b, 0 0 20px #ff416c; }

        .login-btn {
          width: 100%; padding: 14px; font-size: 18px; font-weight: 700;
          color: #fff; background: linear-gradient(90deg, #ff416c, #ff4b2b);
          border: none; border-radius: 12px; cursor: pointer; transition: 0.3s;
          box-shadow: 0 5px 20px rgba(255,65,108,0.5);
        }

        .login-btn:hover { transform: scale(1.05); box-shadow: 0 0 30px #ff416c, 0 0 40px #ff4b2b; }

        .register-text { margin-top: 20px; font-size: 14px; text-align: center; color: #ccc; }
        .register-text a { color: #ff416c; font-weight: 700; text-decoration: none; }
        .register-text a:hover { text-decoration: underline; }

        .login-message {
          background: rgba(0,255,0,0.2);
          color: #0f0; padding: 10px; border-radius: 10px;
          margin-bottom: 20px; animation: floatUp 2s ease-out forwards; text-align: center;
        }

        @keyframes floatUp { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(-20px); opacity: 0; } }

      `}</style>

      <div className="left-panel">
        <div className="hero-text">Push Your Limits 💪</div>
      </div>

      <div className="right-panel">
        <div className="login-card">
          <h2>Login</h2>
          {message && <div className="login-message">{message}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button className="login-btn" type="submit">Login</button>
          </form>
          <p className="register-text">
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;



// // src/pages/Login.jsx
// import React, { useState } from "react";
// import { loginUser } from "../services/auth";

// const Login = () => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await loginUser(form);

  //   if (res.error) return setMessage(res.error);

  //   setMessage(res.message);

  //   localStorage.setItem("token", res.token);
  //   localStorage.setItem("role", res.role);

  //   if (res.role === "admin") {
  //     window.location.href = "/admin";
  //   } else {
  //     window.location.href = "/";
  //   }
  // };


//   if (res.error) return setMessage(res.error);

// setMessage(res.message);

// localStorage.setItem("token", res.token);
// localStorage.setItem("role", res.role);

// if (res.role === "admin") {
//   window.location.href = "/Admin";
// } else {
//   window.location.href = "/";
// }

//   };
//   return (
//     <div
//       style={{
//         fontFamily: "'Poppins', sans-serif",
//         height: "100vh",
//         display: "flex",
//         overflow: "hidden",
//       }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

//         body, html { margin:0; padding:0; }

//         .left-panel {
//           flex: 1;
//           background: url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1000&q=80') center/cover no-repeat;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           color: #fff;
//           font-size: 2rem;
//           font-weight: 700;
//           text-shadow: 2px 2px 15px rgba(0,0,0,0.7);
//           position: relative;
//           overflow: hidden;
//         }

//         .left-panel::after {
//           content: '';
//           position: absolute;
//           top:0; left:0; right:0; bottom:0;
//           z-index: 1;
//         }

//         .hero-text {
//           position: relative;
//           z-index: 2;
//           text-align: center;
//           animation: neonText 3s ease-in-out infinite alternate;
//         }

//         @keyframes neonText {
//           0% { color: #ff416c; text-shadow: 0 0 5px #ff416c, 0 0 10px #ff4b2b; }
//           50% { color: #ff4b2b; text-shadow: 0 0 15px #ff416c, 0 0 30px #ff4b2b; }
//           100% { color: #ff416c; text-shadow: 0 0 25px #ff416c, 0 0 50px #ff4b2b; }
//         }

//         .floating-icons-left span {
//           position: absolute;
//           font-size: 30px;
//           animation: floatLeftIcons 5s ease-in-out infinite;
//           color: #fff;
//         }

//         @keyframes floatLeftIcons {
//           0% { transform: translateY(0); }
//           50% { transform: translateY(20px); }
//           100% { transform: translateY(0); }
//         }

//         .right-panel {
//           flex: 1;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           background: #0f0f0f;
//           position: relative;
//         }

//         .login-card {
//           background: #111;
//           padding: 50px;
//           border-radius: 20px;
//           width: 400px;
//           box-shadow: 0 0 40px #ff4b2b, 0 0 60px #ff416c;
//           border: 2px solid #ff416c;
//           position: relative;
//           z-index: 1;
//         }

//         .login-card h2 { color: #fff; text-align: center; margin-bottom: 30px; font-weight: 700; }

//         .login-card input {
//           width: 100%; padding: 14px 20px; margin-bottom: 20px;
//           border-radius: 12px; border: none; outline: none;
//           background: #1c1c1c; color: #fff; font-size: 16px;
//           transition: 0.3s;
//         }

//         .login-card input::placeholder { color: #aaa; }
//         .login-card input:focus { background: #222; box-shadow: 0 0 10px #ff4b2b, 0 0 20px #ff416c; }

//         .login-btn {
//           width: 100%; padding: 14px; font-size: 18px; font-weight: 700;
//           color: #fff; background: linear-gradient(90deg, #ff416c, #ff4b2b);
//           border: none; border-radius: 12px; cursor: pointer; transition: 0.3s;
//           box-shadow: 0 5px 20px rgba(255,65,108,0.5);
//         }

//         .login-btn:hover { transform: scale(1.05); box-shadow: 0 0 30px #ff416c, 0 0 40px #ff4b2b; }

//         .register-text { margin-top: 20px; font-size: 14px; text-align: center; color: #ccc; }
//         .register-text a { color: #ff416c; font-weight: 700; text-decoration: none; }
//         .register-text a:hover { text-decoration: underline; }

//         .login-message {
//           background: rgba(0,255,0,0.2);
//           color: #0f0; padding: 10px; border-radius: 10px;
//           margin-bottom: 20px; animation: floatUp 2s ease-out forwards; text-align: center;
//         }

//         @keyframes floatUp { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(-20px); opacity: 0; } }

//         .gym-icons {
//           position: absolute; top: 20px; left: 0; right: 0; display: flex;
//           justify-content: space-around; font-size: 24px; pointer-events: none;
//           animation: floatIcons 6s ease-in-out infinite;
//         }

//         .gym-icons span { animation: glow 2s infinite alternate; }
//         @keyframes glow { 0% { text-shadow: 0 0 5px #ff416c, 0 0 15px #ff4b2b; } 100% { text-shadow: 0 0 20px #ff416c, 0 0 40px #ff4b2b; } }
//         @keyframes floatIcons { 0% { transform: translateY(0); } 50% { transform: translateY(15px); } 100% { transform: translateY(0); } }

//       `}</style>

//       {/* Left panel with enhanced focus */}
//       <div className="left-panel">
//         <div className="hero-text">Push Your Limits 💪</div>
       
//       </div>

//       <div className="right-panel">
//         <div className="login-card">
//           <h2>Login</h2>
//           {message && <div className="login-message">{message}</div>}
//           <form onSubmit={handleSubmit}>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//             />
//             <button className="login-btn" type="submit">Login</button>
//           </form>
//           <p className="register-text">
//             Don't have an account? <a href="/register">Register</a>
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Login;
