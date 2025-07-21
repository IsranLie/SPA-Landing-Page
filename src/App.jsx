import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import StatsSection from "./components/StatsSection";

function App() {
  return (
    <div className="font-poppins">
      <Header />
      <main>
        <Home />
        <StatsSection />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
