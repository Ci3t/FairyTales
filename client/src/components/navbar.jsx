
import { Link, NavLink, useLocation } from "react-router-dom"
import "./navbar.css"
const NavBar = ({homePageMode}) => {

    const {pathname} = useLocation()

    return (
        <div className={`navbar ${pathname === "/" ? "navbar-transparent" : ""}`}>
            <div className="navbar__left">
                <NavLink to="/" className="logo">CITRIX</NavLink>
            </div>
            <div className="navbar__right">
                <button className="navbar__btn">
                    <Link className="navbar__link" to="/story">Randomize</Link>
                </button>
                <button className="navbar__btn">
                    <Link className="navbar__link" to="newStory">+</Link>
                </button>
                    
            </div>
        </div>
    )
}

export default NavBar