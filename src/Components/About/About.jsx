import React, { Component, Fragment } from 'react';
import style from './About.module.css';

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <section className={style.about}>
          <div className="head">
            <h2 className="color_white">ABOUT</h2>
            <i className="fa-solid fa-star fa-xl color_white"></i>
          </div>
          <div className={`${style.about_content} m-5`}>
            <div className="row">
              <div className="col-md-6">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  You can create your own custom avatar for the masthead, change
                  the icon in the dividers, and add your email address to the
                  contact form to make it fully functional!
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
