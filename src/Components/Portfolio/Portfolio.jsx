import React, { Component, Fragment } from 'react';
import portfolioImage_1 from './../../assets/images/asset 1.png';
import portfolioImage_2 from './../../assets/images/asset 2.png';
import portfolioImage_3 from './../../assets/images/asset 3.png';
import portfolioImage_4 from './../../assets/images/asset 4.png';
import portfolioImage_5 from './../../assets/images/asset 5.png';
import portfolioImage_6 from './../../assets/images/asset 6.png';

import style from './Portfolio.module.css';

export default class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <section className='portfolio'>
          <div className='container'>
            <div className='head'>
              <h2 className='color_black'>PORTFOLIO</h2>
              <i className={`fa-solid fa-star fa-xl color_black`}></i>
            </div>
            <div className='portfolio-content'>
              <div className='row'>
                <div className='col-md-4'>
                  <div className={`${style.image} m-3`}>
                    <img src={portfolioImage_1} alt='Portfolio' className={`w-100 rounded-3`}></img>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className={`${style.image} m-3`}>
                    <img src={portfolioImage_2} alt='Portfolio' className={`w-100 rounded-3`}></img>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className={`${style.image} m-3`}>
                    <img src={portfolioImage_3} alt='Portfolio' className={`w-100 rounded-3`}></img>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className={`${style.image} m-3`}>
                    <img src={portfolioImage_4} alt='Portfolio' className={`w-100 rounded-3`}></img>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className={`${style.image} m-3`}>
                    <img src={portfolioImage_5} alt='Portfolio' className={`w-100 rounded-3`}></img>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className={`${style.image} m-3`}>
                    <img src={portfolioImage_6} alt='Portfolio' className={`w-100 rounded-3`}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}
