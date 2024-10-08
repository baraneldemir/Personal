
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import {Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      
      <Route path="/" element={<LandingPage/>}/>
      
    </Routes>
    <Footer />
    </>
  );
}

export default App;
