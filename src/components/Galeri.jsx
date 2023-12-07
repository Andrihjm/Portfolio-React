
import { motion } from 'framer-motion';


// Image
import Img1 from '../assets/Andri.jpeg';
// Component
import Button from "./Button";
import { fadeIn } from '../variants'


function Galeri() {
    return (
        <section id="Galeri" className="h-screen container mx-auto mb-40">
            <div className='flex justify-between items-center'>
                <motion.div
                    variants={fadeIn('right', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once:false, amount: 0.7 }}    
                >
                    <h2 className='h2 text-grad max-w-[20rem] leading-[3rem]'>My Album Coyyyy</h2>
                    <p className='w-[30rem] mb-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorem, minus quaerat quis sapiente nobis! Sunt ipsum error nam quod.
                    </p>
                    <Button className={`btn btn-link mb-20`}>
                        View All Project
                    </Button>

                        <div className='relative group outline outline-slate-300 rounded-lg overflow-hidden '>
                            <span className='absolute group-hover:bg-black/80 w-full h-full transition-all duration-700 ease-in-out z-40'></span>
                                <img src={Img1}
                                    className='w-[750px] h-[400px] group-hover:scale-125 transition-all duration-700 ease-in-out'
                                />
                                <span className='absolute -bottom-20 left-16 group-hover:bottom-[4rem] transition-all duration-1000 ease-in-out z-50'>
                                    <h2 className='text-gradient text-3xl'>Sorom Halom</h2>
                                    <p>Komering</p>
                                </span>
                        </div>
                </motion.div>

                <motion.div
                    variants={fadeIn('left', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once:false, amount: 0.7 }}
                    className='flex flex-col gap-8'
                >
                        <div className='relative group outline outline-slate-300 rounded-lg overflow-hidden'>
                            <span className='absolute group-hover:bg-black/80 w-full h-full transition-all duration-700 ease-in-out z-40'></span>
                                <img
                                    src={Img1}
                                    className='w-[750px] h-[400px] group-hover:scale-125 transition-all duration-700 ease-in-out'
                                />
                                <span className='absolute -bottom-20 left-16 group-hover:bottom-[4rem] transition-all duration-1000 ease-in-out z-50'>
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
                                <span className='absolute -bottom-20 left-16 group-hover:bottom-[4rem] transition-all duration-1000 ease-in-out z-50'>
                                    <h2 className='text-gradient text-3xl'>Sorom Halom</h2>
                                    <p>Komering</p>
                                </span>
                            </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Galeri;