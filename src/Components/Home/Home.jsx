import React, { Component, Fragment } from 'react';
import style from './Home.module.css';
import image from './../../assets/images/avatar.svg';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <section className={style.home}>
          <div className={style.home_content}>
            <img src={image} alt="Avatar"></img>
            <h1>START REACT</h1>
            <i className='fa-solid fa-star fa-xl color_white'></i>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </section>
      </Fragment>
    );
  }
}
