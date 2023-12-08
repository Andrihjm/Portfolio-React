import { Outlet } from "react-router-dom";

// Component
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <div className="bg-bgimg bg-no-repeat bg-cover min-h-screen overflow-hidden bg-black">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
