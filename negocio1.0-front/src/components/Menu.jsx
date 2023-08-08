import React from "react";
import { NavLink } from "react-router-dom";
import { RiHome2Line, RiMovieLine, RiTvLine, RiCamera2Line, RiUserLine, RiUserFollowLine } from "react-icons/ri";

function Menu() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <span className="logo">Patito´s Bebes</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" exact to="/">
              <RiHome2Line className="icon" />
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/productos">
              <i class="ri-archive-line"></i>
              Productos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
