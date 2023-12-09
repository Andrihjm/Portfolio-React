
import { Link } from 'react-scroll'

// Icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { CiHardDrive } from "react-icons/ci";
import { IoMdPhotos } from "react-icons/io";
import { LiaClipboardListSolid } from "react-icons/lia"


function Nav() {
    return (
        <nav className='fixed w-full bottom-2 lg:bottom-8 overflow-hidden z-50'>
            <div className='w-[500px] h-[100px] mx-auto px-8 backdrop-blur-sm cursor-pointer rounded-full text-2xl text-white/50 bg-black/30 flex justify-between items-center'>
                
                <Link
                    to='Home'
                    activeClass='active'
                    smooth={true}
                    spy={true}
                    offset={-200}
                    className='w-[60px] h-[60px] flex justify-center items-center'
                >
                    <BiHomeAlt />
                </Link>

                <Link
                    to='About'
                    activeClass='active'
                    smooth={true}
                    spy={true}
                    offset={-200}
                    className='w-[60px] h-[60px] flex justify-center items-center'    
                >
                    <BiUser />
                </Link>

                <Link
                    to='Hobi'
                    activeClass='active'
                    smooth={true}
                    spy={true}
                    offset={-200}
                    className='w-[60px] h-[60px] flex justify-center items-center'    
                >
                    <LiaClipboardListSolid />
                </Link>

                <Link
                    to='Galeri'
                    activeClass='active'
                    smooth={true}
                    spy={true}
                    offset={-200}
                    className='w-[60px] h-[60px] flex justify-center items-center'    
                >
                    <IoMdPhotos />
                </Link>
                
                <Link
                    to='Slide'
                    activeClass='active'
                    smooth={true}
                    spy={true}
                    offset={-200}
                    className='w-[60px] h-[60px] flex justify-center items-center'    
                >
                    <CiHardDrive />
                </Link>
            </div>
        </nav>
    );
}

export default Nav;