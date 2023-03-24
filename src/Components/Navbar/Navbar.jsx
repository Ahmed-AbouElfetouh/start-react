import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

export default class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <Link className={`${style.the_color} navbar-brand`} to="home">
              START REACT
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`${style.the_color} nav-link active`}
                    aria-current="page"
                    to="portfolio"
                  >
                    PORTFOLIO
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`${style.the_color} nav-link`}
                    aria-current="page"
                    to="about"
                  >
                    ABOUT
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className={`${style.the_color} nav-link`}
                    aria-current="page"
                    to="contact"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}
