import Lnk from "./utils/Lnk";

export default function Error(props){
    return(
        <div id="not-found">
            <div>
                <p>
                    La page que vous avez demandée n'est pas disponible
                </p>
                <Lnk to="/">Revenir au site web</Lnk>
            </div>
        </div>
    )
}