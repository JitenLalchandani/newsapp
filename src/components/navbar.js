
import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  render() {
    return (
      <div>
        <nav className="navbar md:navbar-expand bg-1">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" aria-hidden="true"></span>
            </button>
            <dialog className="drawer drawer-end" tabIndex="-1" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
              <div className="drawer-body mb-2 md:mb-0">
                <ul className="nav navbar-nav me-auto">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
                </ul>
              </div>
            </dialog>
          </div>
        </nav>
      </div>
    );
  }
}
