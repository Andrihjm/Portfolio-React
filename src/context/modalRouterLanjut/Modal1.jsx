import Button from "../../components/Button";
import { Link } from "react-router-dom";

function Modal1({ closeModal }) {
  return (
    <div className="absolute left-0 top-32 py-8 px-8 bg-black/90 rounded-lg">
      <span
        onClick={closeModal}
        className="absolute top-0 right-4 text-4xl cursor-pointer"
      >
        &times;
      </span>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        quaerat quo perferendis cum voluptatem odio amet, unde dolorem et eius
        sapiente blanditiis <span className="text-gradient text-base capitalize tracking-widest">necessitatibus sit impedit saepe voluptatibus
        perspiciatis expedita explicabo. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Totam qui fugiat necessitatibus quos optio
        voluptatibus quasi cupiditate deleniti iure consequuntur quisquam,
        exercitationem explicabo vel nesciunt,</span> excepturi harum deserunt unde a
        facere placeat repudiandae! Reiciendis unde minus voluptate ad aut.
        Tenetur consequatur quasi nisi doloribus omnis dolore iure dicta
        repellendus aut placeat voluptate reprehenderit repellat, suscipit
        praesentium aspernatur natus labore ullam voluptatum recusandae eligendi
        officiis exercitationem animi culpa! Placeat eaque officia aliquid
        tempore ab veritatis <span className="text-gradient text-base capitalize tracking-wider"> asperiores ea numquam quis, ratione nemo dolore
        consequatur animi voluptate iure atque modi quos, incidunt, tenetur
        voluptates? Doloremque facilis voluptates, harum, fugit dolore accusamus
        nihil temporibus, doloribus odit inventore adipisci sequi sit dicta? Hic
        pariatur reiciendis officia harum tempora accusantium labore quibusdam
        debitis molestiae suscipit dolor</span> quaerat libero alias dolore, delectus
        fugit quae ex modi doloribus sequi mollitia provident? Libero autem
        dolor soluta excepturi dolores reiciendis maiores unde deleniti
        recusandae quisquam quidem quae sequi facilis quasi optio voluptate,
        mollitia saepe incidunt repudiandae sunt, at ea et. Suscipit porro, quo
        accusantium rem alias ducimus aut distinctio voluptates incidunt?
        Cupiditate, dolorem? Excepturi minima eius similique consequatur!
        Exercitationem ea velit error beatae animi, excepturi rerum quo
        voluptates, reprehenderit tempora praesentium <span className="text-gradient text-base capitalize tracking-widest">tempore! Ea quisquam
        accusantium molestiae repellendus id voluptate eligendi?</span>
      </p>
      <Link
        to={"/lanjut"}
        onClick={closeModal}
      >
        <Button className={`text-sm btn py-2 px-9`}>
          Yakin Mau Lanjut?
        </Button>
      </Link>
      
    </div>
  );
}

export default Modal1;
