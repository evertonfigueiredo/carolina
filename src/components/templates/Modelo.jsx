import React from "react";
import logo from "../../images/logonome.png";
import youtube from "../../images/youtube-day.svg";
import instagram from "../../images/instagram-day.svg";
import linkedin from "../../images/linkedin-day.svg";
import { Link } from "react-router-dom";

export default function Modelo(props) {
  return (
    <>
      <div>
        <header>
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand">
                <Link to="/">
                  <img src={logo} width="121" height="29" />
                </Link>
              </a>
              <ul class="nav-list">
                <li>
                  <Link to="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link to="/planos">
                    <a>Planos</a>
                  </Link>
                </li>
                <li>
                  <Link to="/cadastro-vendedor">
                    <a>Cadastro Vendedor</a>
                  </Link>
                </li>
                <li>
                  <Link to="/orcamento">
                    <a>Orçamento</a>
                  </Link>
                </li>
                <li>
                  <Link to="/kanban">
                    <a>Kanban</a>
                  </Link>
                </li>
              </ul>
              <button
                className="btn btn-outline-success text-decoration-none"
                type="submit"
              >
                <Link to="/login">Sair</Link>
              </button>
            </div>
          </nav>
        </header>
      </div>
      {props.children}
      <div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <svg className="bi" width="30" height="24"></svg>
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">
              &copy; TechTravels 2023 Company, Inc
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a
                className="text-body-secondary"
                href="https://www.youtube.com/channel/UCbFZv9G9pN7SPaCNOOR7KnQ"
              >
                <img src={youtube} height="30" width="50" alt="YouTube" />
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-body-secondary"
                href="https://www.instagram.com/somostera/"
              >
                <img src={instagram} height="30" width="50" alt="Instagram" />
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-body-secondary"
                href="https://www.linkedin.com/school/somostera/"
              >
                <img src={linkedin} height="30" width="50" alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
