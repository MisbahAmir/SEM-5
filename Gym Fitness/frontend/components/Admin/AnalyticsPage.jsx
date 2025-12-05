import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const AnalyticsPage = () => {
  const lineRef = useRef(null);
  const barRef = useRef(null);
  const pieRef = useRef(null);

  // Initialize Charts
  useEffect(() => {
    // LINE CHART
    new Chart(lineRef.current, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Visitors",
            data: [420, 680, 520, 860, 730, 980, 650],
            borderColor: "#ff2b2b",
            backgroundColor: "rgba(255, 50, 50, 0.2)",
            tension: 0.4,
            borderWidth: 3,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: { ticks: { color: "#fff" } },
          y: { ticks: { color: "#fff" } },
        },
      },
    });

    // BAR CHART
    new Chart(barRef.current, {
      type: "bar",
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "Sales",
            data: [2400, 1398, 9800, 3908],
            backgroundColor: "#ff0000",
            borderRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: { ticks: { color: "#fff" } },
          y: { ticks: { color: "#fff" } },
        },
      },
    });

    // PIE CHART
    new Chart(pieRef.current, {
      type: "pie",
      data: {
        labels: ["Desktop", "Mobile", "Tablet"],
        datasets: [
          {
            data: [62, 28, 10],
            backgroundColor: ["#ff2b2b", "#ff5555", "#ff8888"],
          },
        ],
      },
      options: { responsive: true },
    });
  }, []);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🔥 Black & Red Analytics Dashboard</h1>

      <div style={styles.grid}>
        {/* Line Chart */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Visitors Trend</h3>
          <canvas ref={lineRef}></canvas>
        </div>

        {/* Bar Chart */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Monthly Sales</h3>
          <canvas ref={barRef}></canvas>
        </div>

        {/* Pie Chart */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>User Devices</h3>
          <canvas ref={pieRef}></canvas>
        </div>
      </div>
    </div>
  );
};

// ==========================
//     CSS (JS Styles)
// ==========================
const styles = {
  page: {
    background: "#0d0d0d",
    minHeight: "100vh",
    padding: "30px",
    color: "#fff",
    fontFamily: "Poppins, sans-serif",
  },
  title: {
    textAlign: "center",
    fontSize: "32px",
    color: "#ff2b2b",
    marginBottom: "40px",
    textShadow: "0 0 15px rgba(255,0,0,0.7)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "25px",
  },
  card: {
    background: "#1a1a1a",
    padding: "20px",
    borderRadius: "20px",
    boxShadow: "0 0 15px rgba(255,0,0,0.3)",
    border: "1px solid rgba(255,0,0,0.25)",
    transition: "0.3s",
  },
  cardTitle: {
    color: "#ff3b3b",
    fontSize: "18px",
    marginBottom: "15px",
    textShadow: "0 0 10px rgba(255,0,0,0.5)",
  },
};

export default AnalyticsPage;
