
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


// Image
import Img1 from '../../assets/Andri.jpeg';
// Component
import Button from "../Button";
import { fadeIn } from '../../variants'


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
                        View All Image
                    </Button>

                        <div className='relative group outline outline-slate-300 rounded-lg overflow-hidden '>
                            <span className='absolute group-hover:bg-black/80 w-full h-full transition-all duration-700 ease-in-out z-40'></span>
                                <img src={Img1}
                                    className='w-[750px] h-[400px] group-hover:scale-125 transition-all duration-700 ease-in-out'
                                />
                                <span className='absolute -bottom-20 left-16 group-hover:bottom-[4rem] transition-all duration-1000 ease-in-out z-50'>
                                    <h2 className='text-gradient text-3xl'>Sorom Halom</h2>
                                    <Link to='/lanjut/card1'>Komering</Link>
                                </span>
                        </div>
                </motion.div>

                <motion.div
                    variants={fadeIn('left', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once:false, amount: 0.7 }}
                    className='h-[42rem] overflow-y-scroll'
                >
                        <div className='relative mb-4 my-4 mx-4 group outline outline-slate-300 rounded-lg overflow-hidden'>
                            <span className='absolute group-hover:bg-black/80 w-full h-full transition-all duration-700 ease-in-out z-40'></span>
                                <img
                                    src="https://i.pinimg.com/564x/89/b9/49/89b94950b914f97a4c4831dcd1044dcc.jpg"
                                    className='w-[750px] h-[400px] group-hover:scale-125 transition-all duration-700 ease-in-out'
                                />
                                <span className='absolute -bottom-20 left-16 group-hover:bottom-[4rem] transition-all duration-1000 ease-in-out z-50'>
                                    <h2 className='text-gradient text-3xl'>Sorom Halom</h2>
                                    <p>Komering</p>
                                </span>
                            </div>

                        <div className='relative mb-4 my-4 mx-4 group outline outline-slate-300 rounded-lg overflow-hidden'>
                            <span className='absolute group-hover:bg-black/80 w-full h-full transition-all duration-700 ease-in-out z-40'></span>
                                <img
                                    src="https://i.pinimg.com/564x/bd/64/33/bd643384f622349b840e4c1cb8e72695.jpg"
                                    className='w-[750px] h-[400px] group-hover:scale-125 transition-all duration-700 ease-in-out'
                                />
                                <span className='absolute -bottom-20 left-16 group-hover:bottom-[4rem] transition-all duration-1000 ease-in-out z-50'>
                                    <h2 className='text-gradient text-3xl'>Sorom Halom</h2>
                                    <p>Komering</p>
                                </span>
                            </div>

                        <div className='relative mb-4 my-4 mx-4 group outline outline-slate-300 rounded-lg overflow-hidden'>
                            <span className='absolute group-hover:bg-black/80 w-full h-full transition-all duration-700 ease-in-out z-40'></span>
                                <img
                                    src="https://i.pinimg.com/236x/e1/c5/83/e1c583d1b52282c923d499d92838ae97.jpg"
                                    className='w-[750px] h-[400px] group-hover:scale-125 transition-all duration-700 ease-in-out'
                                />
                                <span className='absolute -bottom-20 left-16 group-hover:bottom-[4rem] transition-all duration-1000 ease-in-out z-50'>
                                    <h2 className='text-gradient text-3xl'>Sorom Halom</h2>
                                    <p>Komering</p>
                                </span>
                            </div>

                        <div className='relative mb-4 my-4 mx-4 group outline outline-slate-300 rounded-lg overflow-hidden'>
                            <span className='absolute group-hover:bg-black/80 w-full h-full transition-all duration-700 ease-in-out z-40'></span>
                                <img
                                    src="https://i.pinimg.com/564x/19/76/f2/1976f2aa45143c5be2a26c64c8edb091.jpg"
                                    className='w-[750px] h-[400px] group-hover:scale-125 transition-all duration-700 ease-in-out'
                                />
                                <span className='absolute -bottom-20 left-16 group-hover:bottom-[4rem] transition-all duration-1000 ease-in-out z-50'>
                                    <h2 className='text-gradient text-3xl'>Sorom Halom</h2>
                                    <p>Komering</p>
                                </span>
                            </div>

                        <div className='relative mb-4 my-4 mx-4 group outline outline-slate-300 rounded-lg overflow-hidden'>
                            <span className='absolute group-hover:bg-black/80 w-full h-full transition-all duration-700 ease-in-out z-40'></span>
                                <img
                                    src="https://i.pinimg.com/564x/5a/b3/9f/5ab39ff7a40ff591be2f2555e79e59aa.jpg"
                                    className='w-[750px] h-[400px] group-hover:scale-125 transition-all duration-700 ease-in-out'
                                />
                                <span className='absolute -bottom-20 left-16 group-hover:bottom-[4rem] transition-all duration-1000 ease-in-out z-50'>
                                    <h2 className='text-gradient text-3xl'>Sorom Halom</h2>
                                    <p>Komering</p>
                                </span>
                            </div>

                        <div className='relative mt-4 mx-4  group outline outline-slate-300 rounded-lg overflow-hidden'>
                            <span className='absolute group-hover:bg-black/80 w-full h-full transition-all duration-700 ease-in-out z-40'></span>
                                <img
                                    src="https://i.pinimg.com/236x/88/5a/d3/885ad3cd8967901e336e44f70392ce56.jpg"
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