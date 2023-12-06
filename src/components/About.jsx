
import AboutImg from '../assets/Andri.jpeg'
// Component
import Button from './Button';


function About() {
    return (
        <section id="About" className="section container mx-auto">
            <div>
                <div>
                    <img src={AboutImg} />
                </div>
                <div>
                    <h1>About Me</h1>
                    <h2>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, consequatur animi assumenda est cum nihil architecto vitae, illo minima totam dolor dicta molestiae? Culpa laborum numquam dicta rem omnis perferendis?
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum fuga facilis optio libero doloribus rerum magni quae molestias voluptates dolor commodi explicabo repellat rem reiciendis, deleniti cum soluta minima.
                    </p>
                </div>
                <div>
                    <Button className={`text-sm btn`}>Contact Me</Button>
                    <Button className={`text-gradient text-sm`}>My PortFolio</Button>
                </div>
            </div>
        </section>
    );
}

export default About;