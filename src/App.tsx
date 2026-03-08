import Hero from './components/Hero';
// import Experience from './components/Experience'; // Uncomment when ready
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    /* 'overflow-x-hidden' is critical here to kill that white space on the right.
       'position-relative' ensures your content sits on top of the fixed background.
    */
    <div className="bg-dark text-light overflow-x-hidden position-relative" style={{ zIndex: 2 }}>
      
      {/* 1. Hero Section (Your interactive name and title) */}
      <Hero />

      {/* 2. Future Sections
          As you build out your Amgen and Skima AI details, 
          you just drop them in here as components.
      */}
      {/* <Experience /> */}
      {/* <Projects /> */}
      {/* <Education /> */}

    </div>
  );
}

export default App;