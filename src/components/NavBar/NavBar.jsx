import CartWidget from "./CartWidget"
//import { BsBox } from "react-icons/bs";este no lo usoveo si despues lo quiero cambiar es se implementa aqui  {/* <BsBox className="icon-brand" /> */}
import { Link } from "react-router-dom";

import "./navbar.css"

const NavBar = () => {
  return (
    <nav className="navbar">

      <ul className="categories">
        <li className="category">
          <Link to="/category/teclado" >Teclado</Link>
        </li>
        <li className="category">
          <Link to="/category/mouse" >Mouse</Link>
        </li>
        <li className="category">
          <Link to="/category/audio">Audio</Link>
        </li>
      </ul>

      <Link to="/" className="brand primary-font-color">
        {/* <BsBox className="icon-brand" /> */}
        <p className="title-brand ">Techstore</p>
      </Link>

      <CartWidget />
    </nav>
  )
}
export default NavBar