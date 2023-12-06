

// Image
// Image
import Img1 from '../assets/Andri.jpeg';
import Img2 from '../assets/Andri.jpeg';
import Img3 from '../assets/Andri.jpeg';
// Component
import Button from "./Button";


function Galeri() {
    return (
        <section id="" className="section container mx-auto">
                <div className='w-1/2'>
                    <h2 className='h2 text-grad'>My Album <br />Coyyyy</h2>
                    <p className='w-[30rem]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorem, minus quaerat quis sapiente nobis! Sunt ipsum error nam quod.
                    </p>
                    <Button>View All Project</Button>
                        <div className='relative group w-[600px] overflow-hidden'>
                            <img src={Img1}/>
                            <span className='absolute -bottom-20 left-8 group-hover:bottom-20 transition-all duration-1000 ease-in-out z-50'>
                                <h2 className='text-gradient text-3xl'>Sorom Halom</h2>
                                <p>Komering</p>
                            </span>
                        </div>
                </div>

                <div className='w-1/2 flex-col justify-center flex gap-8'>
                        <div className='relative group w-[600px] overflow-hidden'>
                            <img
                                src={Img1}
                            />
                            <span className='absolute -bottom-20 left-8 group-hover:bottom-20 transition-all duration-1000 ease-in-out z-50'>
                                <h2 className='text-gradient text-3xl'>Sorom Halom</h2>
                                <p>Komering</p>
                            </span>
                        </div>

                        <div className='relative group w-[600px] overflow-hidden'>
                            <img
                                src={Img1}
                            />
                            <span className='absolute -bottom-20 left-8 group-hover:bottom-20 transition-all duration-1000 ease-in-out z-50'>
                                <h2 className='text-gradient text-3xl'>Sorom Halom</h2>
                                <p>Komering</p>
                            </span>
                        </div>
                </div>
        </section>
    );
}

export default Galeri;