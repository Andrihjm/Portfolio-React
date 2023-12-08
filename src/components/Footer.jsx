import Baner from "./Baner";

function Footer() {
    return (
       <Baner type='apa'>
         <footer>
            <div className="h-20 px-8 flex items-center bg-black/40">
                <p className="text-2xl">Copyright &copy;2023 By Andri || All In Prabowo</p>
            </div>
        </footer>
       </Baner>
    );
}

export default Footer;