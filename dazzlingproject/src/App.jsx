import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Homepage from "./pages/Home";
import Gallerypage from "./pages/Home/Gallery";
import Shortcodespage from "./pages/Home/Shortcodes";
import Aboutpage from "./pages/Home/About";
import Languagespage from "./pages/Home/Languagess";


function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>  
        <Route path="/Gallery" element={<Gallerypage/>}/>  
        <Route path="/Shortcodes" element={<Shortcodespage/>}/>  
        <Route path="/About" element={<Aboutpage/>}/> 
        <Route path="/Languages" element={<Languagespage/>}/>  
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
