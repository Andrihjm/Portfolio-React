
import AboutImg from '../assets/Andri.jpeg'
// Component
import Button from './Button';


function About() {
    return (
        <section id="About" className="h-screen container mx-auto">
            <div className='flex justify-between items-center'>
                <div className='w-1/2'>
                    <img
                        src={AboutImg}
                        className='w-4/5 h-4/5'
                    />
                </div>

                <div className='w-1/2'>
                    <h1 className='h2 text-grad'>About Me</h1>
                    <h3 className='h3 mb-4'>
                        Lorem ipsum dolor, sit amet consectetur <span className='text-grad'> architecto vitae, illo minima totam dolor dicta molestiae? Culpa laborum</span> numquam dicta rem omnis perferendis?
                    </h3>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet  <span className='text-grad'> adipisicing elit. Dolores harum fuga facilis </span> optio libero doloribus rerum magni quae molestias voluptatesdolor commodi explicabo repellat rem reiciendis, deleniti cum soluta minima.
                    </p>
                    <Button className={`text-sm btn`}>Contact Me</Button>
                    <Button className={`text-gradient text-sm`}>My PortFolio</Button>
                </div>
            </div>
        </section>
    );
}

export default About;