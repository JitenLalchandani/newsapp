
import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar md:navbar-expand bg-1">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" aria-hidden="true"></span>
            </button>
            <dialog className="drawer drawer-end" tabIndex="-1" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
              <div className="drawer-header">
                <h5 className="drawer-title" id="navbarDrawerLabel">Menu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
              </div>
              <div className="drawer-body mb-2 md:mb-0">
                <ul className="nav navbar-nav me-auto">
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                  </li>
                </ul>
              </div>
            </dialog>
          </div>
        </nav>
      </div>
    )
  }
}
