
import { useState } from "react";
import { Link } from "react-router-dom";

// Image
import Logo from "../assets/Logo.png";
import ButtonModal from "../context/ButtonModal";
import Button from "./Button";
// Icons
import { IoArrowUndo } from "react-icons/io5";


function Baner({ type }) {


  return (
    <>
      <div className="container mx-auto sticky z-50">
        <div className="fixed container flex justify-between items-center py-4 backdrop-blur-lg rounded-b-2xl">
          <img
              src={Logo}
              className="w-56"
          />
          { type === 'awal'
            ? <ButtonModal className={`btn`}>
                Click To Continue!
              </ButtonModal>

            : <Link to={'/'}>
                <Button className={`btn flex items-center gap-2`}>
                  <IoArrowUndo /> Back
                </Button>
              </Link>
          }
        </div>
      </div>
    </>
  );
}

export default Baner;
