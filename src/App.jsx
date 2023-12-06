// Component
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Testimoni from "./components/Testimoni";
import Footer from "./components/Footer";
import Baner from "./components/Baner";
import Hobi from "./components/Hobi";
import Galeri from "./components/Galeri";

function App() {
  return (
    <div>
      <Nav />
      <div className="bg-bgimg bg-no-repeat bg-cover min-h-screen overflow-hidden bg-black">
        <Baner />
        <Home />
        <About />
        <Hobi />
        <Galeri />
        <Testimoni />
        <Footer />
      </div>
    </div>
  );
}

export default App;
