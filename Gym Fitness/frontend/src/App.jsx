import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homelayout1 from "../components/layout/Homelayout"
import Loginpage from "../components/Home/Login/login"

import Dashboard from "../components/Admin"
import IndexPage from "../components/userpanel"
import Aboutpage from "../components/userpanel/about"
import CoursePage from "../components/userpanel/Course"
import Gallerypage from "../components/userpanel/Gallery"
import Blogpage from "../components/userpanel/Blog"
import Contactpage from "../components/userpanel/contact"
import Pricepage from "../components/userpanel/price"
import Adminpage from "../components/Admin/Adminpage"

const App =()=>{
return(
<BrowserRouter>

<Routes>
    {/* <Route path='/' element={<AdminLayout></AdminLayout>}></Route> */}
    <Route path='/user' element={<Homelayout1></Homelayout1>}></Route>
    <Route path='/Login' element={<Loginpage></Loginpage>}></Route>
    <Route path='/Admin' element={<Dashboard></Dashboard>}></Route>

    {/* Frontend routes*/}
    <Route path='/' element={<IndexPage></IndexPage>}></Route>
    <Route path='/about' element={<Aboutpage></Aboutpage>}></Route>
    <Route path='/course' element={<CoursePage></CoursePage>}></Route>
    <Route path='/price' element={<Pricepage></Pricepage>}></Route>
    <Route path='/gallery' element={<Gallerypage></Gallerypage>}></Route>
    <Route path='/blog' element={<Blogpage></Blogpage>}></Route>
    <Route path='/contact' element={<Contactpage></Contactpage>}></Route>

        {/* Backend routes*/}

        <Route path='/Dashboard' element={<Adminpage></Adminpage>}></Route>
</Routes>
</BrowserRouter>
)
}


export default App
