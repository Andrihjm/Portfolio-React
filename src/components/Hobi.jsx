
// Imagae
import HobiImg from '../assets/Andri.jpeg'
// Component
import Button from './Button';
import dataHobi from '../data/dataHobi';
import Baner from './Baner';



function Hobi() {
    return (
            <section id="Hobi" className="h-screen container mx-auto">
            <div className='flex justify-between items-center'>
                <div className='w-1/2'>
                    <h2 className='h2 text-grad'>WHAT I DO.</h2>
                    <p className='mb-2 h3 max-w-[600px]'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet. adipisicing elit.</p>
                    <Button className={`btn btn-link mb-8`}>
                        See my activities
                    </Button>
                    <img
                        src={HobiImg}
                        className='w-[60%]'
                    />
                </div>

                    <div className='w-1/2 h-[70vh] overflow-y-scroll '>
                        { dataHobi.map((data) => (
                            <div
                                key={data.id}
                                className='border-b-2 mb-8 border-white/20 relative'
                            >
                                <h4 className='h3 tracking-wider font-primary font-semibold mb-4'>
                                    {data.title}
                                </h4>
                                <p className='mb-3'>
                                    {data.text}
                                </p>
                                <button className='absolute bottom-3 right-4 text-gradient text-sm'>
                                    {data.link}
                                </button>
                            </div>
                        )) }
                    </div>
                    <div>
                </div>
            </div>
        </section>
    );
}

export default Hobi;