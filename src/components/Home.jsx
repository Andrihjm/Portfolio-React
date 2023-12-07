

// React i
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

// Component
import Button from './Button';
import { fadeIn } from '../variants';
// Image
import Andri from '../assets/Andri.jpeg';
// Icons
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';


function Home() {
    return (
        <section id="Home" className="h-screen container mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-16">
                <div
                    className="w-[70%]"
                >
                    <motion.h1
                        variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once:false, amount: 0.7 }}
                        className="text-5xl font-bold lg:text-7xl w-[70%]"
                    >
                        Haris Andri Irawan
                    </motion.h1>
                    <motion.h3
                        variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once:false, amount: 0.7 }}
                        className="mb-7 font-medium font-secondary uppercase"
                    >
                        <span className='mr-6 text-5xl'>I'am a</span>
                        <TypeAnimation sequence={[
                            'Apa Luu',
                            2000,
                            'Slebewwww',
                            2000,
                            'Sempak Hilang',
                            2000,
                            'Cuakss Pake S',
                            2000,
                        ]}
                            speed={8}
                            className='text-gradient text-4xl'
                            wrapper='span'
                            repeat={Infinity}
                        />
                    </motion.h3>
                <motion.p
                    variants={fadeIn('up', 0.6)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once:false, amount: 0.7 }}
                    className='mb-2'
                >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam exercitationem quas facilis corrupti error velit itaque, eaque voluptatibus perferendis alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, asperiores.
                </motion.p>

                <motion.div
                    variants={fadeIn('up', 0.7)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once:false, amount: 0.7 }}
                >
                    <Button className={`btn`}>Contact Me</Button>
                    <Button className={`text-gradient`}>My PortFolio</Button>

                </motion.div>
                    <motion.div
                        variants={fadeIn('up', 0.9)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once:false, amount: 0.7 }}
                        className='flex gap-4 pt-4 text-3xl'
                    >
                        <a href=''> <FaGithub /> </a>
                        <a href=''> <FaYoutube /> </a>
                        <a href=''> <FaDribbble /> </a>
                    </motion.div>
                </div>

                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once:false, amount: 0.7 }}
                    className="hidden lg:flex"
                >
                    <img src={Andri}
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default Home;