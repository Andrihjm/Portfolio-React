
import { useState } from "react";

// Image
import Logo from "../assets/Logo.png";


function Baner({ children }) {


    // Munculin Pop-Up Modal
  const [ modal, setModal ] = useState(false);

  const openModal = () => {
    setModal(true)
  }


  return (
    <>
      <div className="container mx-auto sticky z-50">
        <div className="fixed container flex justify-between items-center py-4 backdrop-blur-lg rounded-b-2xl">
          <img
              src={Logo}
              className="w-56"
          />
          {modal && 
            <NestedModal closeModal={() => setModal(false)} />
          }
            { children }
        </div>
      </div>
    </>
  );
}

export default Baner;
