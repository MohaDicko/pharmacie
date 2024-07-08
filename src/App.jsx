import "./App.css";
import Home from "./component/pages/Home";
import ResponsiveAppBar from "./component/layout/header";
import Footer from "./component/layout/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./ThemeProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar onNavigate={scrollToSection} />
        {/* <ResponsiveAppBar /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
