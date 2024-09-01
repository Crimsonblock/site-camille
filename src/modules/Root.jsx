import { Outlet } from "react-router-dom";
import Lnk from "./utils/Lnk";

function Root(props, oui){
    return(
        <>
            <header>
                <a href='/' id='title' className="blue roboto-light">Camille Bauer</a>
                <h2 className='subtitle roboto-thin'>Mezzo-Soprano</h2>
                <ul>
                    <li>
                        <Lnk to="/">Biographie</Lnk>
                    </li>
                    <li>
                        <Lnk to="/repertoir">Répertoire</Lnk>
                    </li>
                    <li>
                        <Lnk to="/media">Media</Lnk>
                    </li>
                    <li>
                        <Lnk to="/contact">Contact</Lnk>
                    </li>
                </ul>
            </header>
            <div className="content">
                <Outlet/>
            </div>


            {/* <div>
                <p className="copyright">
                    © 2024 Camille Bauer - Tous droits réservés
                </p>
            </div> */}
        </>
    )
}

export default Root;