import './Navbar.css';

import { NavLink, Link } from 'react-router-dom';
import { BsSearch, BsGouseDoorFill, BsFillPersonFill, BsFillCameraFill, BsHouseDoorFill} from "react-icons/bs";

const Navbar = () => {
  return (
    <nav id="nav">
        <Link to="/">ReactGram</Link>
        <form id="search-form">
            <BsSearch />
            <input type="text" placeholder='Pesquisar'/>
        </form>
        <ul id="navlink">
            <li>
                <NavLink to="/">
                    <BsHouseDoorFill />
                </NavLink>
            </li>
            <li>
                <NavLink to="/login">
                    Entrar
                </NavLink>
            </li>
            <li>
                <NavLink to="/register">
                    Cadastrar
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar