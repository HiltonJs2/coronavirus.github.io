import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navbar.styles.scss';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light navbar navbar-dark bg-primary">
          <Link className="navbar-brand" to="/">
            Corodate
          </Link>
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
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  History By Country
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Cases By Country
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default NavBar;
