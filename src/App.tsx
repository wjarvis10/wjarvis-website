import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-white text-black font-sans">
      <Header />
      <main className="px-6 md:px-16 max-w-screen-xl mx-auto">
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
