// // src/components/admin/CourseAdmin.jsx
// import React, { useEffect, useState } from "react";

// const CourseAdmin = () => {
//   const [enrollments, setEnrollments] = useState([]);
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     const s = localStorage.getItem("courseEnrollments");
//     const c = localStorage.getItem("courseComments");
//     setEnrollments(s ? JSON.parse(s) : []);
//     setComments(c ? JSON.parse(c) : []);
//   }, []);

//   const deleteEnrollment = (i) => {
//     if (!window.confirm("Delete this enrollment?")) return;
//     const updated = [...enrollments];
//     updated.splice(i, 1);
//     setEnrollments(updated);
//     localStorage.setItem("courseEnrollments", JSON.stringify(updated));
//   };

//   const deleteComment = (i) => {
//     if (!window.confirm("Delete this comment?")) return;
//     const updated = [...comments];
//     updated.splice(i, 1);
//     setComments(updated);
//     localStorage.setItem("courseComments", JSON.stringify(updated));
//   };

//   return (
//     <div style={{ minHeight: "100vh", background: "#000", color: "#fff", padding: 24, fontFamily: "Poppins, sans-serif" }}>
//       <h1 style={{ color: "#ff1a1a" }}>Course Admin</h1>

//       <section style={{ marginTop: 18 }}>
//         <h2 style={{ fontSize: 20 }}>Enrollments</h2>
//         {enrollments.length === 0 ? <div style={{ color: "#bbb" }}>No enrollments yet.</div> : (
//           <div style={{ overflowX: "auto", marginTop: 10 }}>
//             <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 800 }}>
//               <thead>
//                 <tr style={{ textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
//                   <th style={{ padding: 8 }}>#</th>
//                   <th style={{ padding: 8 }}>Name</th>
//                   <th style={{ padding: 8 }}>Phone</th>
//                   <th style={{ padding: 8 }}>Course</th>
//                   <th style={{ padding: 8 }}>Days</th>
//                   <th style={{ padding: 8 }}>Timing</th>
//                   <th style={{ padding: 8 }}>When</th>
//                   <th style={{ padding: 8 }}>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {enrollments.map((e, i) => (
//                   <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
//                     <td style={{ padding: 8 }}>{i + 1}</td>
//                     <td style={{ padding: 8 }}>{e.name}</td>
//                     <td style={{ padding: 8 }}>{e.number}</td>
//                     <td style={{ padding: 8 }}>{e.course}</td>
//                     <td style={{ padding: 8 }}>{e.days}</td>
//                     <td style={{ padding: 8 }}>{e.timing}</td>
//                     <td style={{ padding: 8 }}>{new Date(e.createdAt).toLocaleString()}</td>
//                     <td style={{ padding: 8 }}>
//                       <button onClick={() => deleteEnrollment(i)} style={{ padding: "6px 12px", borderRadius: 8, background: "linear-gradient(90deg,#ff1a1a,#ff5555)", color: "#fff", border: "none", cursor: "pointer" }}>Delete</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </section>

//       <section style={{ marginTop: 30 }}>
//         <h2 style={{ fontSize: 20 }}>Comments / Reviews</h2>
//         {comments.length === 0 ? <div style={{ color: "#bbb" }}>No comments yet.</div> : (
//           <div style={{ display: "grid", gap: 8, marginTop: 10 }}>
//             {comments.map((c, i) => (
//               <div key={i} style={{ padding: 12, borderRadius: 8, background: "#111", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                 <div>
//                   <div style={{ fontWeight: 700 }}>{c.name} <span style={{ color: "#888", fontSize: 12 }}>({new Date(c.createdAt).toLocaleString()})</span></div>
//                   <div style={{ color: "#ddd", marginTop: 6 }}>{c.comment}</div>
//                 </div>
//                 <div>
//                   <button onClick={() => deleteComment(i)} style={{ padding: "6px 12px", borderRadius: 8, background: "rgba(255,0,0,0.12)", color: "#ffb3b3", border: "1px solid rgba(255,26,26,0.08)", cursor: "pointer" }}>Delete</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default CourseAdmin;




// src/components/admin/CourseAdmin.jsx
import React, { useEffect, useState } from "react";

const CourseAdmin = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const s = localStorage.getItem("courseEnrollments");
    const c = localStorage.getItem("courseComments");
    setEnrollments(s ? JSON.parse(s) : []);
    setComments(c ? JSON.parse(c) : []);
  }, []);

  const deleteEnrollment = (i) => {
    if (!window.confirm("Delete this enrollment?")) return;
    const updated = [...enrollments];
    updated.splice(i, 1);
    setEnrollments(updated);
    localStorage.setItem("courseEnrollments", JSON.stringify(updated));
  };

  const deleteComment = (i) => {
    if (!window.confirm("Delete this comment?")) return;
    const updated = [...comments];
    updated.splice(i, 1);
    setComments(updated);
    localStorage.setItem("courseComments", JSON.stringify(updated));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #000 0%, #0a0a0a 100%)",
        color: "#fff",
        padding: 30,
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Title */}
      <h1
        style={{
          color: "#fff",
          fontSize: 38,
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: 3,
          textShadow: "0 0 18px rgba(255,255,255,0.3), 0 0 25px rgba(255,0,0,0.35)",
          marginBottom: 25,
        }}
      >
        Course Admin Panel
      </h1>

      {/* ---- ENROLLMENTS SECTION ---- */}
      <section
        style={{
          background: "rgba(255,255,255,0.05)",
          padding: 25,
          borderRadius: 16,
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 0 30px rgba(255,0,0,0.15)",
        }}
      >
        <h2
          style={{
            fontSize: 24,
            fontWeight: 700,
            marginBottom: 16,
            color: "#fff",
          }}
        >
          Enrollments
        </h2>

        {enrollments.length === 0 ? (
          <div
            style={{
              color: "#ccc",
              padding: 18,
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            No enrollments yet.
          </div>
        ) : (
          <div style={{ overflowX: "auto", marginTop: 12 }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: 900,
                background: "rgba(255,255,255,0.02)",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "rgba(255,0,0,0.2)",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {["#", "Name", "Phone", "Course", "Days", "Timing", "When", "Action"].map(
                    (head, i) => (
                      <th
                        key={i}
                        style={{
                          padding: 14,
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#fff",
                          textTransform: "uppercase",
                          letterSpacing: 1,
                        }}
                      >
                        {head}
                      </th>
                    )
                  )}
                </tr>
              </thead>

              <tbody>
                {enrollments.map((e, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      transition: "0.3s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(ev) =>
                      (ev.currentTarget.style.background = "rgba(255,0,0,0.1)")
                    }
                    onMouseLeave={(ev) =>
                      (ev.currentTarget.style.background = "transparent")
                    }
                  >
                    <td style={{ padding: 12, color: "#fff" }}>{i + 1}</td>
                    <td style={{ padding: 12, color: "#fff" }}>{e.name}</td>
                    <td style={{ padding: 12, color: "#fff" }}>{e.number}</td>
                    <td style={{ padding: 12, color: "#fff" }}>{e.course}</td>
                    <td style={{ padding: 12, color: "#fff" }}>{e.days}</td>
                    <td style={{ padding: 12, color: "#fff" }}>{e.timing}</td>
                    <td style={{ padding: 12, color: "#ccc" }}>
                      {new Date(e.createdAt).toLocaleString()}
                    </td>
                    <td style={{ padding: 12 }}>
                      <button
                        onClick={() => deleteEnrollment(i)}
                        style={{
                          padding: "8px 16px",
                          borderRadius: 10,
                          background: "linear-gradient(90deg,#ff4d4d,#ff1a1a)",
                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                          fontWeight: 700,
                          boxShadow: "0 0 12px rgba(255,0,0,0.3)",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.boxShadow = "0 0 20px rgba(255,0,0,0.6)")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.boxShadow = "0 0 12px rgba(255,0,0,0.3)")
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* ---- COMMENTS SECTION ---- */}
      <section style={{ marginTop: 40 }}>
        <h2
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: "#fff",
            marginBottom: 16,
          }}
        >
          Comments / Reviews
        </h2>

        {comments.length === 0 ? (
          <div
            style={{
              color: "#bbb",
              padding: 18,
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            No comments yet.
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gap: 14,
              marginTop: 12,
            }}
          >
            {comments.map((c, i) => (
              <div
                key={i}
                style={{
                  padding: 18,
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 0 22px rgba(255,0,0,0.12)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(ev) => (ev.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(ev) => (ev.currentTarget.style.transform = "scale(1)")}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: "#fff" }}>
                    {c.name}
                    <span style={{ color: "#ccc", fontSize: 12, marginLeft: 6 }}>
                      ({new Date(c.createdAt).toLocaleString()})
                    </span>
                  </div>
                  <div style={{ color: "#eee", marginTop: 6 }}>{c.comment}</div>
                </div>

                <button
                  onClick={() => deleteComment(i)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 10,
                    background: "rgba(255,0,0,0.2)",
                    color: "#fff",
                    border: "1px solid rgba(255,0,0,0.35)",
                    cursor: "pointer",
                    fontWeight: 700,
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.background = "rgba(255,0,0,0.4)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.background = "rgba(255,0,0,0.2)")
                  }
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default CourseAdmin;
