import React from "react";
import logo from "../../images/logonome.png";
import logoG from "../../images/logo.png";
import youtube from "../../images/youtube-day.svg";
import instagram from "../../images/instagram-day.svg";
import linkedin from "../../images/linkedin-day.svg";
import check from "../../images/check.svg";
import { Link } from "react-router-dom";

export default function Planos() {
  return (
    <>
      <header>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand">
              <Link to="/">
                <img src={logo} width="121" height="29" />
              </Link>
            </a>
            <button className="btn btn-outline-success" type="submit">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </nav>
      </header>

      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <img
          className="d-block mx-auto mb-4"
          src={logoG}
          alt="Tech Travels"
          width="160"
          height="150"
        />
        <h1 className="display-4 fw-normal text-body-emphasis">
          Preços e Planos
        </h1>
        <p className="fs-5 text-body-secondary">
          Planos para quem quer começar ou escalar sua estratégia de Vendas.
        </p>
      </div>

      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Free</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  R$ 0
                  <small className="text-body-secondary fw-light">/mês</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>10 Usuários </li>
                  <li>2 GB para armazenar</li>
                  <li>Supote por E-mails </li>
                  <li>Help Call Center</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-primary"
                >
                  Comece Agora Free
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  R$ 55
                  <small className="text-body-secondary fw-light">/mês</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>20 Usuários</li>
                  <li>10 GB para armazenar</li>
                  <li>Prioridade no Supote por E-mails</li>
                  <li>Help Call Center 24h</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">
                  Contrate Agora
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">Enterprise</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  R$ 129
                  <small className="text-body-secondary fw-light">/mês</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>35 Usuários</li>
                  <li>15 GB para armazenar</li>
                  <li>Supote por E-mails e Telefone</li>
                  <li>Help Call Center 24h</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">
                  Fale com Vendas
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2 className="display-6 text-center mb-4">Todas as funcionalidades</h2>

        <div className="table-responsive">
          <table className="table text-center">
            <thead>
              <tr>
                <th style={{ width: "34%" }}></th>
                <th style={{ width: "22%" }}>Free</th>
                <th style={{ width: "22%" }}>Pro</th>
                <th style={{ width: "22%" }}>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-start">
                  Funis de vendas
                </th>
                <td>
                  <a className="bi">
                    <img src={check} width="24" height="24" />
                  </a>
                </td>
                <td>
                  <a className="bi">
                    <img src={check} width="24" height="24" />
                  </a>
                </td>
                <td>
                  <a className="bi">
                    <img src={check} width="24" height="24" />
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Importar clientes e oportunidades
                </th>
                <td></td>
                <td>
                  <a className="bi">
                    <img src={check} width="24" height="24" />
                  </a>
                </td>
                <td>
                  <a className="bi">
                    <img src={check} width="24" height="24" />
                  </a>
                </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <th scope="row" className="text-start">
                  Envio de e-mails
                </th>
                <td>
                  <a className="bi">
                    <img src={check} width="24" height="24" />
                  </a>
                </td>
                <td>
                  <a className="bi">
                    <img src={check} width="24" height="24" />
                  </a>
                </td>
                <td>
                  <a className="bi">
                    <img src={check} width="24" height="24" />
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Sharing
                </th>
                <td></td>
                <td>
                  <a className="bi">
                    <img src={check} width="24" height="24" />
                  </a>
                </td>
                <td>
                  <a className="bi">
                    <img src={check} width="24" height="24" />
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Histórico de atividades da oportunidade
                </th>
                <td></td>
                <td>
                  <a className="bi">
                    <img src={check} width="24" height="24" />
                  </a>
                </td>
                <td>
                  <a className="bi">
                    <img src={check} width="24" height="24" />
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  Criação de Motivos de Perda
                </th>
                <td></td>
                <td></td>
                <td>
                  <a className="bi">
                    <img src={check} width="24" height="24" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

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
      </main>
    </>
  );
}
