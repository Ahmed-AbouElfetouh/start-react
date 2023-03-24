import React, { Component, Fragment } from 'react';
import style from './Footer.module.css';

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className={`text-light p-5`}>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h2>LOCATION</h2>
                <p>
                  2215 John Daniel Drive<br></br>
                  Clark, MO 65243
                </p>
              </div>
              <div className="col-md-4">
                <h2>AROUND THE WEB</h2>
                <ul className={`list-unstyled d-flex`}>
                  <li>
                    <i className="fa-brands fa-facebook-f"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-twitter"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-github"></i>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h2>ABOUT FREELANCER</h2>
                <p>
                  Freelance is a free to use, MIT<br></br> licensed Bootstrap
                  theme created by<br></br> Route
                </p>
              </div>
            </div>
          </div>
        </footer>
        <div className={style.copyright}>
          <p>Copyright © Your Website 2023</p>
        </div>
      </Fragment>
    );
  }
}
