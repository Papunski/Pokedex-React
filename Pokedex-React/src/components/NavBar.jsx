import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <ul className="Header">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/infos">Infos</Link></li>
        </ul>
    )
}

export default NavBar