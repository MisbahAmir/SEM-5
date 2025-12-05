import { BrowserRouter, Route, Routes } from "react-router-dom";



//import Dashboard from "../components/Admin";
import IndexPage from "../components/userpanel";
import Aboutpage from "../components/userpanel/about";
import CoursePage from "../components/userpanel/Course";
import Gallerypage from "../components/userpanel/Gallery";
import Blogpage from "../components/userpanel/Blog";
import Contactpage from "../components/userpanel/contact";
import Pricepage from "../components/userpanel/price";


import Register from "./pages/Register";
import Login from "./pages/Login";

import Homelayout from "../components/layout/Homelayout";
import ProtectedRoute from "../components/RouteProtected";
import Adminpage from "../components/Admin/Adminpage";

import AdminUsers from "../components/Admin/AdminWorkoutsPage";
import ContactAdmin from "../components/Admin/ContactAdmin";

import LandingPage from "../components/userpanel/landingpage";
import CourseAdmin from "../components/userpanel/CourseAdmin";
import AnalyticsPage from "../components/Admin/AnalyticsPage";




const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Frontend Routes */}
        <Route path="/land" element={<LandingPage />} />
        <Route path="/index" element={<IndexPage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/price" element={<Pricepage />} />
        <Route path="/gallery" element={<Gallerypage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/course/Admin" element={<CourseAdmin />} />


        {/* Public Auth Pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/loginuser" element={<Login />} />
        <Route path="/admin-users" element={<AdminUsers/>}></Route>


        <Route path="/contact-admin" element={<ContactAdmin/>} />

        
        <Route path="/admin-new" element={<Adminpage/>} />
        <Route path="/analytics" element={<AnalyticsPage />} />

{/* 
        <Route path="/loginnew" element={<Loginnew/>} />
        
        <Route path="/resgisternew" element={<Registernew/>} /> */}


        {/* USER PROTECTED */}
        <Route
          path="/user"
          element={
            <ProtectedRoute role="user">
              <Homelayout/>
            </ProtectedRoute>
          }
        />

        {/* ADMIN PROTECTED */}
        <Route
          path="/Admin"
          element={
            <ProtectedRoute role="admin">
              <Adminpage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Dashboard"
          element={
            <ProtectedRoute role="admin">
              <Adminpage></Adminpage>
            </ProtectedRoute>
          }
        />

        <Route path="/not-allowed" element={<h1>Access Denied ❌</h1>} />



  



      </Routes>
    </BrowserRouter>
  );
};

export default App;
