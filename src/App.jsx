

import { Outlet } from "react-router-dom";

// Component
import Nav from "./components/Nav";
import Baner from "./components/Baner";


function App() {
  return (
    <div>
      <Nav />
        <div className="bg-bgimg bg-no-repeat bg-cover min-h-screen overflow-hidden bg-black">
          <Baner />
          <Outlet />
        </div>
    </div>
  );
}

export default App;
