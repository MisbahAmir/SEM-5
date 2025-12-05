// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ContactAdmin = () => {
//   const [messages, setMessages] = useState([]);

//   // Fetch all messages from backend
//   const fetchMessages = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/contact");
//       setMessages(res.data);
//     } catch (err) {
//       console.log("Error fetching contacts:", err);
//     }
//   };

//   // Delete a message
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this message?")) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/contact/${id}`);
//       alert("Message deleted!");
//       fetchMessages(); // Refresh table
//     } catch (err) {
//       console.log("Delete Error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchMessages();
//   }, []);

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>📩 Contact Messages (Admin)</h1>

//       <table style={styles.table}>
//         <thead>
//           <tr>
//             <th style={styles.th}>Name</th>
//             <th style={styles.th}>Email</th>
//             <th style={styles.th}>Message</th>
//             <th style={styles.th}>Date</th>
//             <th style={styles.th}>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {messages.length === 0 ? (
//             <tr>
//               <td colSpan="5" style={styles.noData}>
//                 No messages found.
//               </td>
//             </tr>
//           ) : (
//             messages.map((msg) => (
//               <tr key={msg._id} style={styles.tr}>
//                 <td style={styles.td}>{msg.name}</td>
//                 <td style={styles.td}>{msg.email}</td>
//                 <td style={styles.td}>{msg.message}</td>
//                 <td style={styles.td}>
//                   {new Date(msg.createdAt).toLocaleString()}
//                 </td>
//                 <td style={styles.td}>
//                   <button
//                     style={styles.deleteBtn}
//                     onClick={() => handleDelete(msg._id)}
//                   >
//                     Delete ❌
//                   </button>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// // ------------------ STYLES (Black/Red Admin Theme) ------------------
// const styles = {
//   container: {
//     padding: "30px",
//     background: "#111",
//     minHeight: "100vh",
//     color: "#fff",
//   },
//   heading: {
//     textAlign: "center",
//     marginBottom: "30px",
//     color: "red",
//     fontSize: "32px",
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "collapse",
//     backgroundColor: "#1a1a1a",
//     borderRadius: "10px",
//     overflow: "hidden",
//   },
//   th: {
//     padding: "14px",
//     borderBottom: "2px solid red",
//     color: "red",
//     textAlign: "left",
//     background: "#000",
//   },
//   td: {
//     padding: "14px",
//     borderBottom: "1px solid #333",
//   },
//   tr: {
//     transition: "0.3s",
//   },
//   deleteBtn: {
//     background: "red",
//     color: "#fff",
//     border: "none",
//     padding: "8px 14px",
//     cursor: "pointer",
//     borderRadius: "5px",
//   },
//   noData: {
//     padding: "20px",
//     textAlign: "center",
//     color: "#bbb",
//   },
// };

// export default ContactAdmin;


import React, { useEffect, useState, useMemo, useRef } from "react";
import axios from "axios";

const ContactAdmin = () => {
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("card");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const containerRef = useRef(null);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/contact");
      setMessages(res.data);
    } catch (err) {
      console.log("Error fetching contacts:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/contact/${id}`);
      alert("Message deleted!");
      fetchMessages();
    } catch (err) {
      console.log("Delete Error:", err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const filteredMessages = useMemo(() => {
    return messages.filter(
      (msg) =>
        msg.name.toLowerCase().includes(search.toLowerCase()) ||
        msg.email.toLowerCase().includes(search.toLowerCase()) ||
        msg.message.toLowerCase().includes(search.toLowerCase())
    );
  }, [messages, search]);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentMessages = filteredMessages.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredMessages.length / itemsPerPage);

  const isRecent = (date) => {
    const messageTime = new Date(date).getTime();
    const now = new Date().getTime();
    return now - messageTime < 24 * 60 * 60 * 1000;
  };

  useEffect(() => {
    if (containerRef.current && viewMode === "card") {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [currentMessages, viewMode]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📬 Contact Messages</h1>

      {/* Controls */}
      <div style={styles.controls}>
        <input
          type="text"
          placeholder="Search messages..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchInput}
        />

        <div>
          <button
            onClick={() => setViewMode("card")}
            style={{
              ...styles.toggleBtn,
              background: viewMode === "card" ? "#ff1a1a" : "#222",
            }}
          >
            Card View
          </button>
          <button
            onClick={() => setViewMode("table")}
            style={{
              ...styles.toggleBtn,
              background: viewMode === "table" ? "#ff1a1a" : "#222",
            }}
          >
            Table View
          </button>
        </div>
      </div>

      {/* CARD VIEW */}
      <div
        ref={containerRef}
        style={{
          ...styles.grid,
          transition: "all 0.5s ease",
          opacity: viewMode === "card" ? 1 : 0,
          height: viewMode === "card" ? "auto" : 0,
          overflow: "auto",
        }}
      >
        {currentMessages.length === 0 ? (
          <div style={styles.noData}>😕 No messages found.</div>
        ) : (
          currentMessages.map((msg, idx) => (
            <div
              key={msg._id}
              style={{
                ...styles.card,
                background: isRecent(msg.createdAt)
                  ? "#330000"
                  : "#111",
                boxShadow: isRecent(msg.createdAt)
                  ? "0 6px 20px rgba(255,26,26,0.6)"
                  : "0 6px 20px rgba(0,0,0,0.5)",
              }}
            >
              <div style={styles.cardHeader}>
                <h3 style={styles.name}>{msg.name}</h3>
                <span style={styles.date}>
                  {new Date(msg.createdAt).toLocaleString()}
                </span>
              </div>
              <p style={styles.email}>{msg.email}</p>
              <p style={styles.message}>{msg.message}</p>
              <button
                style={styles.deleteBtn}
                onClick={() => handleDelete(msg._id)}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                Delete ❌
              </button>
            </div>
          ))
        )}
      </div>

      {/* TABLE VIEW */}
      <div
        style={{
          ...styles.tableWrapper,
          transition: "all 0.5s ease",
          opacity: viewMode === "table" ? 1 : 0,
          height: viewMode === "table" ? "auto" : 0,
          overflow: "hidden",
        }}
      >
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Message</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentMessages.length === 0 ? (
              <tr>
                <td colSpan="5" style={styles.noData}>
                  😕 No messages found.
                </td>
              </tr>
            ) : (
              currentMessages.map((msg, idx) => (
                <tr
                  key={msg._id}
                  style={{
                    ...styles.tr,
                    background: isRecent(msg.createdAt)
                      ? "#330000"
                      : "#1a1a1a",
                    boxShadow: isRecent(msg.createdAt)
                      ? "0 6px 20px rgba(255,26,26,0.5)"
                      : "none",
                  }}
                >
                  <td style={styles.td}>{msg.name}</td>
                  <td style={styles.td}>{msg.email}</td>
                  <td style={styles.td}>{msg.message}</td>
                  <td style={styles.td}>{new Date(msg.createdAt).toLocaleString()}</td>
                  <td style={styles.td}>
                    <button style={styles.deleteBtn} onClick={() => handleDelete(msg._id)}>
                      Delete ❌
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div style={styles.pagination}>
          <button
            style={styles.pageBtn}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            ◀ Prev
          </button>
          <span style={styles.pageInfo}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            style={styles.pageBtn}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next ▶
          </button>
        </div>
      )}
    </div>
  );
};

// ------------------ BLACK & RED PREMIUM STYLES ------------------
const styles = {
  container: {
    minHeight: "100vh",
    padding: "50px 30px",
    background: "#0a0a0a",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize: "38px",
    marginBottom: "30px",
    color: "#ff1a1a",
    letterSpacing: "1px",
    fontWeight: "700",
    textShadow: "1px 1px 12px rgba(255,26,26,0.6)",
  },
  controls: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "25px",
    gap: "10px",
  },
  searchInput: {
    padding: "12px 16px",
    borderRadius: "12px",
    border: "none",
    background: "#222",
    color: "#fff",
    flexGrow: 1,
    minWidth: "200px",
  },
  toggleBtn: {
    padding: "10px 22px",
    marginLeft: "10px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    color: "#fff",
    fontWeight: "600",
    transition: "0.2s",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "20px 25px",
    borderRadius: "15px",
    transition: "all 0.3s ease",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  name: { fontSize: "20px", fontWeight: "600", color: "#ff4d4d" },
  date: { fontSize: "12px", color: "#bbb" },
  email: { fontSize: "14px", color: "#ccc", marginBottom: "10px" },
  message: { fontSize: "16px", color: "#ddd", marginBottom: "15px" },
  deleteBtn: {
    background: "#ff1a1a",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    cursor: "pointer",
    borderRadius: "10px",
    fontWeight: "600",
    transition: "all 0.2s ease",
  },
  tableWrapper: { overflowX: "auto", transition: "all 0.5s ease" },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "#111",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.7)",
  },
  th: {
    padding: "14px",
    borderBottom: "2px solid #ff1a1a",
    color: "#ff1a1a",
    textAlign: "left",
    background: "#111",
    fontWeight: "600",
  },
  td: { padding: "14px", borderBottom: "1px solid #333", verticalAlign: "middle" },
  tr: { transition: "all 0.3s ease" },
  noData: {
    gridColumn: "1/-1",
    textAlign: "center",
    fontSize: "18px",
    color: "#888",
    padding: "40px 20px",
    border: "2px dashed #444",
    borderRadius: "15px",
    background: "#111",
  },
  pagination: {
    marginTop: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
  },
  pageBtn: {
    padding: "8px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    background: "#222",
    color: "#fff",
    fontWeight: "600",
    transition: "0.2s",
  },
  pageInfo: { fontSize: "16px", color: "#bbb" },
};

export default ContactAdmin;
