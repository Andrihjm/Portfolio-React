import { useState, useEffect } from "react";
// Component
import MyProfile from "./MyProfile";

function Slider() {
  const slider = [
    {
      url: "https://img.freepik.com/premium-photo/programming-language-black-screen-background_752562-5.jpg?w=1380",
    },
    {
      url: "https://img.freepik.com/free-photo/html-system-website-concept_23-2150376770.jpg?size=626&ext=jpg&ga=GA1.1.429526836.1701312162&semt=sph",
    },
    {
      url: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010138.jpg?t=st=1701275535~exp=1701276135~hmac=0c7c893fc996d816f2a87f5b0f8ab492db157ba7f11768c011c525b029398871",
    },
    {
      url: "https://img.freepik.com/premium-photo/closeup-businessman-hand-holding-phone-analysis-finance-market-graph-stock-market-trading_38391-1182.jpg",
    },
    {
      url: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=1380&t=st=1701312156~exp=1701312756~hmac=a3c3c1faa2d4c76ca1b132cb1d5ec80ea8b24e19356065e3174975ffe18fe0af",
    },
  ];

  const [jumlahArry, setJumlahArry] = useState(0);

        // Slide
  const righSlide = () => {
    const firstSlide = jumlahArry === 0;
    const newSlide = firstSlide ? slider.length - 1 : jumlahArry - 1;
    setJumlahArry(newSlide);
  };

    //  Slide Otomatis
    useEffect(() => {
      const intervalId = setInterval(() => {
        righSlide();
      }, 2000);

      return () => clearInterval(intervalId);
    }, [jumlahArry]);

  return (
        <section
            id="Home"
            style={{ backgroundImage: `url(${slider[jumlahArry].url})` }}
            className="h-screen w-screen rounded-lg bg-center bg-cover duration-1000"
        >
          <MyProfile />
        </section>
  );
}

export default Slider;
