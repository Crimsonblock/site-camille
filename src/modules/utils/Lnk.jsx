import { NavLink } from "react-router-dom"
export default function Lnk(props){
    return(
        <NavLink 
            to={props.to}
            className={({ isActive, isPending }) =>
            isActive ? "blue" : ""}>
        {props.children}
        </NavLink>
    )
}