import React from "react";
import logo from "../../images/logonome.png";
import logo02 from "../../images/logo.png";
import banner from "../../images/imagem_home.jpg";
import cliente1 from "../../images/1.png";
import cliente2 from "../../images/2.png";
import cliente3 from "../../images/3.png";
import cliente4 from "../../images/4.png";
import cliente5 from "../../images/5.png";
import cliente6 from "../../images/6.png";
import cliente7 from "../../images/7.png";
import youtube from "../../images/youtube-day.svg";
import instagram from "../../images/instagram-day.svg";
import linkedin from "../../images/linkedin-day.svg";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <header className="text-decoration-none">
        <nav className="navbar bg-body-tertiary text-decoration-none">
          <div className="container-fluid">
            <a className="navbar-brand text-decoration-none">
              <Link to="/">
                <img src={logo} width="121" height="29" />
              </Link>
            </a>
            <button
              className="btn btn-outline-success text-decoration-none"
              type="submit"
            >
              <Link to="/login">Login</Link>
            </button>
          </div>
        </nav>
      </header>
      <main>
        <div className="b-example-divider"></div>
        <div className="px-4 pt-5 my-5 text-center border-bottom">
          <img
            className="d-block mx-auto mb-4"
            src={logo02}
            alt="Tech Travels"
            width="170"
            height="160"
          />
          <h3 className="display-4 fw-bold text-body-emphasis">
            Solução de CRM para Agências de Viagem
          </h3>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Com o nosso sistema de gerenciamento de relacionamento com o
              cliente, você poderá ter uma experiência única e personalizada ao
              planejar suas viagens.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-sm-3"
              >
                <Link to="/test">Testar</Link>
              </button>

              <button
                type="button"
                className="text-decoration-none btn btn-outline-secondary btn-lg px-4 "
              >
                <Link to="/planos">Planos</Link>
              </button>
            </div>
          </div>
          <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
            <div className="container px-5">
              <img
                src={banner}
                className="img-fluid border rounded-3 shadow-lg mb-4"
                width="800"
                height="500"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div
          className="align-items-center justify-content-center"
          id="featured-3"
        >
          <h3 className="border-bottom align-items-center justify-content-center">
            Aqui estão três motivos pelos quais você precisa adquirir o nosso
            produto agora mesmo:
          </h3>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
              <h3 className="fs-2">Personalização:</h3>
              <p>
                Com o nosso CRM de viagem, você terá uma experiência totalmente
                personalizada, com recomendações de destinos e atividades que
                atendam aos seus interesses e preferências. Além disso, você
                poderá criar roteiros exclusivos e adaptáveis às suas
                necessidades e desejos.
              </p>
            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
              <h3 className="fs-2">Economia de tempo:</h3>
              <p>
                O nosso CRM de viagem permite que você planeje e organize todas
                as suas viagens em um só lugar. Com um simples clique, você
                poderá reservar voos, hotéis, aluguel de carros e até mesmo
                passeios turísticos, economizando tempo e evitando o estresse de
                ter que lidar com várias plataformas diferentes.
              </p>
            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
              <h3 className="fs-2">Suporte ao cliente:</h3>
              <p>
                O nosso CRM de viagem oferece suporte ao cliente 24 horas por
                dia, 7 dias por semana. Caso tenha qualquer dúvida ou problema,
                nossa equipe estará sempre pronta para ajudar e garantir que
                você tenha a melhor experiência possível.
              </p>
            </div>
          </div>
        </div>

        <h2 className="pb-2 border-bottom">Nossos Clientes</h2>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src={cliente1} />
            </div>
            <div className="slide">
              <img src={cliente2} />
            </div>
            <div className="slide">
              <img src={cliente3} />
            </div>
            <div className="slide">
              <img src={cliente4} />
            </div>
            <div className="slide">
              <img src={cliente5} />
            </div>
            <div className="slide">
              <img src={cliente6} />
            </div>
            <div className="slide">
              <img src={cliente7} />
            </div>

            <div className="slide">
              <img src={cliente1} />
            </div>
            <div className="slide">
              <img src={cliente2} />
            </div>
            <div className="slide">
              <img src={cliente3} />
            </div>
            <div className="slide">
              <img src={cliente4} />
            </div>
            <div className="slide">
              <img src={cliente5} />
            </div>
            <div className="slide">
              <img src={cliente6} />
            </div>
            <div className="slide">
              <img src={cliente7} />
            </div>
          </div>
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
