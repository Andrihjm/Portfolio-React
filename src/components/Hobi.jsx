
// Imagae
import HobiImg from '../assets/Andri.jpeg'
// Component
import Button from './Button';
import dataHobi from '../data/dataHobi';



function Hobi() {
    return (
        <section id="Hobi" className="section container mx-auto">
            <div className='flex justify-between items-center'>
                <div className='w-1/2'>
                    <h1>WHAT I DO.</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <Button className={`btn btn-link`}>See My Work</Button>
                    <img src={HobiImg}
                        className='w-[60%]'
                    />
                </div>

                    <div className='w-1/2 h-[80vh] overflow-y-scroll '>
                        { dataHobi.map((data) => (
                            <div
                                key={data.id}
                                className='border-b-2 mb-8 border-white/20 relative'
                            >
                                <h4 className='text-xl tracking-wider font-primary font-semibold mb-4'>
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