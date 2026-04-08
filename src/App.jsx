import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import ErrorPage from "./pages/ErrorPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./pages/Dashboard/Project";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";

function App() {
  return (
    <div className="bg-background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="projects/:id" element={<Project />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
