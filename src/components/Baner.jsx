// Image
import Logo from "../assets/Logo.png";
// Component
import Button from "./Button";

function Baner() {
  return (
    <div className="container mx-auto z-[999]">
      <div className="fixed container flex justify-between items-center py-4 backdrop-blur-lg rounded-b-2xl">
        <img
            src={Logo}
            className="w-56"
        />
        <Button className={`text-sm btn`}>Work With Me</Button>
    </div>
    </div>
  );
}

export default Baner;
