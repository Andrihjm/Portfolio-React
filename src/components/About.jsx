


import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'


// Image
import AboutImg from '../assets/about.jpg'
// Icons
import { IoMdMoon } from "react-icons/io";
// Component
import Button from './Button';
import { fadeIn } from '../variants'


function About() {

    const [ref, inView] = useInView({
    threshold: 0.5,
  });

    return (
        <section id="About" ref={ref} className="h-screen container mx-auto">
            <div className='flex justify-between items-center'>
                <div className='w-1/2'>
                    <motion.img
                        variants={fadeIn('right', 0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once:false, amount: 0.7 }}
                        src={AboutImg}              //  Image
                        className='w-4/5'
                    />
                </div>

                <motion.div
                    variants={fadeIn('left', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once:false, amount: 0.7 }}
                    className='w-1/2'
                >
                    <h1 className='h2 mb-10 text-grad'>About Me</h1>
                    <h3 className='h3 mb-4'>
                        Lorem ipsum dolor, sit amet consectetur <span className='text-gradient'> architecto vitae, illo minima totam dolor dicta molestiae? Culpa laborum</span> numquam dicta rem omnis perferendis?
                    </h3>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet  <span className='text-gradient'> adipisicing elit. Dolores harum fuga facilis </span> optio libero doloribus rerum magni quae molestias voluptatesdolor commodi explicabo repellat rem reiciendis,<span className='text-gradient'> deleniti cum soluta minima.</span>
                    </p>

                    <div className='flex gap-16 mb-6'>
                        <span className='text-center'>
                            <h1 className='text-5xl'>
                                {inView ? <CountUp start={0} end={19} duration={8}/> : null}
                            </h1>
                            <h1 className='text-[1.3rem] text-gradient'>Years Old</h1>
                        </span>

                        <span className='text-center'>
                            <h1 className='text-5xl flex justify-center'>
                                {inView ? <CountUp start={0} end={4} duration={8}/> : null}<IoMdMoon size={30} />
                            </h1>
                            <h1 className='text-[1.3rem] text-gradient'>Learn IT</h1>
                        </span>
                    </div>

                    <Button className={`text-sm btn`}>Contact Me</Button>
                    <Button className={`text-gradient text-sm`}>My PortFolio</Button>
                </motion.div>
            </div>
        </section>
    );
}

export default About;