import Album from "../../assets/Andri.jpeg";

function CodeQR() {
  return (
    <section className="h-screen flex justify-center items-center  text-center">
      <div>
        <div className="flex justify-center items-center mb-8">
          <span className="absolute w-[330px] h-[330px] rounded-full border-2 border-y-teal-300 border-x-transparent animate-spin-slow"></span>
          <img src={Album} className="w-[300px] rounded-full" />
        </div>
        <h1 className="text-grad tracking-widest">Haris Andri Irawan</h1>
        <p className="w-[50rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          tempore ipsum <span className="text-gradient text-base">expedita aliquam facere perspiciatis harum minima autem
          rem eligendi similique omnis enim distinctio impedit vitae,</span> sed labore
          fugit architecto pariatur ipsam. Ea aut quae, rerum molestiae nesciunt
          sit, fugit nam velit earum sed modi amet optio in quod necessitatibus?
        </p>
      </div>
    </section>
  );
}

export default CodeQR;
