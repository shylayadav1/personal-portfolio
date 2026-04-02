import "bootstrap/dist/css/bootstrap.min.css"; // Keep CSS at the top
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import  NavBar  from "./components/NavBar";

function App() {
  return (
    <div
      className="bg-dark text-light overflow-x-hidden position-relative"
      style={{ zIndex: 2 }}
    >
      <NavBar />
      {/* Navigation Bar */}
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Intro Section */}
      <About />

      {/* 3. Professional Timeline */}
      <Experience />

      {/* 4. Tech Stack */}
      <Skills />
    </div>
  );
}

export default App;
