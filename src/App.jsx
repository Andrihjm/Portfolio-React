// Component
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Testimoni from "./components/Testimoni";
import Footer from "./components/Footer";
import Baner from "./components/Baner";

function App() {
  return (
    <div>
      <Nav />
      <div className="bg-bgimg bg-no-repeat bg-cover min-h-screen overflow-hidden bg-black">
        <Baner />
        <Home />
        <About />
        <Testimoni />
        <Footer />
      </div>
    </div>
  );
}

export default App;
