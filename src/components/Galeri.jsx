

// Image
// Image
import Img1 from '../assets/Andri.jpeg';
import Img2 from '../assets/Andri.jpeg';
import Img3 from '../assets/Andri.jpeg';
// Component
import Button from "./Button";


function Galeri() {
    return (
        <section id="Galeri" className="container mx-auto py-16">
            <div className='flex justify-between'>
                <div className=''>
                    <h2 className='h2 text-grad max-w-[20rem] leading-[3rem]'>My Album Coyyyy</h2>
                    <p className='w-[30rem] mb-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorem, minus quaerat quis sapiente nobis! Sunt ipsum error nam quod.
                    </p>
                    <Button className={`btn btn-link mb-16`}>
                        View All Project
                    </Button>

                        <div className='relative group outline outline-slate-300 rounded-lg overflow-hidden '>
                            <span className='absolute group-hover:bg-black/80 w-full h-full transition-all duration-700 ease-in-out z-40'></span>
                                <img src={Img1}
                                    className='w-[750px] h-[400px] group-hover:scale-125 transition-all duration-700 ease-in-out'
                                />
                                <span className='absolute -bottom-20 left-8 group-hover:bottom-20 transition-all duration-1000 ease-in-out z-50'>
                                    <h2 className='text-gradient text-3xl'>Sorom Halom</h2>
                                    <p>Komering</p>
                                </span>
                        </div>
                </div>

                <div className='flex flex-col gap-8'>
                        <div className='relative group outline outline-slate-300 rounded-lg overflow-hidden'>
                            <span className='absolute group-hover:bg-black/80 w-full h-full transition-all duration-700 ease-in-out z-40'></span>
                                <img
                                    src={Img1}
                                    className='w-[750px] h-[400px] group-hover:scale-125 transition-all duration-700 ease-in-out'
                                />
                                <span className='absolute -bottom-20 left-8 group-hover:bottom-20 transition-all duration-1000 ease-in-out z-50'>
                                    <h2 className='text-gradient text-3xl'>Sorom Halom</h2>
                                    <p>Komering</p>
                                </span>
                            </div>

                        <div className='relative group outline outline-slate-300 rounded-lg overflow-hidden'>
                            <span className='absolute group-hover:bg-black/80 w-full h-full transition-all duration-700 ease-in-out z-40'></span>
                                <img
                                    src={Img1}
                                    className='w-[750px] h-[400px] group-hover:scale-125 transition-all duration-700 ease-in-out'
                                />
                                <span className='absolute -bottom-20 left-8 group-hover:bottom-20 transition-all duration-1000 ease-in-out z-50'>
                                    <h2 className='text-gradient text-3xl'>Sorom Halom</h2>
                                    <p>Komering</p>
                                </span>
                            </div>
                </div>
            </div>
        </section>
    );
}

export default Galeri;