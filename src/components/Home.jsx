

// Component
import Button from './Button';
// Image
import Andri from '../assets/Andri.jpeg'
// Icons
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa'


function Home() {
    return (
        <section id="Home" className="section container mx-auto">
            <div className="flex justify-center items-center gap-16">
                <div className="w-[70%]">
                    <h1
                    className="text-5xl font-bold lg:text-7xl w-[70%]"
                >
                    Haris Andri Irawan</h1>
                <h3 className="mb-7 text-5xl font-medium font-secondary uppercase">
                    I'am siapa <span className='text-gradient'>aja deh </span>
                </h3>
                <p className='mb-2'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam exercitationem quas facilis corrupti error velit itaque, eaque voluptatibus perferendis alias.
                </p>

                <Button className={`text-sm btn`}>Contact Me</Button>
                <Button className={`text-gradient text-sm`}>My PortFolio</Button>

                    <div className='flex gap-4 pt-4 text-3xl'>
                        <a href=''> <FaGithub /> </a>
                        <a href=''> <FaYoutube /> </a>
                        <a href=''> <FaDribbble /> </a>
                    </div>
                </div>

                <div className="hidden lg:flex">
                    <img src={Andri}
                    />
                </div>
            </div>
        </section>
    );
}

export default Home;