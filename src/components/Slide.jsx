import { useState } from "react";
import { motion } from "framer-motion";

// Icons
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// Component
import { fadeIn } from '../variants'



function Slide({ data }) {
  const [slide, setSlide] = useState(0);

  const rightSlide = () => {
    setSlide((leftSlide) => (leftSlide + 1) % data.length);
  };

  const leftSlide = () => {
    setSlide((leftSlide) => (leftSlide - 1 + data.length) % data.length);
  };

  return (
    <section id="Slide" className="mb-20 container mx-auto flex items-center">
      <div className="flex justify-center items-center">
        <motion.div
          variants={fadeIn('up', 0)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once:false, amount: 0.7 }}
          key={data.id}
          className="flex flex-col justify-center items-center text-center w-[80%]"
        >
            <div className="w-[40rem] h-[25rem] mb-4 group relative">
                <img
                  src={data[slide].Image}       //  Image
                  className="w-[40rem] h-[25rem] rounded-lg"
                />
                <BsChevronCompactLeft
                    size={30}
                    onClick={rightSlide}
                    className="w-7 h-14 hidden absolute top-[50%] -translate-x-0 translate-y-[-50%] left-4 rounded-full bg-black/30 group-hover:block"
                />
                <BsChevronCompactRight
                    onClick={leftSlide}
                    className="w-7 h-14 hidden absolute top-[50%] -translate-x-0 translate-y-[-50%] right-4 rounded-full bg-black/30 group-hover:block"
                />
            </div>
            
            <h3 className="text-3xl mb-2 font-medium text-gradient capitalize">
              {data[slide].nama}
            </h3>
            <p>
              {data[slide].text}
            </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Slide;
