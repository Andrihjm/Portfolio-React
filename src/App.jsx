// Component
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Slide from "./components/Slide";
import Footer from "./components/Footer";
import Baner from "./components/Baner";
// import Hobi from "./components/Hobi";
import Galeri from "./components/Galeri";
import dataSlide from "./data/dataSlide";

function App() {
  return (
    <div>
      <Nav />
      <div className="bg-bgimg bg-no-repeat bg-cover min-h-screen overflow-hidden bg-black">
        <Baner />
        <Home />
        <About />
        {/* <Hobi /> */}
        <Galeri />
        <Slide data={dataSlide} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
