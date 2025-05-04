import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ComingSoon from "./pages/ComingSoon";
// import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;
