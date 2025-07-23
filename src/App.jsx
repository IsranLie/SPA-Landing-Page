import "./index.css";
import Header from "./components/layouts/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <div className="font-poppins">
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
