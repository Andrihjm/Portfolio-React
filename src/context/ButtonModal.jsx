
import { useState } from "react";

// Components 
import Modal1 from './modalRouterLanjut/Modal1'



function ButtonModal({ children }) {

        // Open Modal
    const [ modal, setModal ] = useState(false)

    const openModal = () => {
        setModal(true)
    }
 
  return (
    <div>
        <button
            onClick={openModal}
            className="text-sm btn py-2 px-9"
        >
            {children}
        </button>

        {modal && 
            <Modal1 closeModal={() => setModal(false)} />
        }
    </div>
  );
}

export default ButtonModal;
