// import React, { useState, useEffect } from "react";
// import {
//   DashboardOutlined,
//   UserOutlined,
//   BarChartOutlined,
//   TeamOutlined,
//   FireOutlined,
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   SearchOutlined,
//   BellOutlined,
//   BulbOutlined,
// } from "@ant-design/icons";
// import { Layout, Menu, Input, Card, Row, Col, Badge, Avatar, Switch } from "antd";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";
// // import "antd/dist/reset.css";
// // import "./Adminpage.css";
// import "antd/dist/reset.css"
// import "./index"

// const { Header, Content, Footer, Sider } = Layout;

// const menuItems = [
//   { key: "1", icon: <DashboardOutlined />, label: "Dashboard" },
//   { key: "2", icon: <UserOutlined />, label: "Members" },
//   { key: "3", icon: <FireOutlined />, label: "Workout Plans" },
//   { key: "4", icon: <TeamOutlined />, label: "Trainers" },
//   { key: "5", icon: <BarChartOutlined />, label: "Analytics" },
// ];

// const cardData = [
//   { title: "Total Members", value: 1240, color: ["#ff4d4f", "#800000"], icon: <UserOutlined /> },
//   { title: "Trainers", value: 58, color: ["#00aaff", "#003366"], icon: <TeamOutlined /> },
//   { title: "Daily Check-ins", value: 320, color: ["#00cc66", "#004d26"], icon: <FireOutlined /> },
//   { title: "Revenue", value: 18500, color: ["#ffaa00", "#663d00"], icon: <BarChartOutlined /> },
// ];

// const lineData = [
//   { day: "Mon", checkins: 200, revenue: 1200 },
//   { day: "Tue", checkins: 250, revenue: 1800 },
//   { day: "Wed", checkins: 300, revenue: 2200 },
//   { day: "Thu", checkins: 280, revenue: 2000 },
//   { day: "Fri", checkins: 320, revenue: 2500 },
//   { day: "Sat", checkins: 400, revenue: 3200 },
//   { day: "Sun", checkins: 350, revenue: 2900 },
// ];

// const pieData = [
//   { name: "Cardio", value: 400, color: "#ff4d4f" },
//   { name: "Strength", value: 300, color: "#00cc66" },
//   { name: "Yoga", value: 200, color: "#00aaff" },
//   { name: "Others", value: 100, color: "#ffaa00" },
// ];

// const Adminpage = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [counters, setCounters] = useState([0, 0, 0, 0]);
//   const [darkMode, setDarkMode] = useState(true);

//   // Animated counters
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounters((prev) =>
//         prev.map((val, idx) => {
//           const target = cardData[idx].value;
//           if (val < target) return val + Math.ceil(target / 100);
//           return target;
//         })
//       );
//     }, 20);
//     return () => clearInterval(interval);
//   }, []);

//   // Theme colors
//   const themeStyles = darkMode
//     ? {
//         layoutBg: "#0a0a0a",
//         sidebarBg: "rgba(0,0,0,0.85)",
//         headerBg: "rgba(0,0,0,0.55)",
//         cardText: "#fff",
//         cardBgAlpha: "rgba(255,255,255,0.05)",
//         textColor: "#eee",
//       }
//     : {
//         layoutBg: "#f5f5f5",
//         sidebarBg: "#fff",
//         headerBg: "#fff",
//         cardText: "#000",
//         cardBgAlpha: "rgba(0,0,0,0.03)",
//         textColor: "#333",
//       };

//   return (
//     <Layout style={{ minHeight: "100vh", fontFamily: "'Poppins', sans-serif", background: themeStyles.layoutBg, transition: "all 0.5s" }}>
//       {/* SIDEBAR */}
// <Sider
//   collapsible
//   collapsed={collapsed}
//   onCollapse={setCollapsed}
//   style={{
//     background: themeStyles.sidebarBg,
//     backdropFilter: "blur(12px)",
//     borderRight: "1px solid rgba(255,255,255,0.1)",
//     transition: "all 0.5s",
//   }}
// >
//   {/* LOGO BOX */}
//   <div
//     className="logo"
//     style={{
//       height: 90,
//       margin: 12,
//       borderRadius: 12,
//       background: darkMode
//         ? "linear-gradient(135deg, #ff1a1a, #660000)"
//         : "linear-gradient(135deg, #ff4d4f, #ffa0a0)",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       boxShadow: "0 4px 20px rgba(255,0,0,0.3)",
//       transition: "0.5s",
//     }}
//   >
//     <img
//       src="/assets/img/logo/logo2_footer.png"         // <-- apna logo path yahan set karo
//       alt="Logo"
//       style={{
//         width: collapsed ? "38px" : "55px",   // collapse → small, expanded → big
//         height: "100px",width:"100px",
//         transition: "0.5s",
//         filter: "drop-shadow(0 0 6px rgba(255,255,255,0.6))",
//       }}
//     />
//   </div>

//   {/* SIDE MENU */}
//   <Menu
//     theme={darkMode ? "dark" : "light"}
//     mode="inline"
//     items={menuItems}
//     style={{
//       background: "transparent",
//       fontSize: 16,
//       borderRadius: 12,
//       transition: "all 0.5s",
//     }}
//   />
// </Sider>

//       {/* MAIN LAYOUT */}
//       <Layout>
//         {/* HEADER */}
//         <Header
//           style={{
//             background: themeStyles.headerBg,
//             padding: "0 20px",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             backdropFilter: "blur(12px)",
//             borderBottom: darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid #ccc",
//             transition: "all 0.5s",
//           }}
//         >
//           <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
//             {collapsed ? (
//               <MenuUnfoldOutlined
//                 style={{ fontSize: 22, color: "#ff4d4f", cursor: "pointer" }}
//                 onClick={() => setCollapsed(false)}
//               />
//             ) : (
//               <MenuFoldOutlined
//                 style={{ fontSize: 22, color: "#ff4d4f", cursor: "pointer" }}
//                 onClick={() => setCollapsed(true)}
//               />
//             )}

//             <h2
//               style={{
//                 color: "#ff4d4f",
//                 margin: 0,
//                 letterSpacing: 2,
//                 fontSize: "1.5rem",
//                 fontWeight: "700",
//                 textTransform: "uppercase",
//               }}

              
//             >
//               Gym Dashboard
//             </h2>
//           </div>

//           <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
//             <Input
//               placeholder="Search members, trainers..."
//               prefix={<SearchOutlined />}
//               style={{
//                 width: "260px",
//                 maxWidth: "50vw",
//                 background: darkMode ? "#111" : "#eee",
//                 border: "1px solid #333",
//                 borderRadius: 25,
//                 color: darkMode ? "#fff" : "#333",
//                 transition: "all 0.5s",
//                 fontFamily: "'Poppins', sans-serif",
//               }}
//             />

//             <Badge count={5} size="small">
//               <BellOutlined style={{ fontSize: 22, color: "#ff4d4f", cursor: "pointer" }} />
//             </Badge>

//             <Avatar style={{ backgroundColor: "#ff4d4f", fontWeight: "bold", cursor: "pointer" }}>A</Avatar>

//             <Switch
//               checkedChildren={<BulbOutlined />}
//               unCheckedChildren={<BulbOutlined />}
//               checked={darkMode}
//               onChange={() => setDarkMode(!darkMode)}
//               style={{ marginLeft: 10 }}
//             />
//           </div>
//         </Header>

//         {/* CONTENT */}
//         <Content style={{ margin: "20px 16px" }}>
//           {/* CARDS */}
//           <Row gutter={[16, 16]}>
//             {cardData.map((card, idx) => (
//               <Col key={idx} xs={24} sm={12} md={12} lg={6}>
//                 <Card
//                   hoverable
//                   style={{
//                     background: `linear-gradient(135deg, ${card.color[0]}, ${card.color[1]})`,
//                     color: "#fff",
//                     borderRadius: 18,
//                     boxShadow: `0 10px 25px rgba(255,0,0,0.3)`,
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     textAlign: "center",
//                     transition: "all 0.5s",
//                     cursor: "pointer",
//                   }}
//                   className="card-hover"
//                 >
//                   <div style={{ fontSize: 30, marginBottom: 8 }}>{card.icon}</div>
//                   <h3 style={{ fontWeight: "600" }}>{card.title}</h3>
//                   <h1 className="animated-counter" style={{ fontSize: 40, fontWeight: "700" }}>
//                     {counters[idx]}
//                   </h1>
//                 </Card>
//               </Col>
//             ))}
//           </Row>

//           {/* Analytics Section */}
//           <div
//             style={{
//               marginTop: 25,
//               padding: 25,
//               borderRadius: 18,
//               border: darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid #ccc",
//               backdropFilter: "blur(12px)",
//               color: themeStyles.textColor,
//               background: themeStyles.cardBgAlpha,
//               transition: "all 0.5s",
//             }}
//           >
//             <h2 style={{ color: "#ff4d4f", fontWeight: "700", marginBottom: 20 }}>Performance Overview</h2>

//             <Row gutter={[24, 24]}>
//               <Col xs={24} md={16}>
//                 <Card
//                   style={{
//                     background: darkMode ? "#111" : "#fff",
//                     borderRadius: 18,
//                     boxShadow: "0 10px 25px rgba(255,0,0,0.3)",
//                   }}
//                 >
//                   <h3 style={{ color: "#ff4d4f", marginBottom: 15 }}>Weekly Check-ins & Revenue</h3>
//                   <ResponsiveContainer width="100%" height={250}>
//                     <LineChart data={lineData}>
//                       <XAxis dataKey="day" stroke={darkMode ? "#fff" : "#333"} />
//                       <YAxis stroke={darkMode ? "#fff" : "#333"} />
//                       <Tooltip contentStyle={{ backgroundColor: darkMode ? "#222" : "#f0f0f0", borderRadius: 10 }} />
//                       <Line type="monotone" dataKey="checkins" stroke="#ff4d4f" strokeWidth={3} />
//                       <Line type="monotone" dataKey="revenue" stroke="#00cc66" strokeWidth={3} />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </Card>
//               </Col>

//               <Col xs={24} md={8}>
//                 <Card
//                   style={{
//                     background: darkMode ? "#111" : "#fff",
//                     borderRadius: 18,
//                     boxShadow: "0 10px 25px rgba(255,0,0,0.3)",
//                     textAlign: "center",
//                     paddingTop: 15,
//                   }}
//                 >
//                   <h3 style={{ color: "#ff4d4f", marginBottom: 15 }}>Workout Distribution</h3>
//                   <ResponsiveContainer width="100%" height={250}>
//                     <PieChart>
//                       <Pie
//                         data={pieData}
//                         dataKey="value"
//                         nameKey="name"
//                         cx="50%"
//                         cy="50%"
//                         outerRadius={80}
//                         label
//                       >
//                         {pieData.map((entry, index) => (
//                           <Cell key={`cell-${index}`} fill={entry.color} />
//                         ))}
//                       </Pie>
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </Card>
//               </Col>
//             </Row>
//           </div>
//         </Content>

//         {/* FOOTER */}
//         <Footer
//           style={{
//             textAlign: "center",
//             background: darkMode ? "#000" : "#f5f5f5",
//             color: darkMode ? "#777" : "#333",
//             borderTop: darkMode ? "1px solid #222" : "1px solid #ccc",
//             padding: 15,
//             fontFamily: "'Poppins', sans-serif",
//             transition: "all 0.5s",
//           }}
//         >
//           <span style={{ color: "#ff4d4f", fontWeight: "600" }}>Fitness Gym Tracker</span> © {new Date().getFullYear()}
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };

// export default Adminpage;



import React, { useState, useEffect } from "react";
import {
  DashboardOutlined,
  UserOutlined,
  BarChartOutlined,
  TeamOutlined,
  FireOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  BellOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Input, Card, Row, Col, Badge, Avatar, Switch } from "antd";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { useNavigate } from "react-router-dom";   // ⭐ ROUTER IMPORT

import "antd/dist/reset.css";
import "./index";
import { Contact, User2Icon } from "lucide-react";

const { Header, Content, Footer, Sider } = Layout;

/* ⭐ MENU ITEMS WITH PATHS */
const menuItems = [
  { key: "1", icon: <DashboardOutlined />, label: "Dashboard", path: "/admin/dashboard" },
  { key: "2", icon: <UserOutlined />, label: "Courses", path: "/course/Admin" },
  { key: "3", icon: <FireOutlined />, label: "Workout Plans", path: "/admin/workout-plans" },
  { key: "4", icon: <TeamOutlined />, label: "Trainers", path: "/admin/trainers" },
  { key: "5", icon: <BarChartOutlined />, label: "Analytics", path: "/admin/analytics" },
  { key: "6", icon: <User2Icon />, label: "User Contacts", path: "/contact-admin" },
];

const cardData = [
  { title: "Total Members", value: 1240, color: ["#ff4d4f", "#800000"], icon: <UserOutlined /> },
  { title: "Trainers", value: 58, color: ["#00aaff", "#003366"], icon: <TeamOutlined /> },
  { title: "Daily Check-ins", value: 320, color: ["#00cc66", "#004d26"], icon: <FireOutlined /> },
  { title: "Revenue", value: 18500, color: ["#ffaa00", "#663d00"], icon: <BarChartOutlined /> },
];

const lineData = [
  { day: "Mon", checkins: 200, revenue: 1200 },
  { day: "Tue", checkins: 250, revenue: 1800 },
  { day: "Wed", checkins: 300, revenue: 2200 },
  { day: "Thu", checkins: 280, revenue: 2000 },
  { day: "Fri", checkins: 320, revenue: 2500 },
  { day: "Sat", checkins: 400, revenue: 3200 },
  { day: "Sun", checkins: 350, revenue: 2900 },
];

const pieData = [
  { name: "Cardio", value: 400, color: "#ff4d4f" },
  { name: "Strength", value: 300, color: "#00cc66" },
  { name: "Yoga", value: 200, color: "#00aaff" },
  { name: "Others", value: 100, color: "#ffaa00" },
];

const Adminpage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [darkMode, setDarkMode] = useState(true);

  const navigate = useNavigate();   // ⭐ NAVIGATE INITIALIZED

  /* ⭐ MENU CLICK HANDLER */
  const handleMenuClick = (e) => {
    const selected = menuItems.find((item) => item.key === e.key);
    if (selected) navigate(selected.path);
  };

  // Animated Counter Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) =>
        prev.map((val, idx) => {
          const target = cardData[idx].value;
          if (val < target) return val + Math.ceil(target / 100);
          return target;
        })
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // THEME STYLES
  const themeStyles = darkMode
    ? {
        layoutBg: "#0a0a0a",
        sidebarBg: "rgba(0,0,0,0.85)",
        headerBg: "rgba(0,0,0,0.55)",
        cardText: "#fff",
        cardBgAlpha: "rgba(255,255,255,0.05)",
        textColor: "#eee",
      }
    : {
        layoutBg: "#f5f5f5",
        sidebarBg: "#fff",
        headerBg: "#fff",
        cardText: "#000",
        cardBgAlpha: "rgba(0,0,0,0.03)",
        textColor: "#333",
      };

  return (
    <Layout
      style={{
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        background: themeStyles.layoutBg,
        transition: "all 0.5s",
      }}
    >
      {/* SIDEBAR */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        style={{
          background: themeStyles.sidebarBg,
          backdropFilter: "blur(12px)",
          borderRight: "1px solid rgba(255,255,255,0.1)",
          transition: "all 0.5s",
        }}
      >
        {/* LOGO */}
        <div
          className="logo"
          style={{
            height: 90,
            margin: 12,
            borderRadius: 12,
            background: darkMode
              ? "linear-gradient(135deg, #ff1a1a, #660000)"
              : "linear-gradient(135deg, #ff4d4f, #ffa0a0)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(255,0,0,0.3)",
            transition: "0.5s",
          }}
        >
          <img
            src="/assets/img/logo/logo2_footer.png"
            alt="Logo"
            style={{
              width: collapsed ? "38px" : "55px",
              height: "100px",
              // width: "100px",
              transition: "0.5s",
              filter: "drop-shadow(0 0 6px rgba(255,255,255,0.6))",
            }}
          />
        </div>

        {/* ⭐ SIDEBAR MENU WITH LINKS */}
        <Menu
          theme={darkMode ? "dark" : "light"}
          mode="inline"
          items={menuItems}
          onClick={handleMenuClick}
          style={{
            background: "transparent",
            fontSize: 16,
            borderRadius: 12,
            transition: "all 0.5s",
          }}
        />
      </Sider>

      {/* MAIN LAYOUT */}
      <Layout>
        {/* HEADER */}
        <Header
          style={{
            background: themeStyles.headerBg,
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backdropFilter: "blur(12px)",
            borderBottom: darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid #ccc",
            transition: "all 0.5s",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
            {collapsed ? (
              <MenuUnfoldOutlined
                style={{ fontSize: 22, color: "#ff4d4f", cursor: "pointer" }}
                onClick={() => setCollapsed(false)}
              />
            ) : (
              <MenuFoldOutlined
                style={{ fontSize: 22, color: "#ff4d4f", cursor: "pointer" }}
                onClick={() => setCollapsed(true)}
              />
            )}

            <h2
              style={{
                color: "#ff4d4f",
                margin: 0,
                letterSpacing: 2,
                fontSize: "1.5rem",
                fontWeight: "700",
                textTransform: "uppercase",
              }}
            >
              Gym Dashboard
            </h2>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
            <Input
              placeholder="Search members, trainers..."
              prefix={<SearchOutlined />}
              style={{
                width: "260px",
                maxWidth: "50vw",
                background: darkMode ? "#111" : "#eee",
                border: "1px solid #333",
                borderRadius: 25,
                color: darkMode ? "#fff" : "#333",
                transition: "all 0.5s",
                fontFamily: "'Poppins', sans-serif",
              }}
            />

            <Badge count={5} size="small">
              <BellOutlined style={{ fontSize: 22, color: "#ff4d4f", cursor: "pointer" }} />
            </Badge>

            <Avatar style={{ backgroundColor: "#ff4d4f", fontWeight: "bold", cursor: "pointer" }}>
              A
            </Avatar>

            <Switch
              checkedChildren={<BulbOutlined />}
              unCheckedChildren={<BulbOutlined />}
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              style={{ marginLeft: 10 }}
            />
          </div>
        </Header>

        {/* CONTENT */}
        <Content style={{ margin: "20px 16px" }}>
          {/* CARDS */}
          <Row gutter={[16, 16]}>
            {cardData.map((card, idx) => (
              <Col key={idx} xs={24} sm={12} md={12} lg={6}>
                <Card
                  hoverable
                  style={{
                    background: `linear-gradient(135deg, ${card.color[0]}, ${card.color[1]})`,
                    color: "#fff",
                    borderRadius: 18,
                    boxShadow: `0 10px 25px rgba(255,0,0,0.3)`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    transition: "all 0.5s",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ fontSize: 30, marginBottom: 8 }}>{card.icon}</div>
                  <h3 style={{ fontWeight: "600" }}>{card.title}</h3>
                  <h1 style={{ fontSize: 40, fontWeight: "700" }}>{counters[idx]}</h1>
                </Card>
              </Col>
            ))}
          </Row>

          {/* ANALYTICS SECTION */}
          <div
            style={{
              marginTop: 25,
              padding: 25,
              borderRadius: 18,
              border:
                darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid #ccc",
              backdropFilter: "blur(12px)",
              color: themeStyles.textColor,
              background: themeStyles.cardBgAlpha,
              transition: "all 0.5s",
            }}
          >
            <h2 style={{ color: "#ff4d4f", fontWeight: "700", marginBottom: 20 }}>
              Performance Overview
            </h2>

            <Row gutter={[24, 24]}>
              <Col xs={24} md={16}>
                <Card
                  style={{
                    background: darkMode ? "#111" : "#fff",
                    borderRadius: 18,
                    boxShadow: "0 10px 25px rgba(255,0,0,0.3)",
                  }}
                >
                  <h3 style={{ color: "#ff4d4f", marginBottom: 15 }}>
                    Weekly Check-ins & Revenue
                  </h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={lineData}>
                      <XAxis
                        dataKey="day"
                        stroke={darkMode ? "#fff" : "#333"}
                      />
                      <YAxis stroke={darkMode ? "#fff" : "#333"} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: darkMode ? "#222" : "#f0f0f0",
                          borderRadius: 10,
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="checkins"
                        stroke="#ff4d4f"
                        strokeWidth={3}
                      />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#00cc66"
                        strokeWidth={3}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Card>
              </Col>

              <Col xs={24} md={8}>
                <Card
                  style={{
                    background: darkMode ? "#111" : "#fff",
                    borderRadius: 18,
                    boxShadow: "0 10px 25px rgba(255,0,0,0.3)",
                    textAlign: "center",
                    paddingTop: 15,
                  }}
                >
                  <h3 style={{ color: "#ff4d4f", marginBottom: 15 }}>
                    Workout Distribution
                  </h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </Card>
              </Col>
            </Row>
          </div>
        </Content>

        {/* FOOTER */}
        <Footer
          style={{
            textAlign: "center",
            background: darkMode ? "#000" : "#f5f5f5",
            color: darkMode ? "#777" : "#333",
            borderTop: darkMode ? "1px solid #222" : "1px solid #ccc",
            padding: 15,
            fontFamily: "'Poppins', sans-serif",
            transition: "all 0.5s",
          }}
        >
          <span style={{ color: "#ff4d4f", fontWeight: "600" }}>
            Fitness Gym Tracker
          </span>{" "}
          © {new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Adminpage;
