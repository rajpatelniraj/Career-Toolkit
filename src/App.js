import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import JobDetails from "./pages/JobDetails";
import List from "./pages/List";
import Dashboard from "./AdminDashboard/adminpages/Dashboard";
import FilteListCat from "./pages/FilteListCat";
import CategoryPage from "./pages/CategoryPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";
import Success from './pages/Success'
import { CatPage } from "./AdminDashboard/adminpages/CatPage";
import { NewCategory } from "./AdminDashboard/Component/NewCategory";
import { EditCat } from "./AdminDashboard/adminpages/EditCat";
import { Newjob } from "./AdminDashboard/Component/NewJob";
import { AdminJobs } from "./AdminDashboard/adminpages/AdminJobs";
import { AllJobs } from "./AdminDashboard/adminpages/AllJobs";
import { Profile } from "./AdminDashboard/adminpages/Profile";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:id" element={<JobDetails />} />
          <Route path="/list" element={<List />} />
          <Route
            path="/filterlistcat/:catId/:name"
            element={<FilteListCat />}
          />

          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/loginuser" element={<LoginUser />} />
          <Route path="/success" element={<Success />} />
          <Route path="/registeruser" element={<RegisterUser />} />
          <Route path="/admincat" element={<CatPage />} />
          <Route path="/adminnewcat" element={<NewCategory />} />
          <Route path="/editcat/:cat/:id" element={<EditCat />} />
          <Route path="/newjob" element={<Newjob />} />
          <Route path="/adminjobs" element={<AdminJobs />} />
          <Route path="/alljob" element={<AllJobs />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

