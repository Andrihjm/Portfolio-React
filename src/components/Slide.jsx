

// Component
import dataSlide from '../data/dataSlide'




function Testimoni() {

    return (
        <section id="Testimoni" className="section container mx-auto">
            <div>
                {dataSlide.map((e) => (
                    <div>
                        <img
                            src={e.image}
                            alt={e.nama}
                        />
                        <h2>{e.nama}</h2>
                        <p>{e.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimoni;