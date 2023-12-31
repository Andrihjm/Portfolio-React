

// React i
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

// Component
import Button from './Button';
import { fadeIn } from '../variants';
// Image
import imgHome from '../assets/imgHome.jpg'
// Icons
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';


function Home() {
    return (
        <section id="Home" className="h-screen container mx-auto flex justify-center items-center">
            <div className="flex justify-between items-center gap-16">
                <div
                    className="w-[70%]"
                >
                    <motion.h1
                        variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once:false, amount: 0.7 }}
                        className="text-5xl font-bold lg:max-w-[70%] lg:text-7xl"
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
                            'Web Developer (amin)',
                            2000,
                            'Frontend Developer (amin lagi)',
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
                    className='mb-2 max-w-[90%]'
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
                        <a href='https://github.com/Andrihjm' target='_blank'> <FaGithub /> </a>
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
                    <img src={imgHome}
                        className="bg-cover  w-[600px]"
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default Home;