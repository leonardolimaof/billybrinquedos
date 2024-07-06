import { NavLink } from "react-router-dom";
import  Logo  from "../../components/Imagens/Logo.png";

const NavBar = () => {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
      <div className="container d-flex flex-wrap align-items-center justify-content-between">
        <a href="/" className="d-flex align-items-center mb-2 mb-md-0 me-md-auto text-dark text-decoration-none">
          <img src={Logo} alt="BillyBrinquedos" width={130} height={100} />
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
          <NavLink to={"/"} className="nav-link">Inicio</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to={"/Catalogo/"} className="nav-link">Catálogo</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to={"/Sobrenos/"} className="nav-link">Sobre Nós</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
