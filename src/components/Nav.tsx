import { Link } from "react-router-dom";
import logo from "../assets/images/Colonnade-logo.png";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-light mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="memo logo" className="nav-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-flex justify-content-start align-items-center">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="w-800 btn btn-lg start">
                <Link className="nav-link" to="/game">
                  Start New Game
                </Link>
              </button>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default Nav;
