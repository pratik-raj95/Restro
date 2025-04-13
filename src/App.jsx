import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Toplist from "./components/Toplist/Toplist";
import BgImage from "./assets/2.png"; // ✅ Import the image
import Banner from "./components/Banner/Banner";
import Ourservices from "./components/ourservices/ourservices";

const bgStyle = {
  backgroundImage: `url(${BgImage})`, // ✅ Use imported image directly
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function App() {
  return (
    <div style={bgStyle} className="overflow-x-hidden min-h-screen">
      <div className="min-h-screen bg-white/50 backdrop-blur-xl">
        <Navbar />
        <Header />
        <Toplist />
        <Banner />
        <Ourservices />
       
      </div>
    </div>
  );
}

export default App;
