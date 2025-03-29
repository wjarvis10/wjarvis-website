import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Business from "./components/Business";

function App() {
  return (
    <Router>
      <div className="bg-white text-black font-sans">
        <Header />
        <main className="px-6 md:px-16 max-w-screen-xl mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <About />
                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route path="/business" element={<Business />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
