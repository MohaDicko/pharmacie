import "./App.css";
import Home from "./component/pages/Home";
import ResponsiveAppBar from "./component/layout/header";
import Footer from "./component/layout/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./ThemeProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import  Login  from "./component/pages/Login";
import Dashboard from "./component/pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveAppBar onNavigate={scrollToSection} />
        {/* <ResponsiveAppBar /> */}
       
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
         
                <Route path="/Dashboard" element={<Dashboard />} />
              </Route>
            <Route path="/" element={<Home />} />
          </Routes>
        
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
